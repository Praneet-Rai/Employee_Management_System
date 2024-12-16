import React, { useState } from 'react'

const Login = ({handleLogin}) => {

//two way binding of submit
     
const [email, setEmail] = useState('')     
const [password, setPassword] = useState('')

     const submitHandler = (e)=>{
        e.preventDefault()
           handleLogin(email, password)
          
            setPassword('') 
            setEmail('')
     } 
     
  return (
    <div className='bodyy'>
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-700 p-20 rounded-2xl'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex flex-col items justify-center'>
        <input 
        onChange={(e)=>{
        setEmail(e.target.value) 
        }}
        required className='text-emerald-300 outline-none bg-transparent placeholder:text-grey-400 border-2 border-emerald-900 text-xl py-3 px-5 rounded-full'  type='email' placeholder='Enter your email'></input>
        <input value={password}
        onChange={(e)=>{   
        setPassword(e.target.value)
        }}
        required className='text-emerald-400 outline-none bg-transparent placeholder:ext-grey-400 border-2 border-emerald-900 text-xl py-3 px-5 rounded-full mt-2' type='password' placeholder='Enter your password'></input>
    <button className='text-white outline-none border-emerald-950 placeholder:text-white border-2 bg-emerald-900 text-xl py-3 px-5 rounded-full mt-6' >Login</button>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Login
