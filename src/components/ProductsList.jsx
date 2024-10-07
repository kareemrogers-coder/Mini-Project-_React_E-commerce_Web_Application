import React from 'react'
import { useState, useEffect } from 'react'
import ReusableButton2 from './ReuseableButton2'
import axios from 'axios'
import CreateProductForm from './CreateProductForm'
import { Link, NavLink } from 'react-router-dom'
import '../styles/products.css'
import { useNavigate } from 'react-router-dom'


const ProductsList = () => {
  // Initializing the users state with an empty array
  const [products, setProducts] = useState([])

  // Store the ID of the user we select 
  const [selectedProduct, setSelectedProduct] = useState(null)

   // Store info about the selected user 
   const [selectedProductInfo, setSelectedProductInfo] = useState(null)

   const navigate = useNavigate()

  const deleteProduct = async (index,id) => {
    const newProducts = products.filter((product, i) => i !== index)

    const response =  await fetch (`http://127.0.0.1:5000/products/${id}`,{
      method: 'DELETE',
      headers: {
          'content-Type': 'application/json'
      },
      // body: JSON.stringify(customer)
      
  })

    console.log(response)
    setProducts(newProducts)
  }



  const selectProduct = (id) => {
    setSelectedProduct(id)
    navigate(`/products/${id}`)
    // getProductInfo(id)
  }

  const getProductInfo = (id) => {
    axios.get(`http://127.0.0.1:5000/products/${id}`)
    .then(response => {
      console.log(response)
      setSelectedProductInfo(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }


  useEffect(() => {
    axios.get('http://127.0.0.1:5000/products')
    .then(response => {

    // log the response to make sure it works 
    console.log(response)

    setProducts(response.data)

})
.catch(error => {
  console.log(error)
})

  }, [])

  return (
    <div className='bg-pf' >
      <br></br>

      

      <CreateProductForm className='pf' />

      <br></br>

      <h1 className='lp' >List of Products: </h1>

      {/* { selectedProduct && 
        <div>
          <h3>Selected Product</h3>
          <p>{selectedProduct}</p>
        </div>
      } */}

{/* { selectedProductInfo && 
        <div>
          <h3>Selected Product</h3>

          Pretend it is a card
          <p>{selectedCustomerInfo.name.lastname}</p>
          <p>{selectedCustomerInfo.email}</p>

          <p>{selectedProductInfo.product_name}</p>
          <p>{selectedProductInfo.price}</p>
          <p>{selectedProductInfo.stock}</p>
          
          
        </div>
      } */}

      {/* <h3>Product</h3> */}

      { products.map((product, index) => 

        <div key={index} className='ep-card' >
          <img src='src/Images/product_avatar.png' alt='Avatar' width={70} height={70} />
           <p>{product.product_name}</p>

          <ReusableButton2 handleClick={() => deleteProduct(index, product.id)} title="Delete User"/>

          <br />

          <ReusableButton2 handleClick={() => selectProduct(product.id)} title="Select User"/>
          
          {/* <Link to={`/products/${products.id}`}>Details</Link> */}
          


        </div>
      )}
    </div>
  )
}

export default ProductsList
