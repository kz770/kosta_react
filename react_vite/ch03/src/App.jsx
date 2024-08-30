import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child2 from "./Child2"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Child2 
        p1="안녕하세요"
        p2="aa"
        person={{ name:'summer',age:20 }}
      />
    </>
  )
}

export default App
