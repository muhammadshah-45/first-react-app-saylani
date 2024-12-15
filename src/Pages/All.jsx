import React, { useState } from 'react'

const All = () => {
    const pages = [
        {id:1,name:'Full Stack Development',description:"Data science is a multidisciplinary field that uses scientific methods, statistics, computer science, and other disciplines to analyze and extract insights from data. Data scientists use these insights to help businesses make decisions, plan strategies, and discover scientific knowledge."},
        {id:2,name:"Career",description:"Data science is a multidisciplinary field that uses scientific methods, statistics, computer science, and other disciplines to analyze and extract insights from data. Data scientists use these insights to help businesses make decisions, plan strategies, and discover scientific knowledge"},
        {id:3,name:"Data Science",description:"Data science is a multidisciplinary field that uses scientific methods, statistics, computer science, and other disciplines to analyze and extract insights from data. Data scientists use these insights to help businesses make decisions, plan strategies, and discover scientific knowledge."},
        {id:4,name:"Cyber Security",description:"Data science is a multidisciplinary field that uses scientific methods, statistics, computer science, and other disciplines to analyze and extract insights from data. Data scientists use these insights to help businesses make decisions, plan strategies, and discover scientific knowledge"}];
 const [allData,setAllData] = useState(pages)
  return (
    <div >
      {allData.map((item)=>(
        <div key={item.id} className='w-full flex flex-col justify-center items-center gap-2 mt-24'>
            <h1 className='text-3xl font-mono font-semibold'>{item.name}</h1>
            <p className='w-[40%]'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default All
