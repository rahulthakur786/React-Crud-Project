import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const navigate = useNavigate()

  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res)=>{
      setName(res.data.name)
      setEmail(res.data.email)
      setPhone(res.data.phone)
    })
  }, [])

  const data = {
    name:name,
    email:email,
    phone:phone
  }

  function Update(e){
    e.preventDefault()
    axios.put(`http://localhost:3001/users/${id}`,data).then(navigate('/'))
  }

  

  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
    <h1 className='text-3xl font-semibold text-black'>Edit User</h1>
    <form className='w-[80%] h-full flex items-center flex-col mt-4'>
    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Your Name' className='w-[80%] mt-4 py-4 px-6 bg-white/10 text-xl outline-none border border-zinc-400'/>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-[80%] mt-4 py-4 px-6 bg-white/10 text-xl outline-none border border-zinc-400'/>
    <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="phone" placeholder='Enter Your Phone' className='w-[80%] mt-4 py-4 px-6 bg-white/10 text-xl outline-none border border-zinc-400'/>
    <button onClick={Update}  className='w-[80%] mt-4 py-4 px-6 bg-blue-600 text-xl text-white'>Update User</button>
    </form>
  </div>
  )
}

export default Edit