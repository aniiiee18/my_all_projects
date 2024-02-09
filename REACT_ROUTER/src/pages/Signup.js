import React from 'react'
import signupimage from "../assets/login.png"
import Tempone from '../Componants/Tempone'

const Signup = ({setisLoggedIn}) => {

  console.log("printing signup page");
  

  return (
      <Tempone
        title="Join the millions learning to code with Studynotion for feree"
        descr1="Build skills for today, tomorrow, and beyond"
        descr2="Education to future proof carreer"
        image={signupimage}
        formtype="signup"
        setisLoggedIn={setisLoggedIn} 

    />

  )
} 

export default Signup