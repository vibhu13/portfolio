import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import { Contact } from './components/Contact'
import Resume from './components/Resume'

export default function App() {
  return (
        <div>
            <Header/>
            {/* Browser Router SSR SEO */}
            {/* <Routes>
                <Route path="/portfolio/" element={<About />} />
                <Route path="/portfolio/about" element={<About />} />
                <Route path="/portfolio/contact" element={<Contact />} />
                <Route path="/portfolio/resume" element={<Resume />} />
            </Routes> */}
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </div>
  );
}