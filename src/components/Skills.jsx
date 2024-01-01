import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { MdCircle, MdOutlineCircle } from 'react-icons/md'
import { JavascriptOriginal } from 'devicons-react';
import {PythonOriginal} from 'devicons-react';
import {ReactOriginal} from 'devicons-react';
import {Css3Original} from 'devicons-react';
import {MysqlOriginal} from 'devicons-react';
import {FigmaOriginal} from 'devicons-react';
import {GitOriginal} from 'devicons-react';
import {MongodbOriginal} from 'devicons-react';
import {FirebasePlain} from 'devicons-react';
import {AzureOriginal} from 'devicons-react';






import Data from '../../data.json'


const Skills = () => {
  const SkillsData = Data.Skills
  const getIcon = (skill) => {
    switch (skill) {
      case 'Javascript':
        return <JavascriptOriginal size={30} />;
      case 'Python':
        return <PythonOriginal size={30} />;
      case 'UI/UX':
        return <FigmaOriginal size={30} />;
      case 'Data Structures Algorithms':
        return <PythonOriginal size={30} />;
      case 'React Js':
        return <ReactOriginal size={30} />;
      case 'CSS / TailwindCSS':
        return <Css3Original size={30} />;
      case 'MongoDb':
        return <MongodbOriginal size={30} />;
      case 'Firebase':
        return <FirebasePlain size={30} />;
      case 'SQL':
        return <MysqlOriginal size={30} />;
      case 'Git':
        return <GitOriginal size={30} />;
      default:
        return <AzureOriginal size={30} />;
    }
  };
  
  return (
    <section id='skill' className='my-4'>
    <div className='grid md:flex flex-row my-8 py-4 md:py-8 gap-4  md:gap-8'>
      <h1 className='basis-1/3 text-4xl font-normal dark:text-white flex gap-2 items-center'>Skills<FaArrowCircleRight size={30}/></h1>
      <p className='basis-2/3 md:text-lg text-md dark:text-white/80 text-gray-600'>You bring the challenge and your domain knowledge. I bring design, technology, and over 2 years of experience.
         I have a solid experience within eight different areas.</p>
    </div>
    <div className='bg-gray-200 dark:bg-gradient-to-tl from-slate-600 via-slate-800 to-violet-950 p-4 grid gap-4 rounded-lg' >

      <h2 className='my-4 text-3xl dark:text-white/80 font-normal '>Technical Skills</h2>
<div className='flex flex-wrap gap-2 md:gap-4'>
  {SkillsData.map((item, index) =>(
      <div className='bg-gray-300 dark:bg-slate-500 rounded-md py-2 px-4' key={index}>
        <div className='flex gap-2 items-center'>
          <div className=' p-2 bg-gray-400 rounded-md shadow-md'>
          {getIcon(item.skill)}
          </div>
        <h2 className=' text-sm dark:text-black/90  line-clamp-1 md:md:text-lg text-md antialiased  font-normal'>{item.skill}</h2>
        </div>
        {/* <div className=' flex items-center my-4'>
        <MdCircle/>
        <MdCircle/>
        <MdCircle/>
        <MdCircle/>
        <MdOutlineCircle/>
        </div> */}
      </div>
      ))}

     

</div>

    </div>
    </section>
  )
}

export default Skills