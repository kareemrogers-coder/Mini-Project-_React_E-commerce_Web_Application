

## Mini Project: React E-commerce Web Application

**Project Requirements**

The main objective is to build out the front-end of an e-commerce application. To do this you will be making API calls to your e-commerce Flask API. Make sure your Flask API is running and then you will be able to make calls to http://localhost:5000. To successfully build our front-end e-commerce application and achieve the learning objectives, we need to establish clear project requirements. These requirements outline the key features and functionalities that our application must encompass. Below, you'll find a comprehensive list of project requirements based on our learning objectives:


1. Customer and CustomerAccount Management: Create React components and functionality for managing Customers and their associated CustomerAccounts:
- Create Customer Form: Develop a form component to capture and submit essential customer information, including name, email, and phone number.

- Read Customer Details: Create a component to display customer details retrieved from the backend based on their unique identifier (ID).

- Update Customer Form: Build a form component that allows users to update customer details, including the name, email, and phone number

- Delete Customer Information: Build a function in your Customer Detail Component that when triggered will delete a customer from the backend based on their unique identifier (ID).

- Customer Confirmation Modules: Design a confirmation modal or component for securely creating, updating, or deleting a customer from the system based on their ID

```jsx
const CustomersList = () => {
  // Initializing the users state with an empty array
  const [customers, setCustomers] = useState([])

  // Store the ID of the user we select 
  const [selectedCustomer, setSelectedCustomer] = useState(null)

   // Store info about the selected user 
   const [selectedCustomerInfo, setSelectedCustomerInfo] = useState(null)

   const navigate = useNavigate()

  const deleteCustomer = async (index, id) => {
    const newCustomers = customers.filter((customer, i) => i !== index)

    const response =  await fetch (`http://127.0.0.1:5000/customers/${id}`,{
      method: 'DELETE',
      headers: {
          'content-Type': 'application/json'
      },
      // body: JSON.stringify(customer)
      
  })
    console.log(response)
    setCustomers(newCustomers)
  }

  const selectCustomer = (id) => {
    setSelectedCustomer(id)

    navigate(`/customers/${id}`)
    // getCustomerInfo(id)
  }

  const getCustomerInfo = (id) => {
    axios.get(`http://127.0.0.1:5000/customers/${id}`)
    .then(response => {
      console.log(response)
      setSelectedCustomerInfo(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/customers')
    .then(response => {

    // log the response to make sure it works 
    console.log(response)

    setCustomers(response.data)

})
.catch(error => {
  console.log(error)
})

  }, [])

  return (
    <div className='bg-cf' >
      <br></br>


      <CreateCustomerForm className='cf'/>

      <br></br>
      <h1 className='lc' >Existing Customers:</h1>


      { customers.map((customer, index) => 
      
        <div key={index} className='ec-card' >
            <img src='src/Images/avatar.jpg' alt='Avatar' width={70} height={70} />
           <p>{customer.customer_name}</p>

          <ReusableButton handleClick={() => deleteCustomer(index, customer.id)} title="Delete User"/>
          <br />
          <ReusableButton handleClick={() => selectCustomer(customer.id)} title="Select User"/>
          
        
        </div>

  

      )}
    </div>
  )
}

export default CustomersList
```

2. **Product Catalog: Create React components and functionality for managing Products:**

- List Products: Create a component to display a list of all available products in the e-commerce platform, providing essential product information.

- Create Product Form: Develop a form component for adding a new product to the e-commerce database. Capture essential product details, such as the product name and price.

- Read Product Details: Create a component to display product details retrieved from the backend based on the product's unique identifier (ID).

- Update Product Form: Build a form component that allows users to update product details, including the product name and price.

- Delete Product Information: Build a function in your Product Detail Component that when triggered will delete a product from the backend based on their unique identifier (ID).

- Product Confirmation Module: Design a confirmation modal or component for securely creating, updating or deleting a product from the system based on its unique ID

```jsx
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


      { products.map((product, index) => 

        <div key={index} className='ep-card' >
          <img src='src/Images/product_avatar.png' alt='Avatar' width={70} height={70} />
           <p>{product.product_name}</p>

          <ReusableButton2 handleClick={() => deleteProduct(index, product.id)} title="Delete User"/>

          <br />

          <ReusableButton2 handleClick={() => selectProduct(product.id)} title="Select User"/>
          
          


        </div>
      )}
    </div>
  )
