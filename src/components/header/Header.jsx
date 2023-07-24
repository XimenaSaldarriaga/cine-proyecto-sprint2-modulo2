import React from 'react'
import './header.scss'
import HeaderNav from '../headerNav/HeaderNav'
import Carousel from '../carousel/Carousel'



const Header = () => {
  return (
    <div className='header'>
      <HeaderNav />
      <Carousel />
    </div>
  )
}

export default Header