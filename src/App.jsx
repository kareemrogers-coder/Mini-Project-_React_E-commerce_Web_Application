import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CustomersList from './components/CustomersList'
import CustomerDetails from './components/CustomerDetails'
import { Route, Routes } from 'react-router-dom'
import ProductsList from './components/ProductsList'
import ProductsDetails from './components/ProductDetails'
import Orders from './components/Orders'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound'

const App = () => {
  
  return (
    <>
    <NavBar />

    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/customers' element={<CustomersList/>} />
      <Route path='/customers/:id' element={<CustomerDetails/>} />
      <Route path='/products' element={<ProductsList/>} />
      <Route path='products/:id' element={<ProductsDetails/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    
    
    </>
    
  )
}

export default App
