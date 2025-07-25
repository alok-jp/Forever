import React from 'react'
import {assets} from '../assets/admin_assests/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between px-20'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
