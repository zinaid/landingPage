import React from 'react'
import { useState } from 'react';
import { navLinks } from "../constants";
import {close, menu} from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex w-full py-6 justify-between items-center text-white'>
       <a href="/"><p className='flex flex-col text-xl font-poppins hover:text-secondary'> PORTFOLIO </p></a>
       <ul className='list-none sm:flex hidden flex-1 justify-end items-center'>
        {navLinks.map((nav, index) => (
            <li key={nav.id} className={`${index !== nav.length-1 ? "mr-4" : "mr-0"} cursor-pointer`}>
                <a href={`#${nav.id}`}><p className='custom-paragraph hover:text-secondary'>{nav.title}</p></a>
            </li>
        ))}
       </ul>

       <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
            src={toggle ? close : menu } 
            alt="menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={()=>setToggle((prev)=> !prev)}
            />
       </div>

       <div className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-dimGray absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}`} >
                    <a href={`#${nav.id}`}><p className='custom-paragraph hover:text-secondary'>{nav.title}</p></a>
                </li>
            ))}
        </ul>
       </div>
    </nav>
  )
}

export default Navbar
