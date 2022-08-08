import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Input from '../components/Input'
import {AiFillContacts} from 'react-icons/ai'
import {MdAlternateEmail, MdOutlineMail}from 'react-icons/md'
import {FaEye}from 'react-icons/fa'
import logo from '../assets/logo.png'

const SignUp = ()=>{
    const [details, setDetails] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })


  
    return(
        <main id='' className='p-12 auth-overlay min-h-screen flex flex-col justify-center'>
            <Link to='/'>
        <img src={logo} width={120} />
        </Link>
       <div className=''>
       <h4 className=''>JOIN FOR FREE</h4>
            <h1 className='text-5xl py-1'>Create new Account</h1>
            <p>Alrerady A Member? <Link to='/login' className='link'>Login</Link></p>
        </div>
            <form className='my-4 max-w-[500px]' onSubmit={(e)=>{
        e.preventDefault()
        console.log(details)
        }}>

        <div className='flex gap-x-4 flex-col sm:flex-row'>
            <Input type='text' label='First Name' id='first-name' placeholder='John' icon={<AiFillContacts/>} onChange={(e)=> setDetails({...details,firstName:e.target.value}) } />
            <Input type='text' label='Last Name' id='last-name' placeholder='Doe' icon={<AiFillContacts/>} onChange={(e)=> setDetails({...details,lastName:e.target.value}) } />
        </div>
            <Input type='email' label='Email' id='last-name' placeholder='johnDoe@email.com' icon={<MdAlternateEmail/>} onChange={(e)=> setDetails({...details,email:e.target.value}) }  />
           <div className="mt-5">
                <Input type='password' label='Password' id='last-name' placeholder='********' icon={<FaEye/>} onChange={(e)=> setDetails({...details,password:e.target.value}) }  />
           </div>
        
        {/* forgotten password */}

        <Link className='link p-3 text-xs block' to='/forgotten-password'>Forgotten Password ?</Link>

        {/* button */}
        <button className='px-6 py-4 w-full hover:bg-gray-900 transition-colors text-xs rounded-full bg-primary text-white'>Create account</button>
                </form>

        </main>
    )
}

export default SignUp