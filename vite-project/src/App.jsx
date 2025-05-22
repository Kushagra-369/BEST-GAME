import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
