import React from 'react'
import { FaArrowCircleRight, FaMailBulk, FaPhone,  } from 'react-icons/fa'
import { IoIosSend} from 'react-icons/io'
import {MdLocationCity, MdLocationPin, MdMail, MdPhone} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact' className='mt-8'>
      <div className=' grid md:flex md:flex-row my-4 py-8 gap-8 items-center'>
      <h1 className='basis-1/3 text-4xl dark:text-white font-normal flex gap-2 items-center'>Contact<FaArrowCircleRight size={30}/></h1>
      <p className='basis-2/3  md:md:text-lg text-md  text-gray-600 dark:text-white/80'>Let's connect!  Looking forward to discussing collaboration opportunities and tech adventures. </p>
    </div>  

    <div  className='py-4 bg-gray-200 dark:bg-slate-600 dark:border-slate-600 rounded-lg border border-gray-300 px-2'>
      <h2 className='my-4 md:text-lg text-md font-medium dark:text-white '>Shoot a Message</h2>
      <div className='flex flex-col gap-4 items-start '>
        <input 
        type="email" 
        name="email"  
        id="email" 
        placeholder='Your Email'  
        className=' border w-full dark:bg-gray-200 dark:border-gray-600  border-gray-400 rounded-md px-4 py-2 md:text-lg text-md placeholder:text-black/50 placeholder:md:text-lg text-md font-light outline-none'/>
        <textarea 
        type="text" 
        placeholder='Your Message' 
        rows={4} 
        className=' border  w-full  dark:bg-gray-200 dark:border-gray-600 border-gray-400  rounded-md px-4 py-2 md:text-lg text-md placeholder:text-black/50 placeholder:md:text-lg text-md font-light outline-none'/>
        <button className=' bg-black dark:bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 flex gap-2 items-center text-white hover:bg-indigo-900 px-4 md:text-lg text-md py-2 font-normal rounded-md'>
          <h2>Submit</h2>
          <IoIosSend className=' text-white/60' size={20}/>
          </button>
      </div>
    </div> 
<div className=' grid gap-8 md:flex justify-center md:px-8 md:justify-between items-center my-8  p-4'>
    <div className=' flex flex-col justify-center items-center'>
    <div className=' flex justify-center md:justify-start items-center gap-4 my-2'>
        <MdPhone size={25} className='text-green-500'/>
        <h2 className=' capitalize font-semibold dark:text-white/80'>Phone</h2>
      </div>
      <h2 className='dark:text-white/90'>+254798670906</h2>
    </div>

    <div className=' flex flex-col justify-center items-center'>
    <div className=' flex justify-center md:justify-start items-center gap-4 my-2'>
        <MdMail size={25} className='dark:text-red-900'/>
        <h2 className=' capitalize font-semibold dark:text-white/80'>Email</h2>
      </div>
      <h2 className='dark:text-white/90' >isaackiplangat1999@gmail.com</h2>
    </div>

    <div className=' flex flex-col justify-center items-center'>
    <div className=' flex justify-center md:justify-start items-center gap-4 my-2'>
    <MdLocationPin size={25} className='dark:text-blue-400'/>
    <h2 className=' capitalize font-semibold dark:text-white/80'>Location</h2>
    </div>
    <h2 className='dark:text-white/90'>Nairobi, Kenya</h2>
</div>

</div>
    </section>
    )
}

export default Contact