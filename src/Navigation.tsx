import React, { FC } from "react"
import { Link } from "react-router-dom"

function onSetBackend(): void {
    const backend = prompt("Set backend url (blank to reset to default)")
    if (backend === null) {
        return
    }
    if (backend) {
        localStorage.setItem("backend", backend)
    } else {
        localStorage.removeItem("backend")
    }
    window.location.href = "/"
}

export const Navigation : FC = () => {
    return (
        <div>
            <Link to="/">Create new Job</Link>&nbsp;
            <Link to="/jobs">Jobs</Link>&nbsp;
            <Link to="/images">Images</Link>

            <div style={{ float: "right" }}>
                <button onClick={e => onSetBackend()} >Set backend</button>
            </div>
        </div>
    )
}


