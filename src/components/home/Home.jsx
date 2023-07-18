import React from 'react' 
import Header from '../header/Header'
import './home.scss'
import Cartelera from '../cartelera/Cartelera'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Cartelera />
    </div>
  )
}

export default Home