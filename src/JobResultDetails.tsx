import React, { FC, useEffect, useState } from "react"
import * as mcache from "./mcache"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getClient } from "./client"
import { JobResult } from "./generated-client"

export const JobResultDetails: FC = () => {
    const params = useParams() as any
    const client = getClient()
    const history = useHistory()

    const [jobResult, setJobResult] = useState<JobResult | undefined>(undefined)

    async function init() {
        const cachedResult: JobResult | null = mcache.get("results/" + params.result + "_image")
        if (cachedResult) {
            setJobResult(cachedResult)
            return
        }
        const resp = await client.getJobResult(params.result, "image")
        mcache.set("results/" + params.result + "_image", resp.data)
        setJobResult(resp.data)
    }

    function onCancel() {
        history.push(`/jobs/${jobResult?.job_id}`)
    }

    async function onDelete() {
        await client.deleteJobResult(jobResult?.id as string)
        history.push(`/jobs/${jobResult?.job_id}`)
    }

    async function onSave() {
        await client.saveJobResult(jobResult?.id as string)
        history.push(`/jobs/${jobResult?.job_id}`)
    }

    async function onSaveAndFork() {
        await client.saveJobResult(jobResult?.id as string)
        history.push(`/?parent=${jobResult?.id}`)
    }

    useEffect(() => {
        if (!jobResult || jobResult.id !== params.result) {
            init()
        }
    }, [jobResult, params.result])

    return (
        <div style={{ padding: "50px" }}>
            <button onClick={() => onCancel()}>Cancel</button>
            <button onClick={() => onDelete()}>Delete</button>
            <button onClick={() => onSave()}>Save</button>
            <button onClick={() => onSaveAndFork()}>Save and fork</button>
            <hr/>
            {jobResult && (
                <img style={{width: "512px"}} src={`data:image/jpeg;base64,${jobResult.encoded_image}`}></img>
            )}
        </div>
    )
}