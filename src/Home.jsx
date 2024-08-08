import React from 'react'
import TaskPreview from './TaskPreview'
import useFetch from './useFetch'
export default function Home() {
    const {data:tasks,error} = useFetch('http://localhost:8000/tasks')
   
  return (
     <div>
        {error && <div>{error}</div>}
        {tasks && !error && <TaskPreview tasks={tasks}/>}
    </div>
  )
}
