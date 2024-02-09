import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-auto h-20 max-w-6xl '>
      <NavLink to='/'>
        <img src='logo.png' className='w-[200px] '/>
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to='/'>
          <p>Home</p>
        </NavLink>
        <NavLink to='/cart'>
          <div  className="text-2xl">
            <MdShoppingCart/>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
