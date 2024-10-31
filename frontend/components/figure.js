import React from "react";

export default function figure({ imageURL, caption}) {
    return(
        <figure>
            <img src={imageURL}/>
            <figcaption>Awesome pic taken on {caption}</figcaption>
        </figure>
    )
}