import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form1 from './Form1'
import Form2 from './Form2'
import ConditionalRendering1 from './ConditionalRendering1'
import ConditionalRendering2 from './ConditionalRendering2'

function App() {
  const [age, setAge]=useState(20);
  let up= ()=>{
    setAge(age+1)
  }
  let down=()=>{
    setAge(age-1)
  }
  
  return (
    <>
      <h2>age : {age}</h2>
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <hr/>
      <Form1 />
      <br/>
      <br/>
      <br/>
      <hr/>
      <Form2/>
      <br/>
      <hr/>
      <br/>
      <ConditionalRendering1 />
      <hr/>
      <br/>
      <ConditionalRendering2 />
    </>
  )
}

export default App
