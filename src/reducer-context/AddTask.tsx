"use client"

import { useState, useContext } from 'react';
import {TaskDispatchContext, TasksContext} from './TasksContext';

export default function AddTask() {
    const [text, setText] = useState('');
    const tasks = useContext(TasksContext)
    const dispatch = useContext(TaskDispatchContext);
    return (
        <>
            <input
                placeholder="Add task"
                className={"border border-zinc-400 text-zinc-900 rounded-md p-1"}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                className={"bg-blue-400 py-1 px-2 rounded-md"}
                onClick={() => {
                setText('');
                dispatch({
                    type: "added",
                    id: tasks.length++,
                    text: text,
                })
            }}>Add</button>
        </>
    )
}
