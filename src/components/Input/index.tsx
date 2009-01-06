import React from 'react'

interface InputProps{
label:string;
type:string;
id:string;
placeholder?:string
}

const Input = ({label, type, id, placeholder}:InputProps) => {
  return (
    <div className="grid gap-1 pb-7">
    <label htmlFor={id} className="text-sm">{label}</label>
    <input type={type} id={id} placeholder={placeholder} className="ring-1 ring-black/25 outline-none p-3 text-xs transition-all focus:ring-black/50" />
</div>
  )
}

export default Input