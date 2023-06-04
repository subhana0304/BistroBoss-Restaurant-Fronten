import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="btn btn-outline">Button</button>
<button className="btn btn-outline btn-primary">Button</button>
<button className="btn btn-outline btn-secondary">Button</button>
<button className="btn btn-outline btn-accent">Button</button>
    </>
  )
}

export default App
