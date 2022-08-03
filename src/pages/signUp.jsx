import {Link} from 'react-router-dom'
import Input from '../components/Input'
import {AiFillContacts} from 'react-icons/ai'
import {MdAlternateEmail, MdOutlineMail}from 'react-icons/md'
import {FaEye}from 'react-icons/fa'
import Header from '../layout/Header';

const SignUp = ()=>{
    return(
        <main id='' className='p-12 auth-overlay min-h-screen flex flex-col justify-center'>
            {/* Header here */}
        <Header />
       <div className=''>
       <h4 className=''>JOIN FOR FREE</h4>
            <h1 className='text-5xl py-1'>Create new Account</h1>
            <p>Alrerady A Member? <Link to='/login' className='link'>Login</Link></p>
        </div>
            <form className='my-4 w-[500px]'>

        <div className='flex gap-x-4'>
            <Input type='text' label='First Name' id='first-name' placeholder='John' icon={<AiFillContacts/>}  />
            <Input type='text' label='Last Name' id='last-name' placeholder='Doe' icon={<AiFillContacts/>}  />
        </div>
            <Input type='email' label='Email' id='last-name' placeholder='johnDoe@email.com' icon={<MdAlternateEmail/>}  />
            <Input type='password' label='Password' id='last-name' placeholder='********' icon={<FaEye/>}  />
        
        {/* forgotten password */}

        <Link className='link p-3 block' to='/'>Forgotten Password ?</Link>

        {/* button */}
        <button className='px-6 py-4 w-full hover:bg-gray-900 transition-colors text-xs rounded-full bg-primary text-white'>Create account</button>
                </form>

        </main>
    )
}

export default SignUp