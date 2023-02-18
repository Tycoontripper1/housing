import React from 'react'
import { Hero } from './Hero'
import { useGlobalContext } from '../../Context'
import { Care } from './care/Care'
import { List } from './list/List'
import { Search } from './search/Search'
import { Review } from './review/Review'
import { Footer } from '../../components/header/footer/Footer'

export const Home = () => {
    const { darkTheme } = useGlobalContext();
  return (
    <div className={darkTheme ? "dark" : ""}>
    <div className="bg-white dark:bg-black">
        
        <Hero />
        <Care />
        <List />
        <Search />
        <Review />
        <Footer />

    </div>
    </div>
  )
}
