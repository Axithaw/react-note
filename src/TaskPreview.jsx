import React from 'react'
import { Link } from 'react-router-dom'
export default function TaskPreview({tasks}) {

     return (
        <div className=''>
            <h2>All Tasks!</h2>
            {
                tasks.map((task)=>(
                    <div key={task.id} className=''>
                        <Link to={`/task/${task.id}`}>
                        <h2>{task.title}</h2>
                        <p>{task.date}</p>
                        </Link>
                        
                    </div>
                ))
            }
        </div>
  )
}
