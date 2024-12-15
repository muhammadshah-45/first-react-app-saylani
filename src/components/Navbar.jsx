import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navLinks =[
        {
            url:'/',
            title:'All'
        },
        {
            url:'/data-science',
            title:'Data Science'
        },
        {
            url:'/career',
            title:'Career'
        },
        {
            url:'/full-stack-dev',
            title:'Full Stack Development'
        },
        {
          url:'/cyber-security',
          title:'Cyber Security'
      },
    ]
  return (
    <>
      <nav>
        <ul className='flex justify-center fixed top-0 items-center py-5  gap-3  w-full bg-pink-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-md text-white'>
          {navLinks.map(({url,title})=>(
            <>
            <li className='border px-2 py-1 rounded-lg hover:bg-green-400 hover:text-green-900'>

<Link to={url}>{title}</Link>
</li>


            </>
          ))}
            {/*
            */}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
