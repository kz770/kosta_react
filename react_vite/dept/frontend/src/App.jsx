import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import List from './components/List'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  
  return (
    <>
      <h2>Department Management System</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/save' element={<Form />}/>          
          <Route path='/' element={<List />}/>          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
