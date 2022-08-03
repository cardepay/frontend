const Input = ({width,onChange,label,id,name,type, icon,placeholder}) => {
  return (
    <div style={{width:width && '100%'}} className='bg-gray-700 p-2 my-3 rounded-[20px] relative'>
    <label className='px-3 text-xs text-white opacity-80'>{label}</label>
   <div className='px-3 flex items-center justify-between w-full'>
   <input type={type} id={id} name={name} placeholder={placeholder || ''} onChange={onChange}  className='w-full outline-none text-white bg-transparent'/>
   <span className='text-white cursor-pointer'>{icon}</span>
       </div>
        </div>
  )
}

export default Input