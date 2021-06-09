import React, { FC, useEffect, useState } from "react"
import { getClient } from "./client"
import { Job } from "./generated-client/api"
import { Link } from "react-router-dom"

export const ListJobs: FC = props => {

    const client = getClient()

    const [jobs, setJobs] = useState<Array<Job> | undefined>(undefined)

    async function init() {
        const resp = await client.listJobs()
        if (resp.data.jobs) {
            setJobs(resp.data.jobs)
        }
    }

    async function onDelete(jobId: string) {
        await client.deleteJob(jobId)
        if (jobs) {
            const idx = jobs.findIndex(j => j.id === jobId)
            if (idx !== undefined && idx >= 0) {
                setJobs([
                    ...jobs.slice(0, idx),
                    ...jobs.slice(idx + 1),
                ])
            }
        }
    }

    useEffect(() => {
        if (!jobs) {
            setJobs([])
            init()
        }
    }, [jobs])

    return (
        <div style={{padding: "50px"}}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Label</th>
                        <th>Count</th>
                        <th>Iterations</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs && jobs.map(job => (
                        <tr key={job.id}>
                            <td>
                                <Link to={`/jobs/${job.id}`}>
                                    {job.id}
                                </Link>
                            </td>
                            <td>{job.label}</td>
                            <td>{job.count}</td>
                            <td>{job.iterations}</td>
                            <td>
                                <button onClick={() => onDelete(job.id as string)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}