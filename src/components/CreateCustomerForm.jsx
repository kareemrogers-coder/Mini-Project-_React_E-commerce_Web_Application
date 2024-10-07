import React, { useState } from 'react'
import '../styles/customer.css'


const CreateCustomerForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const customer = {customer_name:name, email, phone}
    
        // Manual insertion of customer data:
        // const customer = {
        //   "customer_name": "Tim",
        //  "email": "tim@gmail.com",  
        //  "phone": "8228255583",
        // }
        
        console.log(customer)

        try {
            // uploading  user to the API
            //adding a customer.

        const response =  await fetch ('http://127.0.0.1:5000/customers',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })

            // check the response to see if the customer  was successfully created

            if (response.ok){
                const data = await response.json();

                console.log("Customer Created:", data)
                alert(`Customer has been added to Database.`)
                
                

                // Reset the form after upload is completed. 
                setName('')
                setEmail('')
                setPhone('')
            }

            
                

        } catch (error){
            console.log("Error", error)
        }

    }

  return (
    <div className='cf' >
            <h3> New Customer Form</h3>
        <form onSubmit={handleSubmit} >

            {/* Name section */}
            <div>
                <label>Name: </label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/>

            {/* Email Section */}
            <div>
                <br></br>
                <label>Email: </label>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            {/* Phone Section */}
            <div>
            <br></br>
                <label>Phone: </label>
            <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            </div>

            <br></br>
            
            {/* need to make the handle for the buttom funtion below */}
            <button type='submit' >Add New Customer</button>

            </div>
        </form>

    </div>
  )
}

export default CreateCustomerForm