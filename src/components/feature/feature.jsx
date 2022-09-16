import React from 'react'
import './feature.css'

const Feature = () => {
  return (
    <div className='feature' id='features'>
      <div className='img'>
        <img src='model.png' alt='Claire Charles' />
      </div>
      <div className='feature__list'>
          <div className='item'>
            <p>Transfer/Request</p>
            <center><h6>Users can send money to anyone with an email address. If the email is not registered, an email will be sent to prompt the recipient to register and confirm the transfer was received. </h6></center>
          </div>
          <div className='item'>
            <p>VIrtual Cards / QR</p> 
            <center><h6>You can convert account balance to virtual cards to pay for online tansactions, with our QR banking technology, your customers caan pay you directly without exchanging cards. </h6></center>
          </div>
          <div className='item'>
            <p>Payment Button</p> 
            <center><h6>Create Payment links such as a single charge link to charge your clients a fixed or any amount. Run crowdfunding events by creating donation pages . </h6></center>
          </div>
          <div className='item'>
            <p>StoreFronts</p> 
            <center><h6>With Carde, you can startyour online store without needing to build your own website, you get to manage your store directly from yout dashboard. You also recieve payment directly to your wallet. </h6></center>
          </div>
          <div className='item'>
            <p>Invoices</p> 
            <center><h6>Create invoices and send them to your clients for payments. An invoice can only be paid by the email address associated with it. you can also recieve offline payment then mark invoice as paid manually.</h6></center>
          </div>
          <div className='item'>
            <p>Subscription</p> 
            <center><h6>Subscription servie gives you an opportunity to bill at interval, you can run a co-operative society, daily, weekly or monthly billing for a service you offer, e.t.c</h6></center>
          </div>
      </div>
    </div>
  )
}

export default Feature