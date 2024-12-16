import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-emerald-950 rounded-xl'>
        <div className='flex justify-between items-center'>
             <h3 className='bg-yellow-700 text-sm py-2 px-2 rounded '>{data.category}</h3>
             <h4 className='bg-emerald-900 text-base py-2 px-2 rounded '>{data.taskDate}</h4>
        </div>
             <h4 className='mt-12 text-2xl font-semibold text-yellow-500'>{data.taskTitle}</h4>
             <p className='text-sm mt-4'>{data.taskDescription}</p>
     
             <div className='mt-2 '>
<button className=' bg-violet-600 py-2 px-2 text-sm' >Failed Task</button>
    </div>
      </div>
  )
}

export default FailedTask
