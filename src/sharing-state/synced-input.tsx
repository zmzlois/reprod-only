"use client"

import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }
    return (
        <div className={"flex flex-col gap-4"}>
            <Input label="First input"  text={text} onChange={handleChange}/>
            <Input label="Second input" text={text} onChange={handleChange}/>
        </div>
    );
}

function Input({ label, text, onChange }: {label: string, text: string, onChange:(e) => void}) {



    return (
        <label>
            {label}
            {' '}
            <input
                className={"border border-zinc-400 text-zinc-900 rounded-md p-1"}
                value={text}
                onChange={onChange}
            />
        </label>
    );
}
