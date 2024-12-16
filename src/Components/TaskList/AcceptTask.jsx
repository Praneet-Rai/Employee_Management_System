import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-emerald-950 rounded-xl'>
    <div className='flex justify-between items-center'>
         <h3 className='bg-red-700 text-sm py-2 px-2 rounded '>{data.category}</h3>
         <h4 className='bg-emerald-900 text-base py-2 px-2 rounded '>{data.taskDate}</h4>
    </div>
         <h4 className='mt-12 text-2xl font-semibold text-yellow-500'>{data.taskTitle}</h4>
         <p className='text-sm mt-4'>{data.taskDescription}</p>
 
 
  <div className='flex justify-between mt-4 '>
    <button className='bg-violet-600 py-1 px-2 text-sm'>Accept Task </button>
    <button className='bg-yellow-800 py-1 px-2 text-sm'>Mark as Failed</button>
  </div>
  
  </div>
  )
}

export default AcceptTask
