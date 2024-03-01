import React from 'react'
import './Navigation.css'
import LogoImg from '../../public/images/logo.png'

const Navigation = () => {
  return (
    <nav className='container'>
    <div className='logo'>
      <img src={LogoImg} alt="do some coding" />
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