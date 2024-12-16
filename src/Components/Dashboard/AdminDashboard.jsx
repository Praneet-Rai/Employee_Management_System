import React from 'react'
import Header from '../Accessories/Header'
import CreateTask from '../Accessories/CreateTask'
import AllTask from './AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
