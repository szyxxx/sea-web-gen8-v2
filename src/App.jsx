import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Dashboard from './pages/dashboard.jsx'
import Courses from './pages/courses.jsx'
import Modul from './pages/modul.jsx'
import Account from './pages/account.jsx'
import './index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/modul' element={<Modul />}/>
      </Routes>
    </Router>
  )
}

export default App