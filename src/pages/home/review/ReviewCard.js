import React, {  useState } from "react";
import Quotes from "./../../../assets/images/quotes.png";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

export const ReviewCard = ({
  id,
  review,
  img,
  user,
  job,
  video,
  poster,
  currentSlide,
  setCurrentSlide,
  slideLength,
}) => {
    const [direction, setDirection] = useState(-100)

    const moveSlide = (x) => {
        
        if(x === 1){
            setDirection(100)
        }else{
            setDirection(-100)
        }
        setCurrentSlide((prevCurrentSlide) => prevCurrentSlide + x)
    }
  return (
    <AnimatePresence>
      <motion.section
        id={id}
        key={currentSlide}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: direction, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="inter min-w-full px-10 lg:pl-28 items-center gap-5 col-span-1 lg:gap-10 h-fit"
      >
        <section className="py-28 space-y-7">
          <div className="relative lg:text-left">
            <h1 className="inter-400 sm:text-lg lg:text-xl">{review}</h1>
            <img
              src={Quotes}
              alt="quote"
              className="absolute w-16 -top-6 -left-6"
            />
          </div>
          <div className="flex flex-row items-center gap-4 relative">
            <img
              src={img}
              alt="review"
              className="w-10 sm:w-14 aspect-square"
            />
            <div className="text-left">
              <h1 className="inter-700 text-red1x  sm:text-lg">{user}</h1>
              <p className="inter-400 text-sm">{job}</p>
            </div>
            {/* {direction} */}
            <button
              onClick={() =>
                currentSlide > 0
                  ? moveSlide(-1)
                  : setCurrentSlide(slideLength - 1)
              }
              className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500 hover:bg-white hover:shadow-sm absolute top-[160%] lg:hidden left-0 -translate-x-fiftyPercent bg-white/80 h-12 w-12 flex items-center justify-center rounded-fiftyPercent"
            >
              <AiOutlineDoubleLeft className="text-red1x hover:scale-125 transition-transform ease-in-out duration-500" />
            </button>
            <button
              onClick={() =>
                currentSlide < slideLength - 1
                  ? moveSlide(+1)
                  : setCurrentSlide(0)
              }
              className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500 hover:bg-white hover:shadow-sm absolute top-[160%] lg:hidden right-0 translate-x-fiftyPercent bg-white/80 h-12 w-12 flex items-center justify-center rounded-fiftyPercent"
            >
              <AiOutlineDoubleRight className="text-red1x hover:scale-125 transition-transform ease-in-out duration-500" />
            </button>
          </div>
        </section>
      </motion.section>
    </AnimatePresence>
  );
};
