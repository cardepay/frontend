import React, { Component } from 'react'
import { FaLock , FaUser, FaPhone, FaEnvelope, FaGlobe, FaBriefcase} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {InputIcon} from "../input/index";


export class Bank extends Component {
    continue =e => {
    e.preventDefault();
    this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
        }
    render() {
    const {values, handleChange} = this.props;
    this.props.values;
    return (
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
                Hi there, how do you want to recieve payouts?
              </p>
            </div>
    
            <form className="text-black">
        <div className="py-6 flex justify-center flex-wrap flex-col items-center">
          
           
        <InputIcon  
        icon={<FaBriefcase />}
                  type="text"
                  placeholder="What Bank do you use?"
                  id="bank"
                  onChange={handleChange('bank')}
                  defaultValue={values.bank}
                  />
        <InputIcon  
        icon={<FaGlobe />}
                  type="contry"
                  placeholder="What type of account?"
                  id="acctType" 
                  onChange={handleChange('acctType')}
                  defaultValue={values.acctType}
                  />
        <InputIcon  
        icon={<FaUser />}
                  type="text"
                  placeholder="Uhm... Account Details"
                  id="acctNum"
                  onChange={handleChange('acctNum')}
                  defaultValue={values.acctNum} />

                 
        <InputIcon  
        icon={<FaUser />}
                  type="text"
                  placeholder="Finally, Your Account Name"
                  id="acctName"
                  onChange={handleChange('acctName')}
                  defaultValue={values.acctName}
                   />
    </div>
    
           <center> 
           <button className="p-3 py-4 text-white bg-primary text-xs  md:w-[20%] mr-4 transition-all hover:text-primary hover:bg-black"
              onClick={this.back}
              >
                        Back
                      </button>
              <button className="p-2 py-4 text-white bg-black text-xs  md:w-[20%]   transition-all hover:text-primary hover:bg-black"
              onClick={this.continue}
              >
                        Submit
                      </button>
                  
              </center>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

export default Bank