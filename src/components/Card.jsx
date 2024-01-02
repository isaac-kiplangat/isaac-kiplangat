import React from 'react'
import { motion } from 'framer-motion'

const Card = () => {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition:{ duration : 0.5}},
    hidden: {opacity: 0, scale:0}
  }

  return (
 <motion.div
     initial='hidden'
     animate={{scale: 0.1}}
     variants={squareVariants}
     whileInView='visible' className=' bg-gray-300 px-4 py-12 rounded-lg'>
      <h2 className='text-2xl font-semibold text-black'>Projects Done</h2>
    </motion.div>
  )
}

export default Card