import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoFocusInput from './AutoFocusInput'
import Room from './Room'
import PushUpCounter from './PushUpCounter'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AutoFocusInput />
      {/* <Room />
      <PushUpCounter />
      <Timer /> */}
    </div>
  )
}

export default App
