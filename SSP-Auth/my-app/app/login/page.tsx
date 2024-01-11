"use client";
import React,{useState} from 'react'
import Link from "next/link"
import axios from 'Axios';

const page = () => {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const[msg,setMsg]=useState('');

    const handleSubmit=async()=>{
      if(name||password){
      await axios.post("http://localhost:3000/api/Auth/login",{
        name: name,
        password: password,
      }).then(response=>console.log(response.data.message));
    }
  }

  return (
    <div className='p-4 space-y-2 border-2 border-black w-[250px]'>
      <p>LOGIN</p>
      <div className='text-black space-y-3'>
      <input type="text" className="border-2 border-black" placeholder="name...." onChange={(e)=>setName(e.target.value)}/><br/>
      <input type="text" className="border-2 border-black" placeholder="password...." onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button onClick={handleSubmit} className='text-black bg-violet-600 px-2 rounded'>login</button>
      <p className='text-black'>Don't have an account?</p>
      <Link href={"/signup"} className='text-blue-800'>
        signup
     </Link>
    </div>
    </div>
  )
}

export default page
