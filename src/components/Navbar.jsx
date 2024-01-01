import React, { useEffect, useState } from 'react'
import {MdArrowCircleRight, MdArrowRightAlt, MdCircle, MdClose, MdMenu, MdOutlineCircle, MdSunny} from 'react-icons/md'
import {FaMoon} from 'react-icons/fa'
import {IoArrowForwardCircle, IoClose, IoCloseCircle} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = ({darkMode, setMode}) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedtem, setSelectedItem] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    })
    setSelectedItem(sectionId)
    setIsOpen(false)
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scrollable-section');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setSelectedItem(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navItems = [
    {path:"home", link:"Home"},
    {path:'about', link:"About"},
    {path:"skill", link:"Skill"},
    {path:"projects", link:"Projects"},
    {path:"contact", link:"Contact"}

  ]
  useEffect(()=>{
    const IntervalId = setInterval(()=>{
      setCurrentTime(new Date());
    },1000)

    return()=> clearInterval(IntervalId)
  }, []);

  const formatedTime = currentTime.toLocaleTimeString('en-US',{
    hour:'numeric',
    minute: 'numeric',
    hour12: true,
  });
// dark mode logic


  //mobile menu logic 
  const handleOpenMenu =()=>{
    setIsOpen(!isOpen)
  }

  const handleCloseMenu =()=>{
    setIsOpen(false)
  }


  const renderIcon=(item)=>{
    if (selectedtem === item){
      return <MdCircle />;
    } else {
      return <MdOutlineCircle className='hover:'/>
    }

  }
  return (
    <div  className=''>
    <div className='flex justify-between  z-10 top-0 right-0 w-[100%]  md:mx-0 py-8 md:py-8 bg-opacity-50 '>
      <div className='font-light ml-4 '>
        <h2 className='md:text-lg text-md dark:text-white text-black '>Welcome</h2>
      </div>
      {/* Menu icon for small screen */}
      <MdMenu size={30} className='block dark:text-white md:hidden mr-4' onClick={handleOpenMenu}/>

      {/* Menu for large Screen */}
      <div className='w-4/5 hidden md:flex justify-around'>
        <ul className='flex justify-between w-1/2 list-none capitalize'>
          {navItems.map((item, index)=>(
            <li key={index} onClick={()=>scrollToSection(item.path)} className='text-black dark:text-white flex items-center gap-2'>
              {renderIcon(item.path)}
              {item.link}
            </li>
          ))}

        </ul>
        <div className='flex items-center gap-16'>
          <h2 className='flex items-center gap-2 text-black dark:text-white'><MdCircle size={20} className='text-green-600'/>{formatedTime}</h2>
          {darkMode ?  <FaMoon size={20} onClick={setMode} className='text-white'/> :<MdSunny size={20} onClick={setMode} className='text-orange-500'/> }

        </div>

      </div>
    </div>


    {/* Menu for small Screen */}
    {isOpen && (
      <div className='fixed md:hidden z-30 overflow-y-scroll bg-gray-100 dark:bg-gradient-to-t dark:bg-opacity-90 from-slate-800 via-slate-950 to-violet-800 w-full h-screen right-0 top-0 py-2 '>
        <IoCloseCircle onClick={handleCloseMenu} size={25} className='text-black dark:text-white absolute z-50 top-4 right-3'/>
        <div className='flex items-center  mt-16   bg-gray-200 dark:bg-gradient-to-t from-slate-800  to-violet-950  rounded-t-2xl py-8 justify-between px-4'>
          <h2 className='flex items-center gap-2 dark:text-white/80 text-md'>
            <MdCircle size={20} className='text-green-600 '/>{formatedTime}</h2>
          {darkMode ?  <FaMoon size={20} onClick={setMode} className='text-white'/> :<MdSunny size={20} onClick={setMode} className='text-orange-500'/> }
        </div>
        <ul className='grid  list-none capitalize px-8'>
          <p className='my-2 text-gray-500 dark:text-white/80 pt-2'>Menu</p>
          {navItems.map((item, index)=>(
            <li key={index} onClick={()=>scrollToSection(item.path)}>
              <div className=' flex justify-between items-center'>
              <div className=' w-1/2 text-black mt-2 py-2 flex items-center gap-2'>
              <div className='h-14 w-14  bg-gray-300 rounded-lg'></div>
              <p className='md:text-lg text-md text-center dark:text-white/90'>{item.link}</p> 
              </div>
              <IoArrowForwardCircle className=' text-black  dark:text-white' size={20}/>
              </div>
              <div className='mt-2 w-full bg-gray-400 h-[1px]'></div>
            </li>
          ))}
        </ul>

        <div className='px-8 my-4' >
          <button onClick={()=> scrollToSection('contact')} className=' w-full bg-gray-300 dark:bg-gradient-to-r from-slate-600 via-slate-800 to-slate-700 dark:text-white py-4 rounded-xl'> Contact</button>
        </div>

      </div>
    )}
    </div>
  )
}

export default Navbar