import React, { FC, useEffect, useState } from "react"
import lscache from "lscache"
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
        const cachedResult = lscache.get(params.result + "_image")
        if (cachedResult) {
            setJobResult(cachedResult)
            return
        }
        const resp = await client.getJobResult(params.result, {
            params: {
                download: "image"
            }
        })
        lscache.set(params.result + "_image", resp.data)
        setJobResult(resp.data)
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
        <div>
            <button>Cancel</button>
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