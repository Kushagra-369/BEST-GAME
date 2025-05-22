import React from 'react'
import Navbar from './components/Navbar'
import Part4 from './components/Part4'
import Home from './components/Home'
import Games from './components/Games'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Part4/>
        <Home/>
        <Games/>
        <About/>
        
       
        </BrowserRouter>
    </div>
  )
}
