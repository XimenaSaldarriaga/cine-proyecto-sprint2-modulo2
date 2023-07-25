import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Details from '../details/Details'
import Quantity from '../quantity/Quantity'
import Seats from '../seats/Seats'
import Payment from '../payment/Payment'
import Transaction from '../transaction/Transaction'
import Download from '../download/Download'
import Links from '../links/Links'
import Header from '../header/Header'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Links />}>
          <Route index element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/quantity" element={<Quantity />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/download" element={<Download />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
