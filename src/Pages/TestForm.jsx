import React, { useState } from 'react'

const TestForm = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  })
  console.log(formData)
  const handleChange = (event)=>{
    const {value,name} = event.target;
    setFormData((prev=>({...prev,[name]:value})))
  }


  
  return (
    <>
      <form action="">
        <label htmlFor="">Email:</label>
        <input type="email" onChange={handleChange} value={formData.email} name="email" id="" />
        <label htmlFor="">Password:</label>
        <input type="password" name="password" onChange={handleChange} value={formData.password} id="" />
      </form>
    </>
  )
}

export default TestForm
