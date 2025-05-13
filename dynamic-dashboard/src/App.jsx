import { useState } from 'react'
import './App.css'
import DynamicGreeting from './components/DynamicGreeting'
import PremiumCheck from './components/PremiumCheck'
import TaskList from './components/TaskList'
import DisplayDate from './components/DisplayDate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayDate />
      <DynamicGreeting />
      <PremiumCheck />
      <TaskList />
    </>
  )
}

export default App
