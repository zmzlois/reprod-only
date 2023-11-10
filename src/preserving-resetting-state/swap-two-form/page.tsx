"use client"

import { useState } from 'react';

export default function SwapTwoFields() {
    const [reverse, setReverse] = useState(false);
    let checkbox = (
        <label>
            <input
                type="checkbox"
                checked={reverse}
                onChange={e => setReverse(e.target.checked)}
            />
            Reverse order
        </label>
    );
    if (reverse) {
        return (
            <>
                <Field label="Last name" key={"lastname"}/>
                <Field label="First name" key={"firstname"}/>
                {checkbox}
            </>
        );
    } else {
        return (
            <>
                <Field label="First name" key={"firstname"}/>
                <Field label="Last name" key={"lastname"}/>
                {checkbox}
            </>
        );
    }
}

function Field({ label }) {
    const [text, setText] = useState('');
    return (
        <label>
            {label}:{' '}
            <input
                type="text"
                value={text}
                className={"border border-zinc-400 text-zinc-900 rounded-md p-1"}
                placeholder={label}
                onChange={e => setText(e.target.value)}
            />
        </label>
    );
}
