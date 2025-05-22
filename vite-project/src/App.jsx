import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>

        </Routes>
        </BrowserRouter>
    </div>
  )
}
