import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './pages/Home'
import { Complete } from './pages/Complete'
import { Success } from './Success'
function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
       <Success/>
    </div>
  )
}

export default App
