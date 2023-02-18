import React from 'react'

const Dots = ({dotItem, currentSlide, changeSlide}) => {
  return (
    <div id={dotItem} onClick={()=>{changeSlide(dotItem)}} className={`cursor-pointer rounded-fiftyPercent w-4 h-4 lg:h-3 lg:w-3 ${dotItem === currentSlide ? "bg-red1x" : "bg-lightGrey5x hover:bg-red1x/90 duration-500 transition-colors"}`}>
        
    </div>
  )
}

export default Dots