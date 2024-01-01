import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-center'>
      <h2 className='text-3xl  text-black dark:text-white/90  font-bold flex items-center'>
        <span className='text-green-500 text-xl'>:</span>
        <span className='text-purple-600 text-xl mr-2'>// </span>
        verse
        <span className='dark:bg-gradient-to-tr dark:from-purple-400 dark:to-green-600 dark:bg-clip-text dark:text-transparent bg-gradient-to-tr from-green-600 to-purple-600 bg-clip-text text-transparent'>wrld</span></h2>
    </div>
  )
}

export default Logo