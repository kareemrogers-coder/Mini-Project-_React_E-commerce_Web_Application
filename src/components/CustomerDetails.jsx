import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'

const CustomerDetails = () => {
 
    
    const {id} = useParams()
    const [customers, setCustomer] = useState(null); // set to null by default


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

      useEffect(()=>{
        const fetchCustomer = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/customers/${id}`)
                console.log(response)
                setCustomer(response.data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchCustomer();

      },[])
  return (
    <div>
       

      {/* "?" acts as a if statement and : act as a or */}

        {customers ?(
            <>
            <h2>{customers.customer_name}</h2>
            
            <p>Email: {customers.email}</p>
            <p>Phone Number: {customers.phone}</p>
            <Link to="/customers" >Back to Customers page</Link>

            </>
        ) : (
            <> <p> No User Found</p>
            <Link to="/customers" >Back to Customers page</Link>
            </>
            
        )}
       
    </div>
    
  )
}

export default CustomerDetails