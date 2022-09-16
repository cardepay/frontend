import React from 'react'

const Card = () => {
  return (
    <div className='card rounded-3xl gradient text-white p-6 ring-1 ring-white'>
        <div className='flex items-center justify-between'>
            <h3>Visa</h3>
            <div>m</div>
        </div>
        <h2 className='text-3xl py-6 font-[600]'>4325 6665 3360 3443</h2>
        <div className='flex items-center justify-between'>

    <div className=''>
    <h5 className='text-[9px]'>HOLDER NAME</h5>
    <h2 className='text-md'>John Doe</h2>
        </div>

    <div className=''>
    <h5 className='text-[9px]'>EXPIRES</h5>
    <h2 className='text-md'>04 / 2052 </h2>
        </div>




        </div>
    </div>
  )
}

export default Card