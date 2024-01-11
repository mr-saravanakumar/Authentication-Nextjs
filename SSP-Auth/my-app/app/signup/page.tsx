"use client";
import React,{useState} from 'react'
import Link from "next/link"
import axios from 'Axios';

const page = () => {

    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [password,setPassword]=useState('');
    const [photo,setPhoto]=useState('');
    const[msg,setMsg]=useState('');

    const handleSubmit=async()=>{
      if(name||age||password||photo){
      await axios.post("http://localhost:3000/api/Auth",{
        name: name,
        age: age,
        password: password,
        photo: photo,
        userId:Date.now(),
      }).then(response=>console.log(response.data.message));
    }
  }

  return (
    <div className="p-4 space-y-2 border-2 border-black w-[250px]">
      <p className='text-red'>SIGNUP</p>
      <div className='text-black space-y-2'>
      <input type="text" className="border-2 border-black" placeholder="name...." onChange={(e)=>setName(e.target.value)}/><br/>
      <input type="text" className="border-2 border-black" placeholder="age...." onChange={(e)=>setAge(e.target.value)}/><br/>
      <input type="text" className="border-2 border-black" placeholder="password...." onChange={(e)=>setPassword(e.target.value)}/><br/>
      <input type="text" className="border-2 border-black" placeholder="photo...." onChange={(e)=>setPhoto(e.target.value)}/><br/>
      </div>
      <button onClick={handleSubmit} className='bg-violet-500 p-1.5 rounded flex justify-center align-center'>Register</button>
      <p>Already have account ?</p>
      <Link href={"/login"} className='text-blue-700'>
        login
     </Link>
    </div>
  )
}

export default page
