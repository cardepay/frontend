import React from 'react'
import './fund.css'
import phone from '../../assets/phonetest.png'
const Fund = () => {
  return (
    <div className='fund'>
       <div className='fund__text-left'>
        <h3 className="title">Fund your wallet  the way you want to</h3>
        <li><span>Cryptocurrency:</span> You can fund your wallet using Bitcoin or Etherum.</li>
        <li><span>USSD:</span> You can fund your wallet using ussd code.</li>
        <li><span>Debit Card:</span> Carde wallet can be funded with your card.</li>
        <li><span>Airtime:</span> Carde wallet can be funded using your airtime (Beta)</li>
        <li><span>Bank Transfer:</span>You can manually transfer from your account.</li>
       </div>
       <div className='phone'>
        <img src={phone} alt='Phone' />
       </div>
       <div className='fund__text-right'>
          <h3 className="title"> Why Fund Your wallet</h3>
          <li>Transfer/Request of Money</li>
          <li>Payment Pages or buttons</li>
          <li>Bill Payment</li>
          <li>Website Integration</li>
          <li>Storefront or product purchase</li>
          <li>Invoice Payment</li>
          <li>Subscription service(recurring payment / one-time plan)</li>

       </div>
    </div>
  )
}

export default Fund