import React, { useState } from "react";

const Tile = props => {

    const [isHover, setIsHover] = useState(false)

    const pos = props.pos
    const posX = ((pos) % 5) * 100
    const posY = ((Math.ceil((pos + 1) / 5)) - 1) * 100
    const color = "green"
    const hoverColor = "darkgreen"
    const width = 100
    const height = 100
    const value = props.value

    return (
        <>
            <div style={{
                width: width,
                height: height,
                position: "absolute",
                left: posX,
                top: posY,
                backgroundColor: isHover ? hoverColor : color,
                borderColor: "black",
                borderWidth: "1px",
                borderStyle: "solid",

            }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <h1 style={{
                    textAlign: "center",
                    color: "white"
                }}>{value}</h1>
            </div>
        </>
    )
}

export default Tile