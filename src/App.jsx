import React from'react'
import { Routes,Route } from 'react-router-dom'
import Welcome from './components/HomePage'
import './App.css'
import Login from './components/LoginPage'
import Signup from './components/CreateAccountPage'
import Setting from './components/AccountSettingPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/setting" element={<Setting />} /> 
        </Routes>
    </>
  )
}

export default App