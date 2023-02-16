import React from 'react'
import { SearchImages } from './SearchImages.js'
import { Form } from '../form/Form.js'

export const Search = () => {
  return (
    <main className='px-5 sm:px-10 lg:px-28 py-28 space-y-28 bg-white text-black dark:bg-black dark:text-lightGrey1x'>
    <section className='flex flex-col lg:flex-row items-center gap-16'>
        <div className='lg:w-fiftyPercent'>
            <SearchImages />
        </div>
        <div className='lg:w-fiftyPercent inter flex flex-col items-start gap-10'>
            <div className='text-left w-ninetyPercent sm:w-eightyPercent space-y-5'>
                <h1 className='font-bold text-4xl'>Flexibility and options to suit your lifestyle.</h1>
                <p className='inter-400'>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
            </div>
            <button type='button' id='showRooms' className='font-semibold text-white bg-red1x active:translate-y-4 hover:border-0.5 hover:border-red1x hover:text-red1x hover:bg-white hover:shadow-xl py-5 px-7 rounded-fifteen transition-colors duration-500'>Search Rooms</button>
        </div>
    </section>
    <Form />
</main>
  )
}
