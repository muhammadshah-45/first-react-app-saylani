import React, { useState } from "react";


const Login = ()=>{
    
    const [userData,setUserData] = useState({
        email:'',
        password:'',
    })
    const [error,setError] = useState("")
    const [emailError,setEmailError] = useState("")
    const handleChangeEmail = (event)=>{
        // setUserData({...userData, email:event.target.value})
        setUserData((prevState)=>{
            return {...prevState,email:event.target.value}
        })
        
    }
    const handleChangePassword = (even)=>{
          setUserData({...userData,password:even.target.value})
      
    }
    const handleLogin =()=>{
        const  {email,password} = userData;
        let trimEmail = email.trim();
        let trimPassword = password.trim();
        if(trimEmail.length == 0){
            alert("Please require email");
            return;
        }
        const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        if(!emailRegex.test(trimEmail)){
            setEmailError("please provide a valid email address")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(trimPassword.length ==0){
            alert("Please require password");
            return;
        }
        if (!passwordRegex.test(trimPassword)) {  
            // alert("Password must be at least 8 characters long with at least one uppercase letter, one lowercase letter, one number, and one special character.");  
            setError("Password must be at least 8 characters long with at least one uppercase letter, one lowercase letter, one number, and one special character.")
            return; // Exit early to prevent further processing  
        }  
        setUserData({
            email:'',
            password:"",
        })

        console.log(userData)
    }
    return (
        <React.Fragment>
           
            <div className="w-screen h-screen border flex justify-center items-center">
          <div className="border border-black px-7 py-5 rounded-lg flex flex-col gap-2">
               <div className=" flex flex-col gap-1">
                <span className="text-[24px]">Email:</span>
                <input className="border border-green-400 p-2 rounded-md focus:outline-none" onChange={handleChangeEmail} value={userData.email}  type="email" placeholder="Enter your email" name="" id="email" />
                {emailError && <p style={{color:"red"}}>{emailError}</p> }
               </div>
               <div className="flex flex-col gap-1 ">
                      <span className="text-[24px]">Password:</span>
                      <input className="border border-green-400 p-2 rounded-md focus:outline-none" onChange={handleChangePassword} value={userData.password} type="password"placeholder="Enter your password" name="" id="password" />
                      {error && <p style={{color:"red", fontSize:"10px"}}>{error}</p> }
               </div>
               <button className="border border-gray-600 rounded-md" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Login;