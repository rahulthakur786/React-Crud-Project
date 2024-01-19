import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const [users, setUsers] = useState([])

  const loadUsers = () => {
    axios.get("http://localhost:3001/users").then((res)=>{
      setUsers(res.data.reverse());
    })
  }

  useEffect(() => {
    loadUsers()
    
  }, [])

  function Delete(id){
    axios.delete(`http://localhost:3001/users/${id}`)
    .then(
      loadUsers()
    )
  }
  
  
  return (
    <div className='w-full h-full flex flex-col px-10 py-8'>
        
<div className="w-full flex flex-col min-h-[50vh] justify-center items-center">
 
      <h1 className='font-semibold text-black text-3xl'>Home Page</h1>
        <table className="w-[95%] text-center overflow-hidden overflow-y-scroll mt-8 border-2 border-black">
          <thead
            className="border-b bg-gray-800">
            <tr className='text-white'>
              <th scope="col" className=" px-6 py-4">#</th>
              <th scope="col" className=" px-6 py-4">Name</th>
              <th scope="col" className=" px-6 py-4">Email</th>
              <th scope="col" className=" px-6 py-4">Phone</th>
              <th scope="col" className=" px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data , index)=>(
            <tr key={index} className="border-b bg-white">
              <td className="whitespace-nowrap  px-6 py-4 font-medium text-lg text-gray-900">{index + 1}</td>
              <td className="whitespace-nowrap  px-6 py-4 text-lg text-gray-900">{data.name}</td>
              <td className="whitespace-nowrap  px-6 py-4 text-lg text-gray-900">{data.email}</td>
              <td className="whitespace-nowrap  px-6 py-4 text-lg text-gray-900">{data.phone}</td>
              <td className="flex justify-center items-center mt-1.5 space-x-4">
                <Link to={`/users/${data.id}`} className='bg-black text-white px-4 py-2 rounded'>View</Link>
                <Link to={`/edit-user/${data.id}`} className='bg-blue-600 text-white px-4 py-2 rounded'>Edit</Link>
                <button onClick={() => Delete(data.id)} className='bg-red-600 text-white px-4 py-2 rounded'>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home