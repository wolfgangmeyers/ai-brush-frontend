import React, { FC, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Job, JobResult, Image } from "./generated-client/api"
import { getClient } from "./client"
import lscache from "lscache"

export const JobDetails: FC = () => {

    const [job, setJob] = useState<Job | undefined>(undefined)
    const [results, setResults] = useState<Array<JobResult>>([])
    const [parent, setParent] = useState<Image | undefined>(undefined)

    const params = useParams() as any
    const client = getClient()
    const history = useHistory()

    async function loadParent(parentId: string) {
        const cachedParent = lscache.get(parentId)
        if (cachedParent) {
            setParent(cachedParent)
        } else {
            const parentResp = await client.getImage(parentId)
            setParent(parentResp.data)
        }
    }

    async function init() {
        let cached = lscache.get(params.job)
        if (cached) {
            const job = cached as Job
            setJob(job)
            if (job.parent) {
                await loadParent(job.parent)
            }
            await refresh()
            return
        }
        const resp = await client.getJob(params.job)
        lscache.set(params.job as string, resp.data)
        setJob(resp.data)
        if (resp.data.parent) {
            await loadParent(resp.data.parent)
        }
        await refresh()
    }

    async function refresh() {
        const resultIdsResp = await client.listJobResults(params.job)
        if (resultIdsResp.data.results) {
            const uncachedResults: Array<JobResult> = []
            const cachedResults: Array<JobResult> = []
            resultIdsResp.data.results.forEach(item => {
                let cachedResult = lscache.get(item.id + "_thumbnail")
                if (cachedResult) {
                    cachedResults.push(cachedResult)
                } else {
                    uncachedResults.push(item)
                }
            })
            const resultsResp = await Promise.all(
                uncachedResults.map(
                    item => client.getJobResult(item.id as string, {
                        params: {
                            download: "thumbnail"
                        }
                    })
                )
            )
            for (let item of resultsResp) {
                lscache.set(item.data.id + "_thumbnail", item.data)
            }
            const results = [
                ...resultsResp.map(resp => resp.data as JobResult),
                ...cachedResults
            ]
            results.sort((a, b) => (a.created as number) - (b.created as number))

            setResults(results)
        }
    }

    async function fetchLatest() {
        if (results.length === 0) {
            refresh()
        }
        const maxCreated = Math.max(...results.map(r => r.created as number))
        const resultIdsResp = await client.listJobResults(params.job, maxCreated, "forward")
        if (resultIdsResp.data.results) {
            const resultsResp = await Promise.all(resultIdsResp.data.results.map(item => client.getJobResult(item.id as string)))
            for (let item of resultsResp) {
                lscache.set(item.data.id + "_thumbnail", item.data)
            }
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
                Phrases: {job.phrases && job.phrases.join(", ")}
                <br/>
                Iterations: {job.iterations}
                <br />
                Count: {job.count}
                <br/>
                {parent && <div style={{margin: "10px", border: "1px solid black", padding: "5px"}}>
                        Parent: <img style={{width: "200px", cursor: "pointer"}} src={`data:image/png;base64,${parent.encoded_image}`}></img>
                    </div>}
                <button onClick={() => refresh()}>Refresh all</button>
                <button onClick={() => fetchLatest()}>Fetch latest</button>
                <hr/>
                {results.map(result => (
                    <div key={result.id} style={{margin: "10px", float: "left", border: "1px solid black", padding: "5px"}}>
                        <img onClick={() => history.push(`/job-results/${result.id}`)} style={{width: "200px", cursor: "pointer"}} src={`data:image/jpeg;base64,${result.encoded_image}`}></img>
                    </div>
                ))}
            </div>
        ) || <div></div>
    )
}