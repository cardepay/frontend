import {Link} from 'react-router-dom'
import Input from '../components/Input'
import {AiFillContacts} from 'react-icons/ai'
import {MdAlternateEmail, MdOutlineMail}from 'react-icons/md'
import {FaEye}from 'react-icons/fa'
import Header from '../layout/Header';

const ForgottenPassword = ()=>{
    return(
        <main id='' className='p-12 auth-overlay min-h-screen flex flex-col justify-center'>
            {/* Header here */}
        <Header />
       <div className=''>
       <h4 className=''>RESET PASSWORD</h4>
            <h1 className='text-5xl py-1'>Recover Your Account</h1>
            <p><Link to='/login' className='link'>Login with Password</Link></p>
        </div>
            <form className='my-4 w-[500px]'>
            <Input type='email' label='Tag' id='last-name' placeholder='johnDoe@carde' icon={<MdAlternateEmail/>}  />
        
        {/* forgotten password */}
        {/* button */}
        <button className='px-6 py-4 my-6 w-full hover:bg-gray-900 transition-colors text-xs rounded-full bg-primary text-white'>Recover Account</button>
                </form>

        </main>
    )
}

export default ForgottenPassword