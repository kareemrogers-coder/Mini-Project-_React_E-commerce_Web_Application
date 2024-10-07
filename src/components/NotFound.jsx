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