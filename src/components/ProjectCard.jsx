import React, { useState, useEffect } from 'react';
import { captureScreenshot } from '../services/api'; // Adjust the path as needed

const ProjectCard = ({ info }) => {
  const { title, description, github, stack, live } = info;
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchScreenshot = async () => {
      try {
        const url = await captureScreenshot(live);
        setImageUrl(url);
      } catch (error) {
        // Handle errors
        console.error(error.message);
      }
    };

    // Fetch screenshot when the component mounts or 'live' URL changes
    fetchScreenshot();
  }, [live]);

  return (
    <div className=' mt-4 bg-gray-200 dark:bg-opacity-95  dark:bg-gradient-to-tr from-slate-400 to-slate-800 dark:border-none rounded-lg overflow-hidden border-gray-300 border'>
      <div className='w-full h-50 group'>
        <div className='hidden group-hover:block w-full h-full right-0 top-0 bg-black bg-opacity-30'></div>
        {imageUrl && (
          <img src={imageUrl} alt={`Screenshot of ${title}`} width={400} height={200} className='w-full object-cover h-full' />
        )}
      </div>
      <div className='p-4'>
        <h2 className='text-xl dark:text-white/80 font-semibold capitalize'>{title}</h2>
        <p className='text-md pt-2 dark:text-gray-300 line-clamp-4 md:line-clamp-2'>{description}</p>
        <div className='flex flex-wrap items-center gap-2 text-sm py-2'>
          {stack.map((item, index) => (
            <p key={index} className='bg-white/60 dark:bg-black line-clamp-1  dark:text-white capitalize px-2 border text-sm border-gray-600 rounded-md py-1'>
              {item.name}
            </p>
          ))}
        </div>

        <div className='flex justify-between my-2'>
          <button className='bg-black dark:bg-gradient-to-tr from-slate-800  hover:bg-indigo-900 duration-200 transition-all font-medium px-4 text-white md:px-12 text-sm py-2 rounded-lg'>
            <a href={`${github}`}>Github</a>
          </button>
          <button 
          className='bg-black dark:bg-gradient-to-tr from-slate-800 hover:bg-indigo-900 duration-200 transition-all font-medium text-white px-4 md:px-12 text-sm py-2 rounded-lg'>
            <a href={`${live}`}>Live Url</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
