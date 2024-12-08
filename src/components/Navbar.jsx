import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navLinks =[
        {
            url:'/',
            title:'Home'
        },
        {
            url:'/product',
            title:'Products'
        },
        {
            url:'/login',
            title:'Login'
        },
        {
            url:'/sign-up',
            title:'Sign Up'
        },
    ]
  return (
    <>
      <nav>
        <ul className='flex border border-gray-700 justify-center items-center py-5 bg-green-500 gap-3 text-white'>
          {navLinks.map(({url,title},index)=>(
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
