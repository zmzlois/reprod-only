import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Features from "@/components/Feature";

export default function Header() {
  return (
    <div className="justify-center w-full border-black border-y-2">
      <Hero />
      <div
        className={`flex items-center justify-between h-16 pl-4 border-black border-b-1 border-t-1 md:pl-14 bg-white z-50`}
        id="head"
      >
        <Link href="/">
          <h1 className="text-xl font-extrabold tracking-tighter">ComCord</h1>
        </Link>
        <div className="flex items-center space-x-10 font-light text-md">
          <Link
            href="discord.gg/pw"
            className="transition transform text-indigo-950 hover:underline hover:decoration-pink-300 hover:underline-offset-2 hover:shadow-sm"
            id="link"
          >
            Discord
          </Link>
          <Link
            href="https://github.com/projectwaitless/comcord"
            className="hidden transition transform md:block hover:underline hover:decoration-pink-300 hover:underline-offset-2 hover:shadow-sm"
            id="link"
          >
            GitHub
          </Link>

          <Link
            href="/sign-in"
            className="grid content-center justify-center w-auto h-16 px-10 text-indigo-100 transition transform border-indigo-700 bg-indigo-950 hover:bg-yellow-300 hover:border-1 hover:text-indigo-950 border-b-1"
          >
            <span className="font-normal tracking-wider text-md">SIGN IN</span>
          </Link>
        </div>
      </div>
      <Features />
    </div>
  );
}
