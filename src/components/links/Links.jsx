import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                  <NavLink to="/"></NavLink>
                </li>
                <li>
                  <NavLink to="/details/:id"></NavLink>
                </li>
                <li>
                  <NavLink to="/quantity/:id"></NavLink>
                </li>
                <li>
                  <NavLink to="/seats"></NavLink>
                </li>
                <li>
                  <NavLink to="/payment"></NavLink>
                </li>
                <li>
                  <NavLink to="/transaction"></NavLink>
                </li>
                <li>
                  <NavLink to="/download"></NavLink>
                </li>
                <li>
                  <NavLink to="/admin/:id"></NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Links