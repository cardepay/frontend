import React from 'react'
import './feature.css'
import model from '../../assets/model.png'

const Feature = () => {
  return (
    <div className='feature'>
      <div className='img'>
        <img src={model} alt='Claire Charles' />
      </div>
      <div className='feature__list'>
          <div className='item'>
            <h5>Transfer/Request</h5> 
            <center><h6>Users can send money to anyone with an email address. If the email is not registered, an email will be sent to prompt the recipient to register and confirm the transfer was received. </h6></center>
          </div>
          <div className='item'>
            <h5>VIrtual Cards / QR</h5> 
            <center><h6>You can convert account balance to virtual cards to pay for online tansactions, with our QR banking technology, your customers caan pay you directly without exchanging cards. </h6></center>
          </div>
          <div className='item'>
            <h5>Payment Button</h5> 
            <center><h6>Create Payment links such as a single charge link to charge your clients a fixed or any amount. Run crowdfunding events by creating donation pages . </h6></center>
          </div>
          <div className='item'>
            <h5>StoreFronts</h5> 
            <center><h6>With Carde, you can startyour online store without needing to build your own website, you get to manage your store directly from yout dashboard. You also recieve payment directly to your wallet. </h6></center>
          </div>
          <div className='item'>
            <h5>Invoices</h5> 
            <center><h6>Create invoices and send them to your clients for payments. An invoice can only be paid by the email address associated with it. you can also recieve offline payment then mark invoice as paid manually.</h6></center>
          </div>
          <div className='item'>
            <h5>Subscription</h5> 
            <center><h6>Subscription servie gives you an opportunity to bill at interval, you can run a co-operative society, daily, weekly or monthly billing for a service you offer, e.t.c</h6></center>
          </div>
      </div>
    </div>
  )
}

export default Feature