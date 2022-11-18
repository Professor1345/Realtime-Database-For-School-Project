import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/icon.png';
const Footer = () => {
  return (
    <div className="w-full h-[3rem] shadow-md text-center justify-center flex fixed bottom-0 m-auto bg-slate-500">
        <div className="hidden sm:flex items-center">
            <span className="text-white text-[18px]">
                Developed by <span className='hover:text-blue-600'> <a href="https://github.com/Professor1345">Bello</a> </span>
            </span>
        </div>
    </div>
  )
}

export default Footer