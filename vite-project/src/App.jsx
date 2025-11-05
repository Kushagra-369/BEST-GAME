import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Common
import Navbar from './components/Navbar';
import About from './components/About';

// Variants
import Navbar2 from './components2/Navbar2.jsx';
import Navbar3 from './components3/Navbar3.jsx';
import Navbar4 from './components4/Navbar4.jsx';
import Navbar5 from './components5/Navbar5.jsx';

// Home Sections
import Home from './components/Home';
import Home2 from './components2/Home2.jsx';
import Home3 from './components3/Home3.jsx';
import Home4 from './components4/Home4.jsx';
import Home5 from './components5/Home5.jsx';

// Games Sections
import Games from './components/Games';
import Games2 from './components2/Games2.jsx';
import Games3 from './components3/Games3.jsx';
import Games4 from './components4/Games4.jsx';
import Games5 from './components5/Games5.jsx';

// Part Sections
import Part1 from './components/Part1';
import Part1b from './components2/Part1b.jsx';
import Part1c from './components3/Part1c.jsx';
import Part1d from './components4/Part1d.jsx';
import Part1e from './components5/Part1e.jsx';

import Part4 from './components/Part4';
import Part4b from './components2/Part4b.jsx';
import Part4c from './components3/Part4c.jsx';
import Part4d from './components4/Part4d.jsx';
import Part4e from './components5/Part4e.jsx';

// Other pages
import Login from './components/Login.jsx';
import Signin from './components/Signin.jsx';
import BestGame1 from './components/BestGame1.jsx';

export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ Fixed Navbar on top */}
      <Navbar />

      {/* ✅ Page Content */}
      <div className="pt-20 min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            {/* Default route */}
            <Route
              path="/"
              element={
                <>
                  <Part4 />
                  <Part1 />
                  <Home />
                  <Games />
                </>
              }
            />

            {/* Variants */}
            <Route
              path="/about2"
              element={
                <>
                  <Navbar2 />
                  <Part4b />
                  <Part1b />
                  <Home2 />
                  <Games2 />
                </>
              }
            />
            <Route
              path="/about3"
              element={
                <>
                  <Navbar3 />
                  <Part4c />
                  <Part1c />
                  <Home3 />
                  <Games3 />
                </>
              }
            />
            <Route
              path="/about4"
              element={
                <>
                  <Navbar4 />
                  <Part4d />
                  <Part1d />
                  <Home4 />
                  <Games4 />
                </>
              }
            />
            <Route
              path="/about5"
              element={
                <>
                  <Navbar5 />
                  <Part4e />
                  <Part1e />
                  <Home5 />
                  <Games5 />
                </>
              }
            />

            {/* Other routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/bestgame1" element={<BestGame1 />} />
          </Routes>
        </div>

        {/* ✅ Always at the bottom (footer-like About) */}
        <About />
      </div>
    </BrowserRouter>
  );
}
