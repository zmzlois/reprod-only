"use client"
import { useState } from 'react';

export default function AddItem({ onAddItem }) {
    const [title, setTitle] = useState('');
    return (
        <div className={"my-2 flex gap-2"}>
            <input
                className={"border border-zinc-400 text-zinc-900 rounded-md p-1"}
                placeholder="Add item"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddItem(title);
            }} className={"bg-blue-400 py-1 px-2 rounded-md"}>Add</button>
        </div>
    )
}
