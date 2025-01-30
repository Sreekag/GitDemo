import { useState } from 'react'

import './App.css'
import Chat from "./components/Chat";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-200">
      <Chat />
    </div>
    </>
  )
}

export default App
