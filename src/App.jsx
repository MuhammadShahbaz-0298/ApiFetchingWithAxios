import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './Pages/HomePage'
import Header from './Components/Header'
import CreateBikes from './Pages/createBikes'
import EditBikes from './Pages/EditBikes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <HomePage /> */}
      {/* <CreateBikes /> */}
      <EditBikes />
    </>
  )
}

export default App
