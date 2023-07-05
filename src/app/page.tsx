import React from 'react'
import { MultiToggle } from './toggle'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useFieldArray, useForm } from "react-hook-form"
const dateSchema = z.object({
  weekdays: z.array(z.string()),
})

function Page() {

const form = useForm({
  resolver: zodResolver(dateSchema),
  defaultValues: {
    weekdays: [],
  },
})
  return (
    <div>

            <MultiToggle
              options={WeekDays.map((day) => day)}
              control={form.control}
              name="weekdays"
            />
    </div>
  )
}

export default Page

const WeekDays = [
  { name: "Mon", id: "1" },
  { name: "Tue", id: "2" },
  { name: "Wed", id: "3" },
  { name: "Thu", id: "4" },
  { name: "Fri", id: "5" },
  { name: "Sat", id: "6" },
  { name: "Sun", id: "7" },
]
