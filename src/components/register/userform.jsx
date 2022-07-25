import React, { Component } from 'react'
import UserDetails from './UserDetails'
export class Userform extends Component {
  state = {
    step: 1,
    userName:'',
    country:'',
    firstname: '',
    lastname:'',
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
    const {step} = this.state;
    this.setState({
        step: step +1
    });
  }
  // go back
  prevStep =() =>{
    const {step} = this.state;
    this.setState({
        step: step -1
    });
  }

  // When user changes fields
  change = input => e =>{
    this.setState({[input]: e.target.value});
  }
  render() {
    const {step} = this.state;
    const{ username, country, firstName, lastName, phone, email, password, 
        password2, bank, acctType, acctNum,acctName } = this.state;
    const values = {username, country, firstName, lastName, phone, email, password, 
        password2, bank, acctType, acctNum,acctName}
    switch(step){
        case 1:
           return(
             <UserDetails
             nextStep = {this.nextStep}
             change = {this.change}
             values = {values}
             />
           );
        case 2:
            return <h1>Hello 2nd form</h1>
        case 2:
            return <h1>Success</h1>
    }
  }
}

export default Userform