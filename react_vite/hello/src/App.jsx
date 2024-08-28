import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './component1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Component1 />
      <h2>Hello React</h2>
    </div>
  )
}

export default App
