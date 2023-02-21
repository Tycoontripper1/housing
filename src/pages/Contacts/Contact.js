import React from 'react'
import { Header } from '../../components/header/Header'
import { useGlobalContext } from '../../Context'
import { Slide } from 'react-awesome-reveal'
import { BiLoader } from 'react-icons/bi'



export const Contact = () => {
    const { darkTheme } = useGlobalContext();
  return (
    <div className={darkTheme ? "dark" : ""}>
    <div className="bg-white dark:bg-black">
        
        <div className='md:px-12 lg:px-28 px-5 relative z-20 top-0 left-0 '>
        <Header />
        </div>
        <div className='h-screen w-full flex justify-center items-center text-red1x font-bold md:text-4xl text-2xl'>
            <Slide>
            <h1> Contacts comming soon</h1>
            
            </Slide>

        </div>
        

    </div>
    </div>
  )
}
