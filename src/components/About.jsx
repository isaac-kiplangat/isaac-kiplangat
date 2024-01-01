import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import Data from '../../data.json'

const About = () => {
  const aboutData = Data.About;

  return (
    <section id='about' className=''>
    <div className=' grid md:flex flex-row my-8 md:py-8 p-4 gap-4 md:gap-8'>
      <h1 className='basis-1/3 text-4xl font-normal flex gap-2 dark:text-white items-center'>About <FaArrowCircleRight size={30}/></h1>
      <p className='basis-2/3 md:text-lg text-md dark:text-white/80 text-gray-600'>
"Discover the coder behind the code—unveiling a narrative of innovation, passion, and the art of crafting digital experiences.</p>
    </div>
    <div className='rounded-lg bg-gray-200 dark:bg-gradient-to-bl from-slate-600 via-slate-800 to-violet-950 dark:text-white/90 p-8 grid gap-8'>
    <p className='basis-2/3 md:text-lg text-md text-gray-600 dark:text-white/80'>{aboutData.desc}</p>
    <p className='basis-2/3 md:text-lg text-md text-gray-600 dark:text-white/80'>{aboutData.cont}</p>
    <p className='basis-2/3 md:text-lg text-md text-gray-600 dark:text-white/80'>{aboutData.outro}</p>

    {/* {aboutData.desc.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            <p className='basis-2/3 md:text-lg text-md text-gray-600'>{paragraph}</p>
            {index % 4 === 3 && <div className='my-4' />} 
          </React.Fragment>
        ))} */}
    </div>
    </section>
  )
}

export default About