import { useState } from 'react'
import './App.css'
import DynamicGreeting from './components/DynamicGreeting'
import PremiumCheck from './components/PremiumCheck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicGreeting />
      <PremiumCheck />
    </>
  )
}

export default App
