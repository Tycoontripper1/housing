import React from 'react'

export const FooterDown = () => {
  return (
    <div className='w-full flex flex-row flex-wrap xl:flex-nowrap gap-8 xl:gap-0 justify-between items-start py-4 text-darkBlue1x dark:text-white text-xs sm:text-sm'>
    <div className='flex flex-wrap sm:flex-nowrap  gap-10 uppercase'>
        <a href="#" className='hover:scale-90 transition-all duration-500 ease-in-out'>About us</a>
        <a href="#" className='hover:scale-90 transition-all duration-500 ease-in-out'>Contact us</a>
        <a href="#" className='hover:scale-90 transition-all duration-500 ease-in-out'>Help</a>
        <a href="#" className='hover:scale-90 transition-all duration-500 ease-in-out'>Privacy Policy</a>
        <a href="#" className='hover:scale-90 transition-all duration-500 ease-in-out'>Disclaimer</a>
    </div>
    <div className='opacity-50'>
        <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
    </div>
</div>
  )
}
