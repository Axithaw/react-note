import React from 'react'
export default function TaskPreview({tasks}) {

     return (
        <div className=''>
            <h2>All Tasks!</h2>
            {
                tasks.map((task)=>(
                    <div key={task.id} className=''>
                        <h2>{task.title}</h2>
                        <p>{task.date}</p>
                    </div>
                ))
            }
        </div>
  )
}
