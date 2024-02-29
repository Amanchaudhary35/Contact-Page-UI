import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className='container'>
    <div className='logo'>
      <img src="/images/logo.png" alt="do some coding" />
    </div>

    <ul>
        <li className='home'>Home</li>
        <li className='about'>About</li>
        <li className='contact'>Contact</li>
    </ul>

  </nav>
  )
};


export default Navigation;