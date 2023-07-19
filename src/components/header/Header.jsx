import React from 'react'
import './header.scss'
import Navbar from '../navbar/Navbar'
import SelectHeader from '../selectHeader/SelectHeader'
import Carousel from '../carousel/Carousel'


const Header = () => {
  return (
    <div className='header'>
      <div className='header__navbar'>
        <img className='header__logo' src="https://archivos.cinecolombia.com/cineco-cms-frontend/1.0.100/dist/images/logo_cineco.svg" alt="" />
        < Navbar />
        < SelectHeader />
      </div>
      < Carousel />
    </div>
  )
}

export default Header