import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1  from "./Component1"
import Func1 from './Component2'
import { Func2 } from './Component2'
import Component3  from "./Component3"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component1/>
      <hr />
      <Func1/>
      <Func2/>
      <hr />
      <Component3/>
    </>
  )
}

export default App
