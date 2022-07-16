import React from 'react';
import { ReactNode, useState } from 'react'
/*
  @TODO: Properly integrate InputHandler ( func )
*/
interface InputProps{
label:string;
type:string;
errorMsg?:string | ReactNode;
id:string;
placeholder?:string
}

const Input = ({label, type, id, placeholder,errorMsg}:InputProps) => {
  const [error, triggerError]= useState(false);

  // testing handler
  const InputHandler = (e)=>{
    if(e.target.value.length < 6) triggerError(true)
    else triggerError(false)
  }
  return (
    <div className="grid gap-1 pb-7">
    <label htmlFor={id} className="text-sm">{label}</label>
    <input type={type} id={id} placeholder={placeholder} onChange={InputHandler} className={`ring-1 outline-none p-3 text-xs transition-all ${error ? 'ring-red' : 'ring-black/25 focus:ring-black/50'}`}/>
    <p className={`text-red transition-all select-none text-xs ${!error && 'hidden'}`}>{ errorMsg || 'Incorrect ' + label }</p>
</div>
  )
}

export default Input