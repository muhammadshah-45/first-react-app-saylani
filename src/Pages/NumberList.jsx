import React from 'react'

const NumberList = ({numbers}) => {
  return (
    <div>
      <ul>
        {numbers.map((num,index)=>(
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  )
}

export default NumberList
