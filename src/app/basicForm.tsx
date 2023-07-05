"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z }  from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import React from 'react'

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String
  gender: GenderEnum
}


function BasicForm() {

const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <button type="submit" >Submit</button>
    </form>
  )
}

export default BasicForm


type Inputs = {
  example: string
  exampleRequired: string
}