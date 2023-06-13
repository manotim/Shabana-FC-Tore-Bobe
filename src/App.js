import React from 'react'
import News from './components/News'
import Fans from './components/Fans'
import Fixtures from './components/Fixtures'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Tickets from './components/Tickets'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/news' activeClassName='active'>
                News
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/tickets' activeClassName='active'>
                Tickets
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/fixtures' activeClassName='active'>
                Fixtures
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/fans' activeClassName='active'>
                Fans
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/login' activeClassName='active'>
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/signup' activeClassName='active'>
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/fixtures' element={<Fixtures />} />
          <Route path='/fans' element={<Fans />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
