import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

    let isLogin = props.isLogin;
    let setisLoggedIn = props.setisLoggedIn;


  return (
    <div className='flex justify-between mx-auto item-cnter w-11/12 max-w-[1160px] py-4'>

        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'
            />
        </Link>

        <nav>
            <ul className='flex gap-3 text-richblack-100 gap-x-6 '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4 '>
            { !isLogin &&
                <Link to="/login">
                    <button className=' bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                     rounde-[8px]  border border-richblack-700'>
                        Login
                    </button>
                </Link>
            }
            { !isLogin &&
                <Link to="/signup">
                    <button className=' bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                     rounde-[8px]  border border-richblack-700'>
                        signup
                    </button>
                </Link>
            }
            {   isLogin &&
                <Link to="/">
                    <button
                    onClick={() => {
                        setisLoggedIn(false);
                        toast.success("logged out");
                    }} 
                    className=' bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                     rounde-[8px]  border border-richblack-700'>
                    logout
                    </button>
                </Link>
            }
            {   isLogin &&
                <Link to="/dashboard">
                    <button 
                    className=' bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
                     rounde-[8px]  border border-richblack-700'>
                    dashboard
                    </button>
                </Link>
            }
        </div>    

    </div>
  )
}

export default Navbar