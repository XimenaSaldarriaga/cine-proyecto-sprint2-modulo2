import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Details from '../details/Details'
import Quantity from '../quantity/Quantity'
import Seats from '../seats/Seats'
import Payment from '../payment/Payment'
import Transaction from '../transaction/Transaction'
import Download from '../download/Download'
import Admin from '../admin/Admin'
import Links from '../links/Links'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/quantity/:id" element={<Quantity />} />
          <Route path="/seats/:id" element={<Seats />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/download" element={<Download />} />
          <Route path="/admin/:id" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
