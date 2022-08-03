import React from 'react'
import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import notfound from '../assets/404.png';
import logo from '../assets/logo.png'
const PageNotFound = () => {
  return (
    <><div class="min-w-screen min-h-screen bg-pink-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div class="flex-1 max-h-[500px] ax-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div class="w-full md:w-1/2">
          <div class="mb-10 lg:mb-12">
              <img src={logo} width={150} />
          </div>
          <div class="mb-10 md:mb-20 text-black-600">
            <h1 className='text-3xl lg:text-5xl text-500 '>404</h1>
            <h3 class="font-black uppercase text-2xl lg:text-3xl primary mb-10">You seem to be lost!</h3>
            <p className='text-xs'>The page you're looking for isn't available.
              <span className='block'>Try searching again or use the Go Back button below.</span>
            </p>
          </div>
          <div class="mb-20 md:mb-0">
            <Link to="/">
            <button class="text-lg font-light text-sm flex itrems-center gap-2 outline-none focus:outline-none transform transition-all hover:scale-110  hover:text-pink-600"><BsHouseFill /> <span>Go Home</span> </button>
            </Link>
          </div>
        </div>
        <div class="w-full hidden md:w-1/2 md:block text-center select-none event-none">
          <img src={notfound} />
        </div>
      </div>
      <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div class="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
    </div></>
  )
}

export default PageNotFound