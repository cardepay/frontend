import React, { Component } from 'react'
import { FaLock , FaUser, FaPhone, FaEnvelope, FaGlobe, FaBriefcase} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {InputIcon} from "../input/index";

export class UserDetails extends Component {
    continue = e => {
    e.preventDefault();
    this.props.nextStep();
    }
    render() {
    const {values , handleChange} = this.props;
    return (
        <React.Fragment>
        <main className="flex min-h-screen h-screen w-screen " style={{marginTop:1}}>
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
            <div className="text-center text-black">
              <h1 className="font-bold text-3xl py-2">Hello Cutie</h1>
              <p className="text-xs">
                Create a new Account
              </p>
            </div>
    
            <form className="text-black">
        <div className="py-6 flex justify-center flex-wrap">
          
           
        <InputIcon  
        icon={<FaBriefcase />}
                  type="text"
                  placeholder="Enter Username"
                  id="username"
                  onChange={handleChange}
                  defaultValue={values.username}
                  />
        <InputIcon  
        icon={<FaGlobe />}
                  type="contry"
                  placeholder="Enter Country"
                  id="country" 
                  onChange={handleChange}
                  defaultValue={values.country}
                  />
        <InputIcon  
        icon={<FaUser />}
                  type="text"
                  placeholder="Enter First Name"
                  id="firstName"
                  onChange={handleChange}
                  defaultValue={values.firstName} />

                 
        <InputIcon  
        icon={<FaUser />}
                  type="text"
                  placeholder="Enter Last Name"
                  id="lastName"
                  onChange={handleChange}
                  defaultValue={values.lastName}
                   />
                  
       <InputIcon  
        icon={<FaPhone />}
                  type="phone"
                  placeholder="Enter Phone Number"
                  id="phone"
                  onChange={handleChange}
                  defaultValue={values.phone}
                   />
                  
        <InputIcon  
        icon={<FaEnvelope />}
                  type="email"
                  placeholder="Enter Email"
                  id="email" 
                  onChange={handleChange}
                  defaultValue={values.email}
                  />
       
       <InputIcon  
        icon={<FaLock />}
                  type="password"
                  placeholder="Enter Password"
                  id="password" 
                  onChange={handleChange}
                  defaultValue={values.password}
                  />
                
       
       <InputIcon  
        icon={<FaLock />}
                  type="password"
                  placeholder="Confirm Password"
                  id="password2"
                  onChange={handleChange}
                  defaultValue={values.password2}
                  />
                  
       
        </div>
    
           <center> 
              <button className="p-3 py-4 text-white bg-primary text-xs  md:w-[50%] transition-all hover:text-primary hover:bg-black"
              onClick={this.continue}
              >
                        Continue
                      </button>
              </center>
            </form>
          </div>
        </div>
      </main>
      </React.Fragment>
    )
  }
}

export default UserDetails