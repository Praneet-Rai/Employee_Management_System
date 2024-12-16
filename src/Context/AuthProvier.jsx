import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage'

export const AuthContext = createContext()

const AuthProvier = ({children}) => {
// localStorage.clear()

  const [userData, setUserData] = useState(null)

  useEffect(() => {
   setLocalStorage()
    const {employees,admin}= getLocalStorage()
  setUserData (employees)
  
  }, [])
  

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvier
