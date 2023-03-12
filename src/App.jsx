import React from 'react'
import Navbar from './components/Navbar'
import Calculator from './components/Calculator'

export default function App() {

  return (
    <>
    <Navbar />
    <div className='text-pink-500 text-3xl text-center pt-4'>Love Calculator</div>
    <Calculator/>
    </>
  )
}
