import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'

const colors = [
  'from-green-500 to-blue-500',
  'from-blue-500 to-purple-500',
  'from-purple-500 to-orange-500',
  'from-orange-500 to-pink-500',
]
const Notification = ({message, onClose, progress}) => {
  const [bgColor, setBgColor] =useState(colors[0])

  useEffect(()=> {
    let currentIndex = 0
    
    

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex +1 ) % colors.length
      setBgColor(colors[currentIndex])
    }, 1000);

 

    const timeOutId = setTimeout(() => {
      onClose()
    }, 5000);

   

    // setTimeout(()=>{
    //   clearInterval(interval);
    // }, 10000)

    return ()=>{
      clearTimeout(timeOutId)
      clearInterval(intervalId)
    }
  }, [onClose, colors])
  return (
    <div className=''>
    <div className={`flex justify-between items-center py-2 transition-all duration-700  px-4 bg-gradient-to-tr from-purple-500 via-green-500 to to-blue-500 from-opacity-100  to-opacity-0 `}>
      <h2 className='text-center w-3/4 text-white'>{message}</h2>
      <MdClose onClick={onClose} className='text-white' size={20}/>
      </div>
      <div className='h-1 w-full'>
      <div className={`h-full w-full transition-all duration-700  bg-gradient-to-r from-blue-500 to-purple-500 `} 
      style={{width: `${progress}%`, transition:'ease-in-out 0.5s'}} ></div>
      </div>
    </div>
  )
}

export default Notification