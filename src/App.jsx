import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
export default function App() {

  
  return (
     <div className='w-1/2 font-ubuntu bg-pink-400 p-1 mx-auto my-2 min-h-80'>
          <Navbar/>
          <div>
              <Home/>
          </div>
     </div>
  )
}
