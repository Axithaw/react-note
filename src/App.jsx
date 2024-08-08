import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { Route,Routes } from 'react-router-dom'
import TaskDetails from './TaskDetails'
import NotFound from './NotFound'
export default function App() {

  
  return (
     <div className='w-1/2 font-ubuntu bg-pink-400 p-1 mx-auto my-2 min-h-80'>
          <Navbar/>
          <div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/create' element={<Create/>}/>
                    <Route path='/task/:id' element={<TaskDetails/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>

          </div>
     </div>
  )
}
