import React from 'react'
import {MdArrowDownward, MdArrowOutward} from 'react-icons/md'
import BlueOrange from '../assets/blue-orange.jpg'
import { FaGithub, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'

const Introduction = () => {
  return (
    <section style={{backgroundImage: `url(${BlueOrange})`}} id='home' className='h-[70vh] brightness-120  flex items-end  bg-cover overflow-hidden rounded-xl  p-4  md:p-8'>
      {/* <div className='w-full h-full right-0 top-0 bg-black bg-opacity-10 absolute z-10'></div> */}
      <div className=' bottom-4 md:bottom-8 bg-gray-700 bg-opacity-60 p-4 rounded-lg w-[100%] md:w-full md:mr-8'>
      <div className='text-white mb-4 flex-col '>
      <h1 className=' text-2xl md:text-4xl antialiased font-bold'>Hi, I'm</h1>
      <h1 className=' text-5xl md:text-7xl font-semibold'>Isaac Kiplangat</h1>
      </div>
      <p className='mt-auto text-white align-bottom py-4 md:text-md md:py-8 mr-8'> 
Full-stack developer passionate about crafting seamless, end-to-end solutions. Turning ideas into innovation through
 expertise in front-end and back-end technologies. Let's build something extraordinary!</p>

<div className='grid md:grid-cols-2'>
      <div className=' mt-8 md:mt-20 flex gap-4 md:gap-8 items-center'>
        <button className='bg-white gap-2 flex  text-black text-sm md:text-md md:px-8 py-2 px-2 md:py-4 rounded-full'>
          See my Work
          <MdArrowOutward size={20} className='item-start'/></button>
      <button className='bg-white gap-2 flex item-center text-black text-sm px-2 md:text-md md:px-8 md:py-4 py-2 rounded-full'>
          Download CV
          <MdArrowDownward size={20} className='item-start'/></button>
      </div>

      <div className=' hidden md:flex justify-end items-end gap-2'> 
      <FaGithub className='text-white' size={20}/>
      <FaPinterest className='text-white' size={20}/>
      <FaTwitter className='text-white' size={20}/>
      <FaLinkedin className='text-white' size={20}/>

      </div>
</div>
      </div>


    </section>
  )
}

export default Introduction