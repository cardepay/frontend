import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    console.log('submitted')
    axios.post("https://carde.herokuapp.com/usersignup/", JSON.stringify(values))
      .then = () =>{
        console.log(Response)

      }  
    //FORM PROCESSING
    this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
        }
        

    render() {
       const values = this.props; 
    //this.props.values;
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
              {JSON.stringify({values})}
            </div>
            <div className="text-center text-black">
              <h1 className="font-bold text-3xl py-2">One Last Click</h1>
              <p className="text-xs">
                Confirm Your Details
                ()
              </p>
            </div>
          
        </div>
    
           <center> 
           <button className="p-3 py-4 text-white bg-primary text-xs  md:w-[20%] mr-4 transition-all hover:text-primary hover:bg-black"
              onClick={this.back}
              >
                        Back
                      </button>
              <button  className="p-2 py-4 text-white bg-black text-xs  md:w-[20%]   transition-all hover:text-primary hover:bg-black"
              onClick={this.continue}
              >
                        Submit
                      </button>
                  
              </center>
          </div>
      </main>
    )
  }
}

export default Confirm