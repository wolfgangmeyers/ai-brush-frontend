import React, { FC, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Image } from "./generated-client/api"
import { getClient } from "./client"
import lscache from "lscache"
import moment from "moment"

export const Images: FC = () => {
    const [images, setImages] = useState<Array<Image>>([])
    const history = useHistory()
    const client = getClient()

    // direction = reverse
    // cursor = current time : moment().valueOf()
    async function load(cursor?: number) {
        cursor = cursor || moment().valueOf()
        const imageIdsResp = await client.listImages(cursor, "reverse")
        if (imageIdsResp.data.images) {
            let uncachedImages: Array<Image> = []
            let cachedImages: Array<Image> = []
            imageIdsResp.data.images.forEach(img => {
                const cachedImage = lscache.get("images/" + img.id + "_thumbnail")
                if (cachedImage) {
                    cachedImages.push(cachedImage)
                } else {
                    uncachedImages.push(img)
                }
            })
            const imageResp = await Promise.all(
                uncachedImages.map(img => client.getImage(img.id as string, "thumbnail"))
            )
            for (let img of imageResp) {
                lscache.set("images/" + img.data.id + "_thumbnail", img.data)
            }
            const images = [
                ...imageResp.map(r => r.data as Image),
                ...cachedImages
            ]
            images.sort((a, b) => (b.created as number) - (a.created as number))
            setImages(prev => [
                ...prev,
                ...images,
            ])
        }
        // setImages(prev => [])
    }

    useEffect(() => {
        load()
    }, [])
    // TODO: load more button

    return (
        <div style={{ padding: "50px" }}>
            {images.map(img => (
                <div key={img.id} style={{margin: "10px", float: "left", border: "1px solid black", padding: "5px"}}>
                    <img onClick={() => history.push(`/images/${img.id}`)} style={{width: "200px", cursor: "pointer"}} src={`data:image/jpeg;base64,${img.encoded_thumbnail}`}></img>
                </div>
            ))}
        </div>
    )
}