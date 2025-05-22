import React from 'react'
import Navbar from './components/Navbar'
// import Part4 from './components/part4'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        {/* <Part4/> */}
       
        </BrowserRouter>
    </div>
  )
}
