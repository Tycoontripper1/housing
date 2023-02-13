import React from 'react'
import { Hero } from './Hero'
import { useGlobalContext } from '../../Context'
import { Care } from './care/Care'

export const Home = () => {
    const { darkTheme } = useGlobalContext();
  return (
    <div className={darkTheme ? "dark" : ""}>
    <div className="">
        
        <Hero />
        <Care />

    </div>
    </div>
  )
}
