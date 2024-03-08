import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'

const App = () => {
  return (
    <Routes>
      <Route path='home' Component={<Home/>}/>
      <Route path='login' Component={<Login/>}/>
      <Route path='signup' Component={<Signup/>}/>
    </Routes>
  )
}

export default App