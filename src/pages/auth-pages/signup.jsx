import React from 'react'
import { FaLock , FaUser, FaPhone, FaEnvelope, FaGlobe, FaBriefcase} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {InputIcon} from "../../components/input/index";
const Signup = () => {
  return (
    <main className="flex min-h-screen h-screen w-screen slide-top" style={{marginTop:100}}>
    {/* ***responsive marker */}
    <div className="sign-bg h-full w-3/4 bg-primary hidden md:block"></div>

    <div className="h-screen relative w-full p-6">
      {/* ***responsive marker */}
      <div className="m-auto md:p-10 md:w-full">
        <div className=" absolute top-0 right-0 p-4 text-xs">
          Already Registered?{" "}
          <Link to="/signin" className="text-primary  hover:underline">
            Login here
          </Link>{" "}
        </div>
        <div className="text-center">
          <h1 className="font-bold text-3xl py-2">Hello Cutie</h1>
          <p className="text-xs">
            Create a new Account
          </p>
        </div>

        <form className="">
    <div className="py-6 flex justify-center flex-wrap">
      
       
    <InputIcon  
    icon={<FaBriefcase />}
              type="text"
              placeholder="Enter Username"
              id="username" />
    <InputIcon  
    icon={<FaGlobe />}
              type="contry"
              placeholder="Enter Country"
              id="country" />
    <InputIcon  
    icon={<FaUser />}
              type="text"
              placeholder="Enter First Name"
              id="first-name" />
    <InputIcon  
    icon={<FaUser />}
              type="text"
              placeholder="Enter Last Name"
              id="last-name" />
   <InputIcon  
    icon={<FaPhone />}
              type="phone"
              placeholder="Enter Phone Number"
              id="phone" />
   <InputIcon  
    icon={<FaLock />}
              type="password"
              placeholder="Enter Password"
              id="password" />
   
   <InputIcon  
    icon={<FaLock />}
              type="password"
              placeholder="Confirm Password"
              id="password2" />
   <InputIcon  
    icon={<FaEnvelope />}
              type="email"
              placeholder="Enter Email"
              id="email" />
   
    </div>

    <button className="p-3 py-4 text-white bg-primary text-xs w-full transition-all hover:text-black">
              Continue
            </button>

        </form>
      </div>
    </div>
  </main>
  )
}

export default Signup
