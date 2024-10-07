import React from 'react'

const ReusableButton = ({ handleClick, title ="click me", selectedCustomerID = '1' }) => {


    // Styling Button
   
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        border: 'none'
    
    }
  
  const handleClick2 = () => {
    alert("You clicked the button")
  }

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>{title}</button>
    </div>

    
    )
  }
  
  export default ReusableButton