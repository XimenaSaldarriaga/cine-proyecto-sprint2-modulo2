import React from 'react'
import './navbar.scss'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <button className='navbar__button'>Acción</button>
        <button className='navbar__button'>Terror</button>
        <button className='navbar__button'>Ciencia ficcion</button>
        <button className='navbar__button'>Comedia</button>
    </nav>
  )
}

export default Navbar