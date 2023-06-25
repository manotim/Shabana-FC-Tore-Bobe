import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Membership from './Membership'
import SocialMedia from './SocialMedia'
import Fanbase from './Fanbase'

function Fans() {
  const [showRoutes, setShowRoutes] = useState(false)

  const handleMouseEnter = () => {
    setShowRoutes(true)
  }

  const handleMouseLeave = () => {
    setShowRoutes(false)
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <nav>
        <ul>
          <li>
            <Link to='/fans/membership'>Membership</Link>
          </li>
          <li>
            <Link to='/fans/socialmedia'>Social Media</Link>
          </li>
          <li>
            <Link to='/fans/fanbase'>Fanbase</Link>
          </li>
        </ul>
      </nav>

      {showRoutes && (
        <Routes>
          <Route path='/membership' element={<Membership />} />
          <Route path='/socialmedia' element={<SocialMedia />} />
          <Route path='/fanbase' element={<Fanbase />} />
        </Routes>
      )}
    </div>
  )
}

export default Fans
