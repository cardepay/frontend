import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import logo from '../assets/favicon.svg';

const signup = () => {
  return (
    <main className="flex h-screen w-screen">
    <div className="h-full w-3/4 bg-primary">1</div>

    <div className="h-screen w-full p-12">
      <div className="absolute top-0 right-0 p-4 text-xs">
        Not Registered?{" "}
        <Link to="/" className="text-primary hover:underline">
          Create an Account
        </Link>{" "}
      </div>
      <div className="">
        <Link to="/">
          <img src={logo} alt="cardepay" width={50} className="logo" />
        </Link>
        <h1 className="font-bold text-3xl py-2">Sign Up</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="py-12">
        <Input
          label="Email"
          type="email"
          placeholder="Enter Email"
          id="email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Password"
          id="password"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Password"
          id="password2"
        />

        <button className="p-3 py-4 text-white bg-primary text-xs w-full transition-all hover:text-black">
          Login
        </button>
        <Link
          to="/"
          className="my-4 block text-xs  transition-all text-primary hover:underline "
        >
          Forgotten Password ?
        </Link>
      </div>
    </div>
  </main>
  )
}

export default signup