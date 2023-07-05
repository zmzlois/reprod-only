"use client"
import * as React from "react"
import { useForm, useController, UseControllerProps } from "react-hook-form"


type FormValues = {
  FirstName: string
}


function Input(props: UseControllerProps<FormValues>) {
  const { field, fieldState } = useController(props)


  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  )
}


export default function App() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      FirstName: "",
    },
    mode: "onChange",
  })
 
  const [yesdata, setData] = React.useState<FormValues>({ FirstName: "" })
  const onSubmit = (data: FormValues) => {
    setData(data)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="FirstName" rules={{ required: true }} />
      <p>{JSON.stringify(yesdata).split(":")[1].replace(/["}]/g, "")}</p>
      <input type="submit" />
    </form>
  )
}