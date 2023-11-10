import Image from 'next/image'
import Form from "@/app/form";
import Picture from "@/app/remove-css";
import Profile from "@/app/edit-profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">


      <Profile/>

    </main>
  )
}
