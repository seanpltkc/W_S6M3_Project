import React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`
max-width: 60%;

figcaption{
    font-style: italic;
}
`

export default function figure({ image, author, date }) {
    return(
        <StyledFigure>
        
            <img src={image}/>
            <figcaption>Awesome pic of the day by {author} on {date}</figcaption>
        
        </StyledFigure>
    )
}