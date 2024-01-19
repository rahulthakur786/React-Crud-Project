import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-600 w-full h-16 flex items-center justify-between px-10'>
        <Link to='/'><h1 className='text-white text-3xl font-semibold'>Crud</h1></Link>
        <Link to="add-user" className='bg-white text-blue-500 font-semibold w-32 rounded-lg h-10 flex justify-center items-center'>Add Users</Link>
    </div>
  )
}

export default Navbar