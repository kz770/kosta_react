import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import { userSearchParams } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './Info'
import Header from './Header'
import Home from './Home'
import Param1 from './Param1'

function App() {

  return (
    <BrowserRouter>
      <h2>App.jsx</h2>
      <Header />
      <Home />
      <Info />
      <Param1 />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/info" element={<Param1 />}></Route> */}
        <Route path="/params:id" element={<Param1 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
