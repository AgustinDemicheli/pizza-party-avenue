import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact' 
import { About } from './pages/About'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/menu' exact Component={Menu}/>
          <Route path='/about' exact Component={About}/>
          <Route path='/contact' exact Component={Contact}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App