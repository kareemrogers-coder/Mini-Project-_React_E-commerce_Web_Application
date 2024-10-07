import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/nav.css'
// import {Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
  return (
    <div className="navbar-container">
    
    <nav>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/customers" activeClassName="active" >Customers</NavLink>
      <NavLink to="/products" activeClassName="active" >Product Catalog</NavLink>
      <NavLink to="/Orders" activeClassName="active" >Order Status</NavLink>
    </nav>
    

</div>


  )
}

export default NavBar

