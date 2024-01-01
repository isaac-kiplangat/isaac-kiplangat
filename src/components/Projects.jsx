import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import Data from '../../data.json'


const Projects = () => {
  const ProjectsData = Data.Projects
  return (
    <section id='projects' className='my-4'>
      <div className='grid md:flex flex-row my-4 md:py-8 py-4 gap-4 md:gap-8'>
      <h1 className='basis-1/3 text-4xl font-normal dark:text-white flex gap-2 items-center'>Projects <FaArrowCircleRight size={30}/></h1>
      <p className='basis-2/3 md:text-lg text-md text-gray-600 dark:text-white/80 break-words flex '>Currently shaping AfyaStack
      a digital haven where innovation meets purpose. Experience spans dynamic front-end landscapes to building impactful,
       scalable backend solutions.</p>
    </div> 

    <div className='grid md:grid-cols-2 gap-8'>
      {ProjectsData.map((item,index)=>(
      <ProjectCard key={index} info={item} stack={item.stack}/>
      ))}
 

    </div>
    </section>
 )
}

export default Projects