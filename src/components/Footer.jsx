import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer  className='px-8 '>
      <div className='   mt-8 mb-4 bg-gray-200 dark:bg-gradient-to-br from-slate-500 to-slate-800 justify-center text-sm  md:md:text-md text-md text-center flex flex-wrap gap-4 px-2 py-4 md:gap-8 md:p-4 rounded-lg'>
      <p className='text-center  dark:text-white/80 '>&copy; {currentYear} 
      <span className='bg-clip-text dark:bg-gradient-to-tr  dark:from-green-400  dark:to-purple-300 dark:text-transparent bg-gradient-to-tr ml-4 from-green-600   to-purple-700 text-transparent'>Isaac Kiplangat</span></p>
      <p className='tex-center capitalize  dark:text-white/80'>all rights reserved </p>
      <p className='capitalize underline dark:text-white/80'>Terms & Conditions</p>
      </div>

      <div className='flex flex-row justify-center py-8 '>
        <div>
        <p className=' text-sm  text-gray-500 dark:text-white/80 leading-relaxed tracking-wider'><b>About This website :</b>  built with React Vite,
         Tailwind CSS, Framer Motion, React Email & Resend, spotify Api(music player), particlesJs ,Vercel hosting.</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer