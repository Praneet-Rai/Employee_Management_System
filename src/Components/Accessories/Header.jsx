import React, { useState } from 'react'
import { setLocalStorage } from '../../Utils/localStorage'

const Header = (props) => {

const logOutUser = ()=>{
 localStorage.setItem('loggedInUser', ' ' );
props.changeUser("")

 //  window.location.reload()
 
}

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello<br/> <span className='text-3xl font-semibold'> Admin👋</span> </h1>
      <button onClick={logOutUser} className='bg-rose-900 text-lg font-medium px-4 py-2 rounded-3xl'>Log Out</button>
    </div>
  )
}

export default Header
