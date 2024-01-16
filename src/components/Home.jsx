import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction'
import Logo from './Logo'
import Card from './Card'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Notification from './Notification'
import ParticlesComponents from './Particles'

const Home = () => {
  const [ShowNotification, setShowNotification] = useState(false)
  const [progress, setProgress] = useState(100);
  const [darkMode,setDarkMode] = useState(false)

  const setMode=()=>{
    setDarkMode(!darkMode)
  }

  const textMessage = "Happy New Year 2024"
  const onClose = setTimeout(()=>{
    setShowNotification(false)
  }, 10000)

  const handleClose = ()=>{
    setShowNotification(false)
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setProgress((prevProgress)=> (prevProgress > 0 ? prevProgress - 2: 0  ))
    }, 185)

    setTimeout(()=>{
      clearInterval(interval);
    }, 10000)

    return ()=> clearInterval(interval)
  }, [])


  return (
     <section className={`top-0 ${darkMode ? 'dark':''} `}>
      <ParticlesComponents/>
      <div className={`bg-gray-100 dark:bg-gradient-to-tr from-slate-800 via-slate-700 to-violet-950 w-full`}>
      {ShowNotification && (
        <Notification handleClose={handleClose} message={textMessage} progress={progress}/>
      )}
      <div className={` ${ShowNotification ? '': 'top-0'} px-2 md:px-5  h-20 fixed w-full  right-0 dark:bg-gradient-to-r from-slate-700 via-slate-900 to-violet-950 bg-gray-100 bg-opacity-95 dark:bg-opacity-90`}>
      <Navbar darkMode={darkMode} setMode={setMode}/>
      </div>
      <div className=' pt-16 mt-8 px-4 md:mx-8 md:mt-20 grid md:flex md:flex-row gap-8 md:gap-20 '>
        <div className=' basis-1/5 md:h-[80vh] md:flex flex-col  justify-between'>
          <Logo/>
          <div className='hidden md:block'>
          <Card/>
          </div>
        
        </div>
        <div className='basis-4/5  gap-6 grid'>
          <Introduction/>
          <About/>
          <Skills/>
          {/* <Experience/> */}
          <Projects/>
          <Contact/>
        </div>

      </div>
      <Footer/>
      </div>
    </section>
  
  )
}

export default Home