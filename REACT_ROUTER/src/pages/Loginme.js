import React from 'react'
import Tempone from '../Componants/Tempone'
import loginimage from "../assets/login.png"

const Loginme = ({setisLoggedIn}) => {
  return (
    <Tempone
      title='Welcome Back'
      descr1="Build skills for today, tomorrow, and beyond"
      descr2="Education to future proof carreer"
      image={loginimage}
      formtype="login"
      setisLoggedIn={setisLoggedIn} 

    />
  )
}

export default Loginme
