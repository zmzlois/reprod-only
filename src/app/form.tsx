"use client"
import { useState } from "react"
import {FormEventHandler} from "react";

type Status = "typing" | "submitting" | "success"
export default function Form (){
    const [answer, setAnswer] = useState("")
    const [error, setError] = useState<null | unknown | Error>(null)
    const [status, setStatus] = useState<Status>("typing")

    const handleTextareaChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("submitting")
        try {
            await submitForm(answer)
            setStatus("success")
        } catch(err) {
            setStatus("typing")
            setError(err)
        }

        return "something"
    }
    return(
        <>
        <h2>City quiz</h2>
        <p>
            In which city is there a billboard that turns air into drinkable water?
        </p>
        <form onSubmit={handleSubmit}>
        <textarea
            value={answer}
            className={"text-black"}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
        />
            <br />
            <button
                className={"bg-gray-400 py-1 px-4 rounded-md"}
                disabled={
                answer.length === 0 ||
                status === 'submitting'
            }>
                Submit
            </button>
            {error !== null &&
                <p className="Error">
                    {error.message}
                </p>
            }
        </form></>)
}

function submitForm (answer: string): Promise<void>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let  shouldError = answer.toLowerCase() !== "lima"

            if(shouldError){
                reject(new Error("Good guess but a wrong answer"))
            } else {
                resolve()
            }
        })
    })
}