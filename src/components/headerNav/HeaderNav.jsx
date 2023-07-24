import React from 'react'
import Navbar from '../navbar/Navbar'
import SelectHeader from '../selectHeader/SelectHeader'

const HeaderNav = () => {
  return (
    <div className='header__navbar'>
    <img className='header__logo' src="https://archivos.cinecolombia.com/cineco-cms-frontend/1.0.100/dist/images/logo_cineco.svg" alt="" />
    < Navbar />
    < SelectHeader />
  </div>
  )
}

export default HeaderNav