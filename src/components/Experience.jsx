import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import Data from '../../data.json'


const Experience = () => {
  const ExperienceData = Data.Experience
  return (
    <section id='experience' className='my-4'>
    <div className='grid md:flex flex-row md:my-8 md:py-8  py-4 gap-4 md:gap-8'>
      <h1 className='basis-1/3 text-4xl font-normal flex gap-2 items-center'>Experience <FaArrowCircleRight size={30}/></h1>
      <p className='basis-2/3 md:text-lg text-md text-gray-600'>Embarked on a coding journey after earning a degree in Computer Science. Specializing in web development, with a focus on full-stack and backend technologies</p>
    </div> 

    <hr  className='my-4 bg-black/20 h-[2px]'/>
    <div className='px-8 md:px-0'>

    {ExperienceData.map((item, index)=>(
      <div className='grid md:flex flex-row gap-4' key={index}>
        <div className='basis-1/3 py-0 md:py-4'>
          <h2>{item.name}</h2>
          <p>{item.title}</p>
        </div>
       
        <ul className='basis-2/3 list-disc' >
        {item.roles.map((item, subindex)=>(
          <li key={subindex} className='my-1'>{item.role}</li>
          ))}
        </ul>
   
      </div>
      ))}
    </div>

    <hr  className='my-4 bg-black/20 h-[2px]'/>
    </section>
 )
}

export default Experience