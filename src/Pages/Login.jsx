import React, { useState } from "react";


const Login = ()=>{

    const [userData,setUserData] = useState({
        email:'',
        password:'',
    })

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
        if(email.trim().length == 0){
            alert("Please require email");
            return;
        }
        if(password.trim().length ==0){
            alert("Please require password");
            return;
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
               </div>
               <div className="flex flex-col gap-1 ">
                      <span className="text-[24px]">Password:</span>
                      <input className="border border-green-400 p-2 rounded-md focus:outline-none" onChange={handleChangePassword} value={userData.password} type="password"placeholder="Enter your password" name="" id="password" />
               </div>
               <button className="border border-gray-600 rounded-md" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Login;