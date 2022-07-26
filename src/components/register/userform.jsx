import React, { Component } from 'react'
import UserDetails from './UserDetails'
import Bank from './bank'
import Confirm from './confirm'
import Success from './success'

export class Userform extends Component {
  state = {
    step: 1,
    username:'',
    country:'',
    firstName: '',
    lastName:'',
    phone:'',
    email:'',
    password:'',
    password2:'',
    bank:'',
    acctType:'',
    acctNum: '',
    acctName:'' 
  }

  // Proceed 
  nextStep = () =>{
    const { step } = this.state;
    this.setState({
        step: step +1
    });
  }
  // go back
  prevStep =() =>{
    const { step } = this.state;
    this.setState({
        step: step -1
    });
  }

  // When user changes fields
  handleChange =  e =>{
    const input = e.target.id
    const value = e.target.value
    this.setState ({ [input]: value });
  }


  render() {
    const { step } = this.state;
    const { username, country, firstName, lastName, phone, email, password, 
        password2, bank, acctType, acctNum, acctName } = this.state;
    const values = {username, country, firstName, lastName, phone, email, password, 
        password2, bank, acctType, acctNum, acctName};
    switch(step){
        case 1:
           return(
             <UserDetails
             nextStep = {this.nextStep}
             handleChange = {this.handleChange}
             values = {values}
             />
           )
        case 2:
            return (<Bank
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange = {this.handleChange}
            values = {values}
            />
            )
        case 3:
            return (<Confirm
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            values = {values}
            />
            )
        case 4:
            return( <Success/ >)
    }
  }
}

export default Userform