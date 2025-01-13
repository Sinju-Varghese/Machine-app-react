import React from 'react'
import './App.css'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Admindash from './Pages/Admindash'

function App() {

  return (
    <>
      <Routes>
        <Route path="/admindash" element={<Admindash />} />
      <Route path="/" element={<Home />} />
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/login'} element={<Login/>}/>

      </Routes>
    </>
  )
}

export default App
