import Input from '../components/Input'
import {MdAlternateEmail, MdOutlineMail}from 'react-icons/md'
import fw from '../assets/flutterwave.svg';
import pp from '../assets/paypal.svg';
import Card from '../components/Card'
const Hero = () => {
  return (
    <main className='min-h-screen flex items-center' id='hero'>
      <div className='p-12'>
      <h1 className='py-4 text-5xl font-medium'>
            <span className='block'>Your future</span>
            <span className='block'><span className='primary'>payment</span> is here.</span>
        </h1>
        <p className='text-sm w-[500px] my-3'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea fuga possimus voluptatem quo doloribus sequi repellat corporis veritatis soluta
        </p>
        <p className='px-5 py-1 text-xs text-[10px] rounded-full bg-primary inline-block'>JOIN OUR WAITLIST</p>
        <Input type='email' label='Email' id='last-name' placeholder='JohnDoe@gmail.com' icon={<MdOutlineMail/>}  />
        <div className='my-6 select-none pointer-events-none'>
        <span className='text-sm opacity-80'>INTEGRATIONS:</span>
        <div className='flex gap-x-3'>
        <img src={fw} width={150} />
        <img src={pp} width={100} />
        </div>
        </div>
          </div>


      <div>
    <Card />
    <Card />
          </div>
    </main>
  )
}

export default Hero