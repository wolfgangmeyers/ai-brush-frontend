import * as axios from "axios"
import { AIBrushApi } from "./generated-client/api"

let client: AIBrushApi

export function getClient(): AIBrushApi {
    if (!client) {
        const httpClient = axios.default
        httpClient.defaults.headers.common["apikey"] = localStorage.getItem("apikey")
        const backend = localStorage.getItem("backend") || "https://qb1eyw689j.execute-api.us-east-1.amazonaws.com/Prod"
        client = new AIBrushApi(undefined, backend, httpClient)
    }
    return client
}
