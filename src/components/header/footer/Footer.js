import React from 'react'
import { FooterDown } from './FooterDown'
import { FooterUp } from './FooterUp'

export const Footer = () => {
  return (
    <footer className='px-5  sm:px-10 lg:px-28 py-20 w-full'>
    <div className='w-full border-t-2 px-10 lg:px-20 border-t-red1x'>
        <FooterUp />
        <FooterDown />
    </div>
</footer>
  )
}
