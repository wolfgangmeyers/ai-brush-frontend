import React, { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Job, JobResult } from "./generated-client/api"
import { getClient } from "./client"

export const JobDetails: FC = () => {

    const [job, setJob] = useState<Job | undefined>(undefined)
    const [results, setResults] = useState<Array<JobResult>>([])

    const params = useParams() as any
    const client = getClient()

    async function init() {
        const resp = await client.getJob(params.job)
        setJob(resp.data)
        await refresh()
    }

    async function refresh() {
        const resultIdsResp = await client.listJobResults(params.job)
        if (resultIdsResp.data.results) {
            const resultsResp = await Promise.all(resultIdsResp.data.results.map(item => client.getJobResult(item.id as string)))
            setResults(resultsResp.map(resp => resp.data as JobResult))
        }
    }

    async function fetchLatest() {
        const maxCreated = Math.max(...results.map(r => r.created as number))
        const resultIdsResp = await client.listJobResults(params.job, maxCreated, "forward")
        if (resultIdsResp.data.results) {
            const resultsResp = await Promise.all(resultIdsResp.data.results.map(item => client.getJobResult(item.id as string)))
            setResults(results => [...resultsResp.map(resp => resp.data as JobResult), ...results])
        }
    }

    useEffect(() => {
        if (!job || job.id !== params.job) {
            init()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.job, job])

    return (
        (job &&
            <div style={{ padding: "50px" }}>
                Label: {job.label}
                <br />
                <button onClick={() => refresh()}>Refresh all</button>
                <button onClick={() => fetchLatest()}>Fetch latest</button>
                <hr/>
                {results.map(result => (
                    <div key={result.id} style={{margin: "10px", float: "left", border: "1px solid black", padding: "5px"}}>
                        <img style={{width: "200px"}} src={`data:image/png;base64,${result.encoded_image}`}></img>
                    </div>
                ))}
            </div>
        ) || <div></div>
    )
}