import { useState } from 'react'
import './App.css'
import GameOver from './components/Gameover'
import Gameover from './components/Gameover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Gameover score={7} bestScore={100}></Gameover>
      </>
  )
}

export default App
