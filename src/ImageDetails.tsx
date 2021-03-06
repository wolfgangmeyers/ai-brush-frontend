import React, { FC, useEffect, useState } from "react"
import * as mcache from "./mcache"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getClient } from "./client"
import { Image } from "./generated-client"

export const ImageDetails: FC = () => {
    const params = useParams() as any
    const client = getClient()
    const history = useHistory()

    const [image, setImage] = useState<Image | undefined>(undefined)

    async function init() {
        const cachedImage: Image | null = mcache.get("/images/" + params.image + "_image")
        if (cachedImage) {
            setImage(cachedImage)
            return
        }
        const resp = await client.getImage(params.image, "image")
        mcache.set("images/" + params.image + "_image", resp.data)
        setImage(resp.data)
    }

    function onCancel() {
        history.push("/images")
    }

    async function onDelete() {
        await client.deleteImage(image?.id as string)
        history.push("/images")
    }

    async function onFork() {
        history.push(`/?parent=${image?.id}`)
    }

    useEffect(() => {
        if (!image || image.id !== params.image) {
            init()
        }
    }, [image, params.image])

    return (
        <div style={{ padding: "50px" }}>
            <button onClick={() => onFork()}>Fork</button>
            <button onClick={() => onCancel()}>Cancel</button>
            <button onClick={() => onDelete()}>Delete</button>
            {/*
            <button onClick={() => onSave()}>Save</button>
            <button onClick={() => onSaveAndFork()}>Save and fork</button> */}
            <br/>
            <label>Phrases:</label>
                {image?.phrases && image.phrases.map((p, i) => (
                    <span style={{marginRight: "5px", borderRadius: "5px", backgroundColor: "#ddd"}} key={`phrase${i}`}>{p}</span>
                ))}
            <br/>
            <label>Inverse Phrases:</label>
                {image?.inverse_phrases && image.inverse_phrases.map((p, i) => (
                    <span style={{marginRight: "5px", borderRadius: "5px", backgroundColor: "#ddd"}} key={`phrase${i}`}>{p}</span>
                ))}
            <hr/>
            {image && (
                <img style={{width: "512px"}} src={`data:image/jpeg;base64,${image.encoded_image}`}></img>
            )}
        </div>
    )
}