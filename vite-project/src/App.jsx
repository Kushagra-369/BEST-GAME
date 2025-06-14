import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components2/Navbar2.jsx'
import Navbar3 from './components3/Navbar3.jsx'
import Navbar4 from './components4/Navbar4.jsx'
import Navbar5 from './components5/Navbar5.jsx'
import Part4 from './components/Part4'
import Part4b from './components2/Part4b.jsx'
import Part4c from './components3/Part4c.jsx'
import Part4d from './components4/Part4d.jsx'
import Part4e from './components5/Part4e.jsx'
import Home from './components/Home'
import Home2 from './components2/Home2.jsx'
import Home3 from './components3/Home3.jsx'
import Home4 from './components4/Home4.jsx'
import Home5 from './components5/Home5.jsx'
import Games from './components/Games'
import Games2 from './components2/Games2.jsx'
import Games3 from './components3/Games3.jsx'
import Games4 from './components4/Games4.jsx'
import Games5 from './components5/Games5.jsx'
import About from './components/About'
import About2 from './components2/About2.jsx'
import About3 from './components3/About3.jsx'
import About4 from './components4/About4.jsx'
import About5 from './components5/About5.jsx'
import Part1 from './components/Part1'
import Part1b from './components2/Part1b.jsx'
import Part1c from './components3/Part1c.jsx'
import Part1d from './components4/Part1d.jsx'
import Part1e from './components5/Part1e.jsx'
import Login from './components/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Navbar />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='about2' element={<Navbar2 />} />
          <Route path='about3' element={<Navbar3 />} />
          <Route path='about4' element={<Navbar4 />} />
          <Route path='about5' element={<Navbar5 />} />

        </Routes>
        <Routes>
          <Route path='' element={<Part4 />} />
          <Route path='about2' element={<Part4b />} />
          <Route path='about3' element={<Part4c />} />
          <Route path='about4' element={<Part4d />} />
          <Route path='about5' element={<Part4e />} />

        </Routes>
        <Routes>
          <Route path='' element={<Part1 />} />
          <Route path='about2' element={<Part1b />} />
          <Route path='about3' element={<Part1c />} />
          <Route path='about4' element={<Part1d />} />
          <Route path='about5' element={<Part1e />} />

        </Routes>        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about2' element={<Home2 />} />
          <Route path='about3' element={<Home3 />} />
          <Route path='about4' element={<Home4 />} />
          <Route path='about5' element={<Home5 />} />

        </Routes>
        <Routes>
          <Route path='' element={<Games />} />
          <Route path='about2' element={<Games2 />} />
          <Route path='about3' element={<Games3 />} />
          <Route path='about4' element={<Games4 />} />
          <Route path='about5' element={<Games5 />} />
        </Routes>
        <Routes>
          <Route path='' element={<About />} />
          <Route path='about2' element={<About2 />} />
          <Route path='about3' element={<About3 />} />
          <Route path='about4' element={<About4 />} />
          <Route path='about5' element={<About5 />} />
        </Routes>


      </BrowserRouter>
    </div>
  )
}
