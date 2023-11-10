import Image from 'next/image'
import Form from "@/reacting-to-input/form";
import Picture from "@/reacting-to-input/remove-css";
import Profile from "@/reacting-to-input/edit-profile";
import ClockComponent from "@/clock/color-component";
import TravelPlan from "@/broken-packing/Packing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">


<TravelPlan />

    </main>
  )
}
