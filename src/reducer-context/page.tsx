"use client"

import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksContext, TaskDispatchContext } from "@/reducer-context/TasksContext";

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <TasksContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                <div className={"flex flex-col gap-4"}>
                    <h1>Day off in Kyoto</h1>
                    <AddTask

                    />
                    <TaskList

                    />
                </div>
            </TaskDispatchContext.Provider>
        </TasksContext.Provider>

    );
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];
