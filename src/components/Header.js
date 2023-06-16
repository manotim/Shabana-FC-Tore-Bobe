import React from 'react'
import image from '../assets/images/shabana.png'

function Header() {
  return (
    <div className='header'>
      <img className='logo' src={image} alt='logo of shabana' />
      <h1 className='title'>Shabana FC</h1>
      {/* <img src='' alt='' /> */}
    </div>
  )
}

export default Header
