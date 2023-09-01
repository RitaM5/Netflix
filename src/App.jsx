import { useState } from 'react'
import Navbar from './components/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Shared/Footer'


function App() {

  return (
    <div className='bg-[#181818]  min-h-screen overflow-hidden'>
      <Navbar></Navbar>
      <div className=''>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
