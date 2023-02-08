import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { moveUp, moveDown, moveLeft, moveRight } from "../redux/app/movement/movementSlice";
import Tile from "./Tile";

const Board = () => {

    const orders = useSelector((state) => state)
    const dispatch = useDispatch()

    const height = 500;
    const width = 500;
    const posX = 500;
    const posY = 100;
    const color = "darkgrey"

    const decideMovement = () => {
        for (let i = 0; i < 24; i++) {
            if (orders.movement.value[23].pos !== 24) {
                return 24
                break;
            }
            if (orders.movement.value[i].pos !== i) {
                return i
                break;
            }
        }
    }

    const move = (pos) => {

        const emptyTile = decideMovement(pos)

        const xEmpty = (Math.ceil((emptyTile + 1) / 5)) - 1
        const xClick = (Math.ceil((pos + 1) / 5)) - 1
        const yEmpty = (emptyTile) % 5
        const yClick = (pos) % 5
        const diffx = Math.abs(yEmpty - yClick)
        const diffy = Math.abs(xEmpty - xClick)

        if (yEmpty === yClick && xEmpty > xClick) {
            dispatch(moveDown({ pos: pos, diffy: diffy }))
        } else if (xEmpty === xClick && yEmpty > yClick) {
            dispatch(moveRight({ pos: pos, diffx: diffx }))
        } else if (xEmpty === xClick && yEmpty < yClick) {
            dispatch(moveLeft({ pos: pos, diffx: diffx }))
        } else if (yEmpty === yClick && xEmpty < xClick) {
            dispatch(moveUp({ pos: pos, diffy: diffy }))
        }
    }

    return (
        <>
            <div style={{
                height: height,
                width: width,
                position: "absolute",
                left: posX,
                top: posY,
                backgroundColor: color
            }}>
                {orders.movement.value.map(order => {
                    return <div onClick={(e) => move(order.pos)}><Tile pos={order.pos} value={order.value + 1} /></div>
                })}
            </div>
        </>
    )
}

export default Board;