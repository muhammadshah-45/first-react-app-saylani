import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("")
  const [display,setDisplay] = useState()
  const [error,setError] = useState(null)
  const handleTextChange = (e)=>{
    setName(e.target.value);
  }
  const handleSubmit = ()=>{
    if(name.trim()===""){
      alert("Please enter your name")
      setError("please enter your name");
    }else{
      setDisplay(`Hello ${name}`);
      setName('')
      setError(null)
    }

  }
  const handleReset = ()=>{
    setDisplay("")
    setName('')
    setError(null)
  }
  return (
    <>
    <h1 className='text-green-300 font-mono'>Hello</h1>
    <div className='container'>
      <input type="text" onChange={handleTextChange} value={name} name="" id="" />
      {error && <p style={{color:"red",margin:"0px"}}>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
      
      {display && <p>{display}</p>}
    </div>
    <div>
      <button onClick={handleReset} id='reset-btn'>Reset</button>
    </div>
    </>
  )
}

export default App
