import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import TaskList from './Components/TaskList/TaskList'
import TaskNumber from './Components/Accessories/TaskNumber'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvier'

const App = () => {
  
// useEffect(() => {
//   // setLocalStorage()
//   getLocalStorage()
// })


const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const [userData, setUserData] = useContext(AuthContext)

const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password =='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
  // console.log(user)
    }
else if(userData){
 const employee =  userData.find((e)=>email == e.email && e.password == password)
 if(employee){
 setUser ('employee')
 setLoggedInUserData(employee)
  localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
// console.log(user)
}
}

else{
     alert("Invalid Credentials")
  }
}


  return (
    <>
     

{!user ? <Login handleLogin={handleLogin} /> : ''}
{user == 'admin' ? <AdminDashboard  changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data= {loggedInUserData}/> : null)}
    </>
  )
}

export default App
