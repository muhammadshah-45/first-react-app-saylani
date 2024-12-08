import React, { useCallback, useEffect, useMemo, useState } from 'react'

import './App.css'
import Login from './Pages/Login'
// import AddNumber from './Pages/AddNumber'
// import NumberList from './Pages/NumberList'
import { Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
import ProductPage from './Pages/ProductPage'
import SignUpPage from './Pages/SignUpPage'
import Navbar from './components/Navbar'
function App() {
  // const [numbers,setNumbers] = useState([])
  // const [filter,setFilter] = useState('')

  // const [name, setName] = useState("")
  // const [display,setDisplay] = useState()
  // const [error,setError] = useState(null)
  // const handleTextChange = (e)=>{
  //   setName(e.target.value);
  // }
  // const handleSubmit = ()=>{
  //   if(name.trim()===""){
  //     alert("Please enter your name")
  //     setError("please enter your name");
  //   }else{
  //     setDisplay(`Hello ${name}`);
  //     setName('')
  //     setError(null)
  //   }

  // }
  // const handleReset = ()=>{
  //   setDisplay("")
  //   setName('')
  //   setError(null)
  // }
  // const addNumber = (num)=>{
  //   setNumbers((prev=>[...prev,num]))
  // }
  // const handleFilterChange = (event)=>{
  //     setFilter(event.target.value)
  // }
  // const filteredNumbers = useMemo(()=>{
  //   return numbers.filter((num)=>num.toString().includes(filter))
  // },[numbers,filter])
  // const memoizedAddNumber = useCallback(addNumber,[])
  // console.log(numbers)
  // console.log(filter)
  return (
    <>
    {/* <Login/> */}
    {/* <div>
        <h1>Number List</h1>
    <AddNumber addNumber={memoizedAddNumber}/>
    <input onChange={handleFilterChange} type="text" placeholder='filter numbers' name="" id="" />
    <NumberList numbers={filteredNumbers}/>
    </div> */}
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product-detail' element={<ProductDetail/>} />
      <Route path='/product' element={<ProductPage/>} />
      <Route path='/sign-up' element={<SignUpPage/>} />
      <Route path='/login' element={<Login/>} />

    </Routes>
    </>
  //   <>
  //   <h1 className='text-green-800 font-mono w-full bg-purple-300'>Hello</h1>
  //   <div className='container'>
  //     <input type="text" onChange={handleTextChange} value={name} name="" id="" />
  //     {error && <p style={{color:"red",margin:"0px"}}>{error}</p>}
  //     <button onClick={handleSubmit}>Submit</button>
  //     {display && <p>{display}</p>}
  //   </div>
  //   <div>
  //     <button onClick={handleReset} id='reset-btn'>Reset</button>
  //   </div>
  //   </>
  )
}

export default App
