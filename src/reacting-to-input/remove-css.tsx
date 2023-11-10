"use client"
import { useState } from "react"
import classNames from "classnames"

const cn = classNames

export default function Picture() {
    const [add, setAdd] = useState(false)

    return (
        <div className={cn("background background--active  p-8 rounded-lg cursor-pointer", {"bg-purple-400 transform-all": add})} onClick={() => setAdd(!add)}>
            <img
                className={cn("picture", {"picture--active": add})}
                onClick={() => setAdd(!add)}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
            />
        </div>
    );
}
