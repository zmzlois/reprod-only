"use client"
import { useState } from "react"
import type { FormEvent } from "react"
import classNames from "classnames"

const cn = classNames
export default function Profile(){

    const [profile, setProfile] = useState({
        firstName: "Jane",
        lastName: "Jacobs",
    })
    const [status, setStatus] = useState<"editing" | "idle" | "error" | "success">("idle")

    function handleButtonOnClick() {
        if (status === "idle") {
            setStatus("editing")
        }
        if (status === "editing") {
            setStatus("idle")
        }
    }



    async function handleSubmit(e) {
        e.preventDefault()
        setStatus("editing")


    }

    return (
        <>
            <form id="form" className={"flex flex-col gap-4 text-start items-start "} onSubmit={handleSubmit}>
                <label>
                    First name:
                </label>
                    <b id="firstNameText" className={cn("block", {"hidden": status !== "idle"})}>{profile.firstName}</b>
                    <input
                        id="firstNameInput"
                        value={profile.firstName}
                        onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                        className={cn("text-zinc-900 px-2 py-1 rounded-md",{"hidden": status === "idle"}, {"block bg-white": status === "editing"})}
                        />

                <label>
                    Last name:
                </label>
                    <b id="lastNameText" className={cn("block", {"hidden": status !== "idle"})}>{profile.lastName}</b>
                    <input
                        id="lastNameInput"
                        onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                        value={profile.lastName}
                        className={cn("text-zinc-900 px-2 py-1 rounded-md", {"hidden": status === "idle"}, {"block ": status === "editing"})}
                        />

                <button type={status !== "idle" ? "submit" : "button"} id="editButton" onClick={handleButtonOnClick} className={"bg-gray-400 py-1 px-4 rounded-md"}>{status === "idle" ? "Edit Profile" : "Submit"}</button>
                <p><i id="helloText">Hello, {profile.firstName}{" "} {profile.lastName}!</i></p>
            </form>

        </>
    )
}

function submitForm (answer: {firstName: string, lastName: string}): Promise<void>{
    return new Promise((resolve, reject) => {
        resolve()
    })
}