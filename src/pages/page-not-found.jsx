import React from 'react'
import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import './style/style.css'
const PageNotFound = () => {
  return (
    <><div class="min-w-screen min-h-screen bg-pink-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div class="flex-1 max-h-full ax-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div class="w-full md:w-1/2">
          <div class="mb-10 lg:mb-12">
              <img src='logo.png' />
          </div>
          <div class="mb-10 md:mb-20 text-black-600 font-light">
            <h1 class="font-black uppercase text-3xl lg:text-5xl primary text-500 mb-10">You seem to be lost!</h1>
            <p>The page you're looking for isn't available.</p>
            <p>Try searching again or use the Go Back button below.</p>
          </div>
          <div class="mb-20 md:mb-0">
            <button class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 primary hover:text-pink-600"><Link to="/"><BsHouseFill /> Go Home </Link></button>
          </div>
        </div>
        <div class="w-full md:w-1/2 text-center">
          <img src='404.png' />
        </div>
      </div>
      <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div class="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
    </div></>
  )
}

export default PageNotFound