```

3. Order Processing: Develop React components and functionality for efficient handling of customer orders:

- Place Order Form: Create a form component for customers to place new orders, specifying the products they wish to purchase and providing essential order details. Each order should capture the order date and the associated customer.
- Retrieve Order Details: Implement a component that allows customers to retrieve details of a specific order based on its unique identifier (ID). Provide a clear overview of the order, including the order date and associated products.
- Track Order Status: Develop a component that enables customers to track the status and progress of their orders. Customers should be able to access information such as order dates and expected delivery dates.

```jsx
 <Container className='bg-o' >

      {/* Form to get the ID */}
      <Form onSubmit={trackOrder}>
        <Form.Group controlId='formBasicOrderID'>
          <Form.Label className='text' >What order would you like to track?</Form.Label>
          <Form.Control type='number' value={orderID} onChange={(e) => setOrderID(e.target.value)}/>
        </Form.Group>

        <br />

        <Button type="submit">Submit</Button>

      </Form>

      <br />

      <div className='order-details-container'>
        { order && 
          <div>
            <p> Delviery Date: {order.delivery_date}</p>
            <p> Order Date: {order.order_date}</p>

            <h3>Order Status:</h3>
            <p>{orderStatus.message}</p>
            <ProgressBar variant={orderStatus.variant} now={orderStatus.value} />

          </div>
        }
      </div>

    </Container>
```

4. Component Creation and Organization:
Create either functional or class components to build the user interface of the e-commerce application.
Organize components into a logical folder structure for better code organization and maintainability.
Use React hooks such as useState, useEffect, and useContext as appropriate to manage component state and side effects.

```jsx
import React, { useState } from 'react'
import '../styles/customer.css'


const CreateCustomerForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const customer = {customer_name:name, email, phone}
```

5. Routing and Navigation:
Implement routing using React Router to create routes for different sections and pages of the application.
Define route paths and components to be rendered when specific URLs are accessed.
Use navigation links or buttons to allow users to navigate between different parts of the application.
```jsx
 <>
    <NavBar />

    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/customers' element={<CustomersList/>} />
      <Route path='/customers/:id' element={<CustomerDetails/>} />
      <Route path='/products' element={<ProductsList/>} />
      <Route path='products/:id' element={<ProductsDetails/>} />
      <Route path='/orders' element={<Orders/>} />
    </Routes>
    
    
    </>
```
6. Forms and Form Handling:
Develop forms using React components to capture user inputs for creating, updating, or interacting with customer data, product data, and orders.
Implement form validation to ensure that user inputs meet specified criteria, such as required fields, proper formatting, and validation messages.
Utilize React state and hooks to manage form data and user input changes.
Implement form submission handlers to send data to the backend API for processing.
```jsx
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
```

7. Event Handling:
Set up event handlers to respond to user interactions and events within the application.
Implement event listeners for actions like button clicks, form submissions, and user interactions with UI elements.
Use event handling to trigger actions like submitting forms, deleting records, and updating data.
```jsx
 { customers.map((customer, index) => 
      
        <div key={index} className='ec-card' >
            <img src='src/Images/avatar.jpg' alt='Avatar' width={70} height={70} />
           <p>{customer.customer_name}</p>

          <ReusableButton handleClick={() => deleteCustomer(index, customer.id)} title="Delete User"/>
          <br />
          <ReusableButton handleClick={() => selectCustomer(customer.id)} title="Select User"/>
          

        </div>

      )}
```

8. Integration with React-Bootstrap:
Incorporate React-Bootstrap components and utilities to enhance the user interface of the application.
Use React-Bootstrap components such as buttons, forms, modals, alerts, and navigation elements to improve the visual design and functionality.
Apply Bootstrap styles and CSS classes to achieve a visually appealing and responsive layout

```jsx
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios' // Add this import
import { ProgressBar } from 'react-bootstrap'
import '../styles/orders.css'



<div className='order-details-container'>
        { order && 
          <div>
            <p> Delviery Date: {order.delivery_date}</p>
            <p> Order Date: {order.order_date}</p>

            <h3>Order Status:</h3>
            <p>{orderStatus.message}</p>
            <ProgressBar variant={orderStatus.variant} now={orderStatus.value} />

          </div>
```


9. Error Handling:
Implement error handling mechanisms to gracefully handle errors that may occur during data retrieval, form submission, or API interactions.
Display informative error messages to users when errors occur, helping them understand the nature of the issue and how to resolve it.
Use try-catch blocks or error-handling functions to capture and manage exceptions and errors.

```jsx
import React from 'react';
import {Link, useNavigate} from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    },5000) // Navigate to the home screen after 5 seconds
    
  return (
    <div className='not-found-container' >
        <h1>404</h1>
        <p>Page Not found</p>
        <Link to="/">Go Back to Home</Link>
        
        </div>
  );
}

export default NotFound;
```












#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
