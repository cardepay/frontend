import React from 'react';
import { ReactNode, useState } from 'react'
import { FaUser } from 'react-icons/fa';


const Input = ({label, type, id, placeholder,errorMsg}) => {
  const [error, triggerError]= useState(false);

  // testing handler
  const InputHandler = (e)=>{
    if(e.target.value.length < 6) triggerError(true)
    else triggerError(false)
  }
  return (
    <div className="grid gap-1 pb-7 w-full">
    <label htmlFor={id} className="text-sm">{label && ''}</label>
    <input type={type} id={id} placeholder={placeholder} onChange={InputHandler} className={`ring-1 w-full outline-none p-3 text-xs transition-all ${error ? 'ring-red' : 'ring-black/25 focus:ring-black/50'}`}/>
    <p className={`text-red transition-all select-none text-xs ${!error && 'hidden'}`}>{ errorMsg || 'Incorrect '  }</p>
</div>
  )
}


const InputIcon = ({ type,icon, id, placeholder,errorMsg,defaultValue, onChange}) => {
  const [error, triggerError]= useState(false);
  // testing handler
  // const InputHandler = (e)=>{
  //   if(e.target.value.length < 6) triggerError(true)
  //   else triggerError(false)
  // }
  return (
    <div className="grd gap-1 pb-7">
      <div className="flex items-center gap-1">
      <div className="bg-gray-200 rounded-l-xl p-3">
      {icon}
      </div>
    <input type={type} id={id} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} className={`ring-none outline-none p-3 text-xs transition-all ${error ? 'ring-red' : 'ring-black/25 focus:ring-black/50'}`}/>
      </div>
   <p className={`text-red transition-all select-none text-xs ${!error && 'hidden'}`}>{ errorMsg || 'Incorrect '  }</p>
</div>
  )
}

export default Input
export { InputIcon}
 

