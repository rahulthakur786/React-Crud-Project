import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adduser = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const navigate = useNavigate()

  const data = {
    name:name,
    email:email,
    phone:phone
  }

  function submit (e){
    e.preventDefault();
    axios.post("http://localhost:3001/users",data).then(navigate('/'))
  }

  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
      <h1 className='text-3xl font-semibold text-black'>Add User</h1>
      <form className='w-[80%] h-full flex items-center flex-col mt-4'>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Your Name' className='w-[80%] mt-4 py-4 px-6 bg-white/10 text-xl outline-none border border-zinc-400'/>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-[80%] mt-4 py-4 px-6 bg-white/10 text-xl outline-none border border-zinc-400'/>
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="phone" placeholder='Enter Your Phone' className='w-[80%] mt-4 py-4 px-6 bg-white/10 text-xl outline-none border border-zinc-400'/>
      <button onClick={submit} className='w-[80%] mt-4 py-4 px-6 bg-blue-600 text-xl text-white'>Add User</button>
      </form>
    </div>
  )
}

export default Adduser