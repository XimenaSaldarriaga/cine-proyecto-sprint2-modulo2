import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          {/* <Route path="products" element={<Products />} />
          <Route path="products/:nameProduct" element={<Product />} />
          <Route path='users' element={<Users />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router