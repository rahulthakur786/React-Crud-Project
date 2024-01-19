import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res)=>{
      setUser(res.data)
    })
  }, [])

  const {id} = useParams()

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
    
    {user && (
      
       <div className='w-[700px] h-[200px] flex justify-center items-center px-6 py-4 border-2 border-black mt-16'>
       <div className='w-5/12 flex flex-col space-y-4'>
         <h2 className='text-2xl font-semibold text-black border-b border-black'>Name</h2>
         <h2 className='text-2xl font-semibold text-black border-b border-black'>Email</h2>
         <h2 className='text-2xl font-semibold text-black border-b border-black'>Phone</h2>
       </div>
       <div className='w-7/12 flex flex-col space-y-4'>
         <h2 className='text-2xl font-semibold text-black border-b border-black'>{user.name}</h2>
         <h2 className='text-2xl font-semibold text-black border-b border-black'>{user.email}</h2>
         <h2 className='text-2xl font-semibold text-black border-b border-black'>{user.phone}</h2>
       </div>
     </div>
     
    )}

    <Link to="/" className='text-2xl font-semibold text-white mt-8 bg-blue-600 px-4 py-2 rounded ' >Back To Home</Link>
      
    </div>
  )
}

export default User