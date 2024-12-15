import React, { useState } from 'react'

const Login = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  })
  console.log(formData)
  const handleChangeEmail = (event)=>{
    setFormData({...formData,email:event.target.value})
  }

  const handleChangePassword = (event)=>{
    setFormData({...formData,password:event.target.value})
  }
  
  return (
    <>
      <form action="">
        <label htmlFor="">Email:</label>
        <input type="email" onChange={handleChangeEmail} value={formData.email} name="email" id="" />
        <label htmlFor="">Password:</label>
        <input type="password" name="password" onChange={handleChangePassword} value={formData.password} id="" />
      </form>
    </>
  )
}

export default Login
