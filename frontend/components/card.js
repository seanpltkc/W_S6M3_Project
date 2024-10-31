import React from "react";
import figure from "./figure";

export default function Card({ title, text, imageURL, date}) {
    return(
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <figure 
            imageURL={imageURL}
            caption={date}
            />
        </div>
    )
}