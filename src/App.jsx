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
        <Route path='/sea-web-gen8-v2/' element={<Home />}/>
        <Route path='/sea-web-gen8-v2/login' element={<Login />}/>
        <Route path='/sea-web-gen8-v2/dashboard' element={<Dashboard />}/>
        <Route path='/sea-web-gen8-v2/courses' element={<Courses />}/>
        <Route path='/sea-web-gen8-v2/account' element={<Account />}/>
        <Route path='/sea-web-gen8-v2/modul' element={<Modul />}/>
      </Routes>
    </Router>
  )
}

export default App