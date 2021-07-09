import React, { FC, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Image } from "./generated-client/api"
import { getClient } from "./client"
import * as mcache from "./mcache"
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
                const cachedImage: Image | null = mcache.get("images/" + img.id + "_thumbnail")
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
                mcache.set("images/" + img.data.id + "_thumbnail", img.data)
            }
            let images = [
                ...imageResp.map(r => r.data as Image),
                ...cachedImages
            ]

            setImages(prev => {
                images = [
                    ...prev,
                    ...images
                ]
                images.sort((a, b) => (b.created as number) - (a.created as number))
                return images
            })
        }
        // setImages(prev => [])
    }

    useEffect(() => {
        setImages([])
        load()
    }, [])

    function onLoadMore() {
        const cursor = Math.min(...images.map(i => i.created as number))
        load(cursor)
    }

    return (
        <div style={{ padding: "50px" }}>
            {images.map(img => (
                <div key={img.id} style={{margin: "10px", float: "left", border: "1px solid black", padding: "5px"}}>
                    <img onClick={() => history.push(`/images/${img.id}`)} style={{width: "256px", cursor: "pointer"}} src={`data:image/jpeg;base64,${img.encoded_thumbnail}`}></img>
                </div>
            ))}
            <div style={{margin: "10px", float: "left", border: "1px solid black", padding: "5px"}}>
                <button onClick={() => onLoadMore()} style={{ width: "256px", height: "256px" }}>
                    Load More
                </button>
            </div>
        </div>
    )
}