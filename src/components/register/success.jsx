import React, { Component } from 'react'

export class Success extends Component {
  render() {
    return (
      <div className='flex flex-col items-center h-screen justify-center'>
        <h1>Thank You for your registreation</h1>
        <p>We just sent an Email containing your Wallet tag and
            further instructions
        </p>
      </div>
    )
  }
}

export default Success