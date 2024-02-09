import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setisLoggedIn}) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({email:"", password:""})
    const[showPassword, setshowPassword] = useState(false);

    function Changehandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")

    }


  return (

        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 
        '>
            <label className='w-full'>

                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]
                '>
                    Email Adress<sup className='text-pink-200 '>*</sup>
                </p>
                <input
                    required
                    type='email'
                    name='email'
                    value = {formData.email}
                    onChange={Changehandler}
                    placeholder='Enter email id'

                    className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            <label  className='w-full relative' >
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]
                '>
                    Password<sup className='text-pink-200 '>*</sup>
                </p>
                <input
                    required
                    type= {showPassword ? ("text") : ("password")}
                    name='password'
                    value = {formData.password}
                    onChange={Changehandler}
                    placeholder='Enter password'

                    className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span onClick={() => setshowPassword((prev) => !prev)}
                className='absolute right-3 top-[30px] cursor-pointer'
                >
                    {showPassword?

                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </Link>

            </label>

            <button className=' bg-yellow-50 rounded-[8px] font-medium
             text-richblack-900 mt-6 px-[12px] py-[8px] '>
                Sign in
            </button>

        </form>

  )
}

export default LoginForm 