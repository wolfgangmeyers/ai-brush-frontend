import lscache from "lscache"

const m: {[key: string]: any} = {}

export function get<T>(key: string): T | null {
    let result = m[key]
    if (result) {
        return result as T
    }
    result = lscache.get(key)
    if (result) {
        m[key] = result
        return result as T
    }
    return null
}

export function set<T>(key: string, value: T): void {
    m[key] = value
    lscache.set(key, value)
}