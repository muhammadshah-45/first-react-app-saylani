import React, { useState } from 'react'

const AddNumber = ({addNumber}) => {
   
    const [numberInput,setNumberInput] = useState('');
    const handleChange = (event)=>{
        setNumberInput(event.target.value)
    }
    const handleSubmit = (event)=>{
           event.preventDefault();
           if(!isNaN(numberInput) && numberInput.trim() !== ''){
            addNumber(Number(numberInput));
            setNumberInput("");
           }
    }
   
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='add a number' value={numberInput} type="text" name="" id="" />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddNumber
