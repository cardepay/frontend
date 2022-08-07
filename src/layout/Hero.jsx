import Input from '../components/Input'
import {MdAlternateEmail, MdOutlineMail}from 'react-icons/md'
import fw from '../assets/flutterwave.svg';
import pp from '../assets/paypal.svg';
import Card from '../components/Card'
const Hero = () => {
  return (
    <main className='py-12 flex relative flex-col md:flex-row items-center' id='hero'>
      <div className='p-12'>
      <h1 className='py-4 text-5xl text-center md:text-left font-medium'>
            <span className='block'>Your future</span>
            <span className='block'><span className='primary'>payment</span> is here.</span>
        </h1>
        <p className='text-sm max-w-[500px] text-center md:text-left my-3'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea fuga possimus voluptatem quo doloribus sequi repellat corporis veritatis soluta
        </p>
       <div className="text-center md:text-left ">
          <p className='px-5 py-1 text-xs text-[10px] rounded-full bg-primary inline-block '>JOIN OUR WAITLIST</p>
       </div>
      <div className="relative">
      <Input type='email' label='Email' id='last-name' placeholder='JohnDoe@gmail.com' icon={<MdOutlineMail/>}  />
      </div>
        <div className='my-6 text-center md:text-left  select-none pointer-events-none'>
        <span className='text-sm opacity-80'>INTEGRATIONS:</span>
        <div className='flex gap-x-3 justify-center md:justify-start '>
        <img src={fw} width={150} />
        <img src={pp} width={100} />
        </div>
        </div>
          </div>


      <div className='scale-[0.8]'>
    <Card />
    <Card />
          </div>
    </main>
  )
}

export default Hero