import {Link} from 'react-router-dom'
import Input from '../components/Input'
import {AiFillContacts} from 'react-icons/ai'
import {MdAlternateEmail, MdOutlineMail}from 'react-icons/md'
import {FaEye}from 'react-icons/fa'
import Header from '../layout/Header';

const Login = ()=>{
    return(
        <main id='' className='p-12 auth-overlay min-h-screen flex flex-col justify-center'>
            {/* Header here */}
        <Header />
       <div className=''>
       <h4 className=''>WELCOME BACK</h4>
            <h1 className='text-5xl py-1'>Login Into Your Account</h1>
            <p>Not Yet a Member? <Link to='/signup' className='link'>Sign Up</Link></p>
        </div>
            <form className='my-4 w-[500px]'>


            <Input type='email' label='Tag' id='last-name' placeholder='johnDoe@carde' icon={<MdAlternateEmail/>}  />
            <Input type='password' label='Password' id='last-name' placeholder='********' icon={<FaEye/>}  />
        
        {/* forgotten password */}

       <div className='p-3'>
        <Link className='link block text-xs' to='/forgotten-password'>Forgotten Password ?</Link>
           </div>

        {/* button */}
        <button className='px-6 py-4 w-full hover:bg-gray-900 transition-colors text-xs rounded-full bg-primary text-white'>Login</button>
        <div className='p-3'>
       <Link className='link block text-xs text-black' to='/'>Sign in with Magic Link </Link>
           </div>
                </form>

        </main>
    )
}

export default Login