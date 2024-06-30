import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>Feel free to connect with me</motion.h2>
        <div className='text-center tracking-tighter'>
        <motion.pre
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1 }}
  className='my-4'
>
  <a className="border-b" href="https://www.linkedin.com/in/lohitha-adapala/" target="_blank">LinkedIn</a>{' '}
  <a className="border-b" href="https://github.com/LohithaAdapala" target="_blank">Github</a>{' '}
  <a className="border-b" href="https://leetcode.com/u/Lohitha11/" target="_blank">Leetcode</a>
</motion.pre>



       

           <motion.p
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:1}}
           className='my-4'>{CONTACT.phoneNo}</motion.p>
           <p>
            {CONTACT.email}
           </p>
        </div>
        </div>
  )
}

export default Contact