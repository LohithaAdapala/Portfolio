import {motion} from "framer-motion"
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/image.png';
const container=(delay)=>({
    hidden: {x: -100,opacity: 0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    }
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-16 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start lg:ml-12 lg:mt-3'>
            <motion.h1 variants={container(0)}
            initial="hidden"
            animate="visible"
            className='pb-8 text-5xl font-thin tracking-tight lg:text-6xl'>
              Adapala Lohitha
            </motion.h1>
            <motion.span  variants={container(0.5)}
            initial="hidden"
            animate="visible" 
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Developer
            </motion.span>
            <motion.p 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className='my-2 max-w-xl py-4 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-4'>
          <div className='flex justify-center lg:justify-end lg:mr-12 lg:mt-4'>
          <motion.img initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={profilePic} alt="profile" className='h-64 object-cover rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
