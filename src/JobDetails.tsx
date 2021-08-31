import React, { FC, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Job, JobResult, Image } from "./generated-client/api"
import { getClient } from "./client"
import * as mcache from "./mcache"


export const JobDetails: FC = () => {

    const [job, setJob] = useState<Job | undefined>(undefined)
    const [results, setResults] = useState<Array<JobResult>>([])
    const [parent, setParent] = useState<Image | undefined>(undefined)
    const [target, setTarget] = useState<string | undefined>(undefined)

    const params = useParams() as any
    const client = getClient()
    const history = useHistory()

    async function loadParent(parentId: string) {
        console.log("loadParent")
        const cachedParent = mcache.get("results/" + parentId + "_thumbnail") as Image | null
        if (cachedParent) {
            console.log("cached", cachedParent)
            setParent(cachedParent)
        } else {
            console.log("Loading parent")
            const parentResp = await client.getImage(parentId, "thumbnail")
            mcache.set("results/" + parentId + "_thumbnail", parentResp.data)
            setParent(parentResp.data)
        }
    }

    // load job target
    async function loadTarget(job: Job) {
        console.log("Loading target")
        const targetResp = await client.getJobTarget(job.id as string)
        setTarget(targetResp.data?.image)
    }

    async function init() {
        let cached = mcache.get("results/" + params.job)
        if (cached) {
            const job = cached as Job
            setJob(job)
            if (job.parent) {
                await loadParent(job.parent)
            }
            await loadTarget(job)
            await refresh()
            return
        }
        const resp = await client.getJob(params.job)
        mcache.set("results/" + params.job as string, resp.data)
        setJob(resp.data)
        if (resp.data.parent) {
            await loadParent(resp.data.parent)
        }
        await loadTarget(resp.data)
        await refresh()
    }

    async function refresh() {
        const resultIdsResp = await client.listJobResults(params.job)
        if (resultIdsResp.data.results) {
            const uncachedResults: Array<JobResult> = []
            const cachedResults: Array<JobResult> = []
            resultIdsResp.data.results.forEach(item => {
                let cachedResult: JobResult | null = mcache.get("results/" + item.id + "_thumbnail")
                if (cachedResult) {
                    cachedResults.push(cachedResult)
                } else {
                    uncachedResults.push(item)
                }
            })
            const resultsResp = await Promise.all(
                uncachedResults.map(
                    item => client.getJobResult(item.id as string, "thumbnail")
                )
            )
            for (let item of resultsResp) {
                mcache.set("results/" + item.data.id + "_thumbnail", item.data)
            }
            const results = [
                ...resultsResp.map(resp => resp.data as JobResult),
                ...cachedResults
            ]
            results.sort((a, b) => (a.score as number) - (b.score as number))

            setResults(results)
        }
    }

    async function fetchLatest() {

        if (results.length === 0) {
            refresh()
            return
        }
        const maxCreated = Math.max(...results.map(r => r.created as number))
        const resultIdsResp = await client.listJobResults(params.job, maxCreated, "forward")
        if (resultIdsResp.data.results) {
            const resultsResp = await Promise.all(resultIdsResp.data.results.map(item => client.getJobResult(item.id as string)))
            for (let item of resultsResp) {
                mcache.set("results/" + item.data.id + "_thumbnail", item.data)
            }
            setResults(results => [...resultsResp.map(resp => resp.data as JobResult), ...results])
        }
    }

    async function onCancel() {
        await client.cancelJob(params.job)
        alert("Job cancelled")
    }

    useEffect(() => {
        if (!job || job.id !== params.job) {
            init()
        }
        const handle = setInterval(() => {
            fetchLatest()
        }, 10000)
        return () => clearInterval(handle)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.job, job])

    return (
        (job &&
            <div style={{ padding: "50px" }}>
                Label: {job.label}
                <br />
                Phrases: {job.phrases && job.phrases.join(", ")}
                <br/>
                Inverse Phrases: {job.inverse_phrases && job.inverse_phrases.join(", ")}
                <br/>
                Iterations: {job.iterations}
                <br />
                Count: {job.count}
                <br/>
                Results: {results.length}
                <br/>
                <button onClick={() => onCancel()}>Cancel</button>
                <br/>
                {parent && <div style={{margin: "10px", border: "1px solid black", padding: "5px"}}>
                        Parent: <img style={{width: "256px", cursor: "pointer"}} src={`data:image/jpeg;base64,${parent.encoded_thumbnail}`}></img>
                    </div>}

                <br /><br />
                {target && <div style={{margin: "10px", border: "1px solid black", padding: "5px"}}>
                        Target: <img style={{width: "256px", cursor: "pointer"}} src={`data:image/jpeg;base64,${target}`}></img>
                </div>}
                <hr/>
                {results.map(result => (
                    <div key={result.id} style={{margin: "10px", float: "left", border: "1px solid black", padding: "5px"}}>
                        <img onClick={() => history.push(`/job-results/${result.id}`)} style={{width: "256px", cursor: "pointer"}} src={`data:image/jpeg;base64,${result.encoded_thumbnail}`}></img>
                        <br/>
                        Score: {result.score}
                    </div>
                ))}
            </div>
        ) || <div></div>
    )
}