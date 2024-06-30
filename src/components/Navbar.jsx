import React from 'react'
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { TbBrandLeetcode } from "react-icons/tb";

import logo from '../assets/logo-no-background.png'

const Navbar = () => {
  return <nav className='mb-10 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='ml-12' src={logo} alt="logo"/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/lohitha-adapala/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/LohithaAdapala" target="_blank"><FaGithub /></a>
        <a href="https://leetcode.com/u/Lohitha11/" target="_blank"><TbBrandLeetcode /></a>
    </div>
  </nav>
}

export default Navbar