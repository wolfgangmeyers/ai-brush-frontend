import React, { FC, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import qs from "qs"

export const Authentication: FC = (props) => {
  const [apikey, setApikey] = useState<string>("")
  const location = useLocation()

  useEffect(() => {
    if (apikey) {
      return
    }
    let key = localStorage.getItem("apikey")
    if (!key) {
      const query = qs.parse(location.search.substring(1))
      if (query["apikey"]) {
        key = query["apikey"] as string
        localStorage.setItem("apikey", key)
        window.location.href = "/"
      }
    }

    if (key) {
      setApikey(key)
    }
  }, [apikey, location.search])

  if (!apikey) {
    return <div>Unauthorized</div>
  }

  return <div>{props.children}</div>
}