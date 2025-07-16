import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Spherenex from './components/Spherenex'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Spherenex />
    </>
  )
}

export default App
