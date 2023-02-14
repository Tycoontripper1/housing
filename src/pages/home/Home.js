import React from 'react'
import { Hero } from './Hero'
import { useGlobalContext } from '../../Context'
import { Care } from './care/Care'
import { List } from './list/List'
import { Search } from './search/Search'

export const Home = () => {
    const { darkTheme } = useGlobalContext();
  return (
    <div className={darkTheme ? "dark" : ""}>
    <div className="">
        
        <Hero />
        <Care />
        <List />
        <Search />

    </div>
    </div>
  )
}
