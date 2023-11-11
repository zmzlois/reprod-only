import { useState, useContext } from 'react';
import { TaskDispatchContext, TasksContext } from './TasksContext';

export default function TaskList() {
    const tasks = useContext(TasksContext)
    return (
        <ul className={"gap-2 flex flex-col"}>
            {tasks.map(task => (
                <li key={task.id} >
                    <Task
                        task={task}

                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TaskDispatchContext);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                       dispatch({
                           type: "changed",
                            task: {
                                 ...task,
                                 text: e.target.value
                            }
                       })
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button
                    className={"bg-blue-400 py-1 px-2 mx-2 rounded-md"}
                    onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                className={"mx-2"}
                checked={task.done}
                onChange={e => {
                   dispatch({
                       type: "changed",
                        task: {
                             ...task,
                             done: e.target.checked
                        }
                   })
                }}
            />
            {taskContent}
            <button
                className={"bg-pink-400 py-1 px-2 rounded-md"}
                onClick={() => {
                dispatch({
                    type: "deleted",
                    id: task.id
                })
                }}>
                Delete
            </button>
        </label>
    );
}
