import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  
  return (
    <div id="tasklist" className='h-[55%]  flex items-center overflow-x-auto justify-between gap-5 w-full py-5 mt-10'>
    
      {/* <AcceptTask/>
      <NewTask/>    
      <FailedTask/>
      <CompleteTask/> */}
{data.tasks.map((elem, idx)=>{
  if(elem.active){
    return <AcceptTask key={idx} data={elem}/>
  }
  if(elem.newTask){
    return <NewTask key={idx} data={elem} />
  }

  if(elem.completed){
    return <CompleteTask key={idx} data={elem}/>
  }

  if(elem.failed){
    return <FailedTask key={idx} data={elem} />
  }


  return 
})}
    
    </div>
  )
}

export default TaskList
