import React from 'react'
import Navbar from './components/Navbar'
import MainLayOut from './layout/MainLayOut'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#F6F1EC] text-[#ff6726] font-title'>
      <Navbar/>
      <MainLayOut/>
      <Footer/>
    </div>
  )
}

export default App
