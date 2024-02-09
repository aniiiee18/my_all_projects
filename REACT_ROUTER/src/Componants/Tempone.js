import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {fcGoogle} from "react-icons/fc"
 

const Tempone = ({title, descr1, descr2, image, formtype, setisLoggedIn}) => {



  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-y-12 gap-x-12'>

        <div className='w-11/12 max-w-[460px]' >

            <h1 className=' text-richblack-5 font-semibold text-[1.875rem] leading-[2.375] '>{title}</h1>
            <p className=' text-[1.125rem] leading-[1.625] mt-4 '>
                <span className=' text-richblack-100'>{descr1}</span>
                <br/>
                <span className='text-blue-100 italic'>{descr2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setisLoggedIn={setisLoggedIn}/>):
            (<LoginForm setisLoggedIn={setisLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-richblack-700 w-full'></div>
                <p className=' text-richblack-700 '>OR</p>
                <div className='h-[1px] bg-richblack-700 w-full font-medium leading-[1.375]'></div>
            </div>

            <button className='w-full flex justify-center items-center rou-[8px]
            font-midium text-richblack-100 border border-richblack-700 px-[12px]
            py-[8px] gap-x-2 mt-6 '>
                <p>
                <fcGoogle/>
                    Sign Up with Google
                </p>
            </button>

        </div>


        <div className=' relative w-11/12 max-w-[450px] '>
            <img
                src={frameImage}
                alt='Pattern'
                width={558}
                height={504}
                loading='lazy'
                  
                />
            <img
                src={image}
                alt='Student'
                width={558}
                height={490}
                loading='lazy'
                className=' absolute -top-4 right-4 '
                />

        </div>

    </div>
  )
}

export default Tempone