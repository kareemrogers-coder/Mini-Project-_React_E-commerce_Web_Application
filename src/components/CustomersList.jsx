import React from 'react'
import { useState, useEffect } from 'react'
import ReusableButton from './ReuseableButton'
import axios from 'axios'
import CreateCustomerForm from './CreateCustomerForm'

import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/customer.css'

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

{/* 
{ selectedCustomerInfo && 
        <div>
          <h3>Selected Customer</h3>

          Pretend it is a card
          
          <p>{selectedCustomerInfo.customer_name}</p>
          <p>{selectedCustomerInfo.email}</p>
        </div>
      } */}

      {/* <h3>Customer</h3> */}

      { customers.map((customer, index) => 
      
        <div key={index} className='ec-card' >
            <img src='src/Images/avatar.jpg' alt='Avatar' width={70} height={70} />
           <p>{customer.customer_name}</p>

          <ReusableButton handleClick={() => deleteCustomer(index, customer.id)} title="Delete User"/>
          <br />
          <ReusableButton handleClick={() => selectCustomer(customer.id)} title="Select User"/>
          
          {/* <Link to={`/customers/${customers.id}`} className='ec-link' >Details</Link> */}
          


        </div>

  

      )}
    </div>
  )
}

export default CustomersList


















// import React from 'react'

// const CustomersList = () => {
//   return (
//     <div>CustomersList</div>
//   )
// }

// export default CustomersList