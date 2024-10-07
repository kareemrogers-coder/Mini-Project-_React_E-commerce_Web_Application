import React, { useState } from 'react'
import '../styles/products.css'

const CreateProductForm = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [availability, setAvailability] = useState(true)
    // const [phone, setPhone] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {product_name:name, price, stock, availability}

        // Manual insertion of Product data:
        // const product = {
        //   "product_name": "laptop",
        //  "price": "100.25",  
        //  "stock": 50
        // "availability": True (always true)
        
        console.log(product)

        try {
            // uploading our user to the API
            //adding a product.

        const response =  await fetch ('http://127.0.0.1:5000/products',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

            // check the response to see if the product  was successfully created

            if (response.ok){
                const data = await response.json();

                console.log("Product Added:", data)
                alert(`Product has been added to inventory.`)



                // Reset the form after upload is complete
                setName('')
                setPrice('')
                setStock('')
                setAvailability(true)
                
            }

            
                

        } catch (error){
            console.log("Error", error)
        }

    }

  return (
    <div className='pf'>
        <h3> Add a New Product</h3>
        <form onSubmit={handleSubmit}>
            {/* Product Name section */}
            <div>
                <label>Product:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/>

            {/* Price Section */}
            <div>
                <br></br>
                <label>Price:</label>
            <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} required/>
            </div>

            {/* Stock Section */}
            <div>
            <br></br>
                <label>Stock: </label>
            <input type='number' value={stock} onChange={(e) => setStock(e.target.value)} required/>
            </div>

            <br></br>
            
            {/* need to make the handle for the buttom funtion below */}
            <button type='submit' >Add Product</button>

            </div>
        </form>

    </div>
  )
}

export default CreateProductForm