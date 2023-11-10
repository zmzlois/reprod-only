"use client"

import { useState } from 'react';

export default function EditContact({ initialData, onSave }) {
    const [name, setName] = useState(initialData.name);
    const [email, setEmail] = useState(initialData.email);
    return (
        <section className={"flex flex-col gap-2"}>
            <label>
                Name:{' '}
                <input
                    className={"border border-zinc-400 text-zinc-900 rounded-md p-1"}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                Email:{' '}
                <input
                    className={"border border-zinc-400 text-zinc-900 rounded-md p-1"}
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <button
                className={"bg-blue-400 py-1 px-2 rounded-md"}
                onClick={() => {
                const updatedData = {
                    id: initialData.id,
                    name: name,
                    email: email
                };
                onSave(updatedData);
            }}>
                Save
            </button>
            <button
                className={"bg-blue-400 py-1 px-2 rounded-md"}
                onClick={() => {
                setName(initialData.name);
                setEmail(initialData.email);
            }}>
                Reset
            </button>
        </section>
    );
}
