import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input/index";
// import logo from '../assets/logo.png'
import '../style/style.css'

const ForgottenPassword = () => {
  const [success, setSuccess] = useState(false)
  return (
    <main className="flex h-screen w-screen slide-top" style={{marginTop:100}}>
       {/* ***responsive marker */}
       <div className="sign-bg h-full w-3/4 bg-primary hidden md:block"></div>

<div className=" h-screen relative w-full p-12">
  {/* ***responsive marker */}
<div className="m-auto md:p-10 md:w-full" >
      <div className="absolute top-0 right-0 p-4 text-xs">
        Not Registered?{" "}
        <Link to="/signup" className="text-primary hover:underline">
          Create an Account
        </Link>{" "}
      </div>
      {
        !success ? (
          <Fragment>
               <div className="">
        <Link to="/">
          {/* <img src={logo} alt="cardepay" width={150} className="logo" /> */}
        </Link>
        <h1 className="font-bold text-3xl py-2">Forgotten Password</h1>
        <p className="text-xs">
        Recover your Forgotten Password
        </p>
      </div>

      <form className="py-12" onSubmit={()=>{
        setSuccess(true)
      }}>
        <Input
          label="Username"
          type="text"
          placeholder="Enter your Username"
          id="username"
        />
        <button className="p-3 py-4 text-white bg-primary text-xs w-full transition-all hover:bg-black">
          Recover My Account
        </button>
        <Link
          to="/login"
          className="my-4 block text-xs  transition-all text-primary hover:underline "
        >
          Login with Password 
        </Link>
      </form>
          </Fragment>
        ) :
        (
          <div className='flex justify-around font-bold py-[50%] relative items-end h-full w-full'>
            <p>Success, check your mail! </p>
            </div>
        )
      }
    </div>
    </div>
  </main>
  );
};

export default ForgottenPassword;