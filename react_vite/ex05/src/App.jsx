import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Header from './Header'
import Home from './Home'
import Info from './Info'
import './App.css'

function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/info' element={<Info />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
