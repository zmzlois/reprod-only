"use client";

import Link from "next/link";
import { useEffect, useRef, useState} from "react";

// #da36334d
// [ColorTone.DiscordLight]: ["#5865F2", "#F0F0F0", "#8db9e2"],
// The below set up will allow us in the future to have multiple color tones or if we want something more animated
enum ColorTone {
  DiscordLight = 1,
  DiscordDark = 2,
} 
const ColorMap = {
  [ColorTone.DiscordLight]: ["#d1d5ff", "#FCE7F3", "#8db9e2"],
  [ColorTone.DiscordDark]: ["#7289DA", "#29bc9b", "#2C2F33"],
}

const LabelMap = {
  [ColorTone.DiscordLight]: "Discord Light",
  [ColorTone.DiscordDark]: "Discord Dark",
}
function Hero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [colorTone, setColorTone] = useState<ColorTone>(ColorTone.DiscordLight);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const [ a, b, c ] = ColorMap[colorTone];

    wrapperRef.current.style.setProperty("--color-a", a);
    wrapperRef.current.style.setProperty("--color-b", b);
    wrapperRef.current.style.setProperty("--color-c", c);

  }, [colorTone]);

  return (
    <div
      id="hero-top"
      className="grid items-center content-center justify-center overflow-x-hidden text-center md:h-96 h-72"
    >
      <div  ref={wrapperRef}
        className="relative mx-auto w-screen z-0 md:h-96 h-72 overflow-hidden bg-gradient-to-br from-[--color-a]  via-[--color-b]  to-[--color-c]  p-8 text-white duration-500 ease-in [transition-property:_--color-a,_--color-b,_--color-c] content-center grid 
        before:absolute before:left-[20%] before:top-[10%] before:h-[50%] before:w-[70%] before:origin-[30%] before:animate-blob before:rounded-3xl before:bg-gradient-to-br before:from-[--color-a] before:to-[--color-b] before:blur-[80px] before:brightness-125 before:overflow-hidden
        after:absolute after:left-[40%] after:top-[30%] after:h-[80%] after:w-[70%] after:origin-[60%] after:animate-blob-reverse after:rounded-3xl after:bg-gradient-to-br after:from-[--color-a] after:to-[--color-c] after:blur-[100px] after:brightness-125 after:overflow-hidden"
     >
      <Link href="/" className="relative z-20 mb-10 justify-self-center">
        <h1 className="text-4xl italic font-extrabold leading-tight md:text-8xl md:leading-tighter text-indigo-950">
          STAND UP BOT{" "}
          <span className="text-sm leading-tighter">
            <br className="block" /> FOR REMOTE TEAMS
          </span>
          <br className="block mb-4 md:hidden" /> ON DISCORD
        </h1>
      </Link>
      </div>
    </div>
  );
}

export default Hero;
