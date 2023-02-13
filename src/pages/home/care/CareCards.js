import React from 'react'
import { motion } from 'framer-motion'

export const CareCards = ({image,alt,title}) => {
    
    const care = {
        hidden: { 
          opacity: 0,
          x: -50
         },
        show: { 
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration:2,
          }
         }
      }
  return (
    <motion.div variants={care} initial='hidden' whileInView="show" viewport={{ once: true, amount: 0 }}  className="flex flex-col items-center sm:items-start text-left space-y-4">
    <div className='bg-white shadow-lg dark:bg-slate-900 dark:shadow-gray-600 dark:shadow-md w-12 h-12 sm:w-18 sm:h-18 flex items-center justify-center rounded-ten'>
        <img loading='lazy' src={image} alt={alt} className="w-7 h-7 sm:w-9 sm:h-9"/>
    </div>
    <div>
        <h2 className='inter inter-600 text-center md:text-left'>{title}</h2>
    </div>
</motion.div>
  )
}
