import React, { FC } from "react"
import { Link } from "react-router-dom"

export const Navigation : FC = () => {
    return (
        <div>
            <Link to="/">Create new Job</Link>&nbsp;
            <Link to="/jobs">Jobs</Link>&nbsp;
            <Link to="/images">Images</Link>
        </div>
    )
}