'use client'
import React from "react"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import '../app/LogCalendar.css'


export default function LogCalendar(){
  const [date, setDate] = React.useState<Date | undefined>(new Date())
return (
  <div>
  <div className="flex justify-center">
    <p className="lift-title font-extrabold text-center">Click Day To Add Workout Or View Previous Workouts</p>
  </div>
  <div className="flex justify-center ">
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="cal rounded-md border mt-2"
  />
  </div>
  </div>
)
}
