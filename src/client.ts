import * as axios from "axios"
import { AIBrushApi } from "./generated-client/api"

let client: AIBrushApi

export function getClient(): AIBrushApi {
    if (!client) {
        const httpClient = axios.default
        httpClient.defaults.headers.common["apikey"] = localStorage.getItem("apikey")
        client = new AIBrushApi(undefined, "https://qb1eyw689j.execute-api.us-east-1.amazonaws.com/Prod", httpClient)
    }
    return client
}
