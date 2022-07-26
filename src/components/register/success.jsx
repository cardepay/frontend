import React, { Component } from 'react'

export class Success extends Component {
  render() {
    const {values:{phone}} = this.props;
  
    return (
      <div className='flex flex-col items-center h-screen justify-center'>
        <h1>Thank You for your registreation</h1>
        <p>We just sent an Email containing your Wallet tag and
            further instructions
        </p>
        your wallet tag is  {phone}@cardewallet
      </div>
    )
  }
}

export default Success