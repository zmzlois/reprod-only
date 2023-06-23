import React from 'react'
import Link from 'next/link'

function Features() {
  return (
    <div className="w-full h-[500vh]" id="hero-2">
    <div className="border-black md:grid md:grid-cols-2 md:grid-flow-row border-b-1">
      <div className="grid content-center justify-center px-10 py-12 space-y-8 border-black md:border-r-2">
        <h1 className="text-2xl font-semibold tracking-tighter text-indigo-900">
          Helps remote team work better
          <br /> on our favourite platform
        </h1>
        <ul className="space-y-1 text-md">
          <li>
            <u className="decoration-wavy decoration-rose-400">Customise</u>{" "}
            your own standup in local time.
          </li>
          <li>
            Supports <i>multiple servers/channels</i>
          </li>
          <li>
            <b>Oh boy</b>, <del>very generous free tier</del>
            <br /> and you can even <b className="color">
              include memes
            </b>{" "}
            in your stand up report.
          </li>
        </ul>
        <Link
          href="/sign-in"
          className="inline-flex items-center justify-center w-full px-6 py-3 text-center text-black transition duration-200 ease-in-out transform bg-white border-2 border-black focus:outline-none hover:bg-indigo-700 hover:shadow-none hover:text-white rounded-xl indigo-box-shadow lg:w-auto"
        >
          Connect to discord ⏩️
        </Link>
      </div>
      <div className="grid content-center py-20 text-center bg-indigo-200">
        <h1 className="text-2xl">Reserved space for video</h1>
      </div>
    </div>
  </div>
  )
}

export default Features