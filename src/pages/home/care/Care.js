import CareImg from './../../../assets/images/careImg.png'
import CareData from './CareData'
import { motion } from 'framer-motion';
import { CareCards } from './CareCards';

export const Care = () => {
  const cardVariants = {
    offscreen: {
      y: 150,
      opacity:0,
    },
    onscreen: {
      y: 0,
      opacity:1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration:2,
      }
    }
  };
  const item = {
    slideOutRight: { 
      opacity: 0, 
      x: -200,
      scale: 0
     },
    slideInLeft: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration:5,
      }
     },
    show: { opacity: 1 }
  }


  const careWrap = {
    slideOutRight: { 
      opacity: 0, 
     },
    slideInLeft: { 
      opacity: 1, 
      transition: {
        delay: 10,
        type: "spring",
        bounce: 0.4,
        duration:5,
        delayChildren: 5,
        staggerDirection: 5,
        when: "beforeChildren"
      }
     },
  }


  let careDataSet = CareData.map((item)=>{
    return(
      <CareCards key={item.id} image={item.image} alt={item.alt} title={item.title}/>
    )
  })
  return (
    <motion.section variants={cardVariants} initial='offscreen' whileInView="onscreen" viewport={{ once: true, amount: 0 }} transition={{ ease: "easeOut", duration: 2 }} className='p-5 md:px-28 md:py-28 dark:bg-[#000] text-black dark:text-[#fff]'>
        <div className='w-full '>
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl capitalize'><span className='border-b-4 border-red1x'>minimum living cost </span>takes care of everything</h1>
        <motion.section className='flex flex-col-reverse lg:flex-row  py-6 items-center gap-16'>
            <motion.div variants={item} initial="slideOutRight" whileInView="slideInLeft" viewport={{ once: true, amount: 0 }} >
            <img loading='lazy' src={CareImg} alt="care" className='max-w-sm' />
            </motion.div>
            <motion.section variants={careWrap} initial='offscreen' whileInView="onscreen" viewport={{ once: true, amount: 0 }} transition={{ ease: "easeOut", duration: 2 }} className='grid grid-cols-2 md:grid-cols-3 gap-10'>{careDataSet}</motion.section>
       </motion.section>
        </div>
    </motion.section>
  )
}
