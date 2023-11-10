"use client"
import { useState } from "react"

export default function Clock(props: {color: string; time: string}) {
    const [color, setColor] = useState(props.color)
    return (
        <h1 className={props.color}>
            {props.time}
        </h1>
    )
}