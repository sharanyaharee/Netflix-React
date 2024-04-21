import React,{useState} from 'react'
import Header from './Header'


const Login = () => {
const[isSignInForm,setIsSignInForm]=useState(true)
const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
}

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backdrop image" />
        </div>
        <form className='w-3/12 absolute p-12 my-36 mx-auto text-white bg-black right-0 left-0 rounded bg-opacity-80'>
            <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up" } </h1>
            {!isSignInForm  && <><input type='text' placeholder='First Name' className='p-4 my-2 w-full  rounded border border-gray-700 bg-black bg-opacity-80'/>
            <input type='text' placeholder='Second Name' className='p-4 my-2 w-full  rounded border border-gray-700 bg-black bg-opacity-80'/></>}
            <input type='text' placeholder='Email Address' className='p-4 my-2 w-full  rounded border border-gray-700 bg-black bg-opacity-80'/>
            <input type='password' placeholder='Password' className='p-4 my-2 w-full  rounded border border-gray-700 bg-black bg-opacity-80'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded'>{isSignInForm?"Sign In":"Sign Up" }</button> 
            <p className='PY-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up":"Already Registered? Sign In"}</p> 
        </form>
    </div>
  )
}

export default Login
