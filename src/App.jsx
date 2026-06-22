import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './Pages/HomePage'
import Header from './Components/Header'
import CreateBikes from './Pages/createBikes'
import EditBikes from './Pages/EditBikes'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/create' element={<CreateBikes/>}></Route>
      </Routes>
    </>
  )
}

export default App
