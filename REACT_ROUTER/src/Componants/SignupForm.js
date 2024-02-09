import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setisLoggedIn}) => {

    const navigate = useNavigate();



    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"", 
        email:"",
        password:"",
        confirmpassword:""
    })

    const[showPassword, setshowPassword] = useState(false);
    const[acctype, setacctype] = useState("student");

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
        if(formData.password != formData.confirmpassword)
        {
            toast.error("Password do not match");
            return;
        }

        setisLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }

        const finaldata = {
            ...accountData,
            acctype
        }

        console.log("printing account data")
        console.log(finaldata);

        navigate("/");


    }






  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button 
            className={`${acctype === "student" ?
            " bg-richblack-900 text-richblack-5":
            " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 ` }
            onClick={()=> setacctype("student")} >
                student
            </button>

            <button
             className={`${acctype === "instructor" ?
            " bg-richblack-900 text-richblack-5":
            " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 ` }
             onClick={()=> setacctype("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        
        {/* firstnaem and last naem */}
            <div className='flex justify-between mt-[20px]'>

                <label className='relative'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]
                '>First Name<sup  className='text-pink-200 '>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstname'
                        onChange={Changehandler}
                        placeholder='Enter first name'
                        value={formData.firstname}
                        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                    />
                </label>

                <label className='relative'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]
                '>Last Name<sup  className='text-pink-200 '>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastname'
                        onChange={Changehandler}
                        placeholder='Enter last name'
                        value={formData.lastname}
                        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                    />
                </label>

            </div>
        {/* emai id */}
        <div className='mt-[20px]'>
            <label className='relative w-full mt-[20px]'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]
                '>Email Adress<sup  className='text-pink-200 '>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={Changehandler}
                        placeholder='Enter email'
                        value={formData.email}
                        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                    />
            </label>
        </div>

        {/* creatpassword & Confirm password */}
            <div className='flex w-full justify-between mt-[20px]'>
                <label className='relative'>
                        <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]
                '>Creat Password<sup  className='text-pink-200 '>*</sup></p>
                        <input
                            required
                            type= {showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={Changehandler}
                            placeholder='Enter password'
                            value={formData.password}
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                        />
                    <span onClick={() => setshowPassword((prev) => !prev)}
                    className='absolute right-3 top-[30px] cursor-pointer'>
                        {showPassword?

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='relative'>
                        <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]
                '>Confirm Password<sup  className='text-pink-200 '>*</sup></p>
                        <input
                            required
                            type= {showPassword ? ("text") : ("password")}
                            name='confirmpassword'
                            onChange={Changehandler}
                            placeholder='Confirm password'
                            value={formData.confirmpassword}
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                        />
                    <span onClick={() => setshowPassword((prev) => !prev)}
                    className='absolute right-3 top-[30px] cursor-pointer'
                    >
                        {showPassword?

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
                

            </div>

        <button className=' bg-yellow-50 rounded-[8px] font-medium
             text-richblack-900 mt-6 px-[12px] py-[8px] w-full '>
            Creat New Account
        </button>

        </form>

    </div>
  )
}

export default SignupForm