
import Bedroom from './../../../assets/images/flex/bedroom.png'
import Happy from './../../../assets/images/flex/happy-man.png'
import BathStuff from './../../../assets/images/flex/bathstuff.png'
import Group from './../../../assets/images/flex/group.png'

export const SearchImages = () => {
  return (
    <section className=' text-white text-lg sm:text-2xl'>
    <div className='flex py-4 lg:py-2 text-center justify-center lg:grid grid-cols-5 gap-x-4 gap-y-1 items-end'>
        <div className='w-fiftyPercent sm:w-auto row-start-1 row-end-7 col-span-3 col-start-1 col-end-4 h-fit flex justify-end items-end'>
            <div className='w-fit relative hover:scale-90 transition-transform ease-in-out duration-500'>
                <img src={Bedroom} alt="bedroom" className='max-h-80 sm:w-auto'/>
                <h1 className='absolute top-7 w-full left-fiftyPercent -translate-x-fiftyPercent z-20'>Flexible Leases</h1>
            </div>
        </div>
        <div className='w-fiftyPercent lg:w-auto flex row-start-2 col-span-2 col-start-4 col-end-6 row-end-7 items-end h-fit'>
            <div className='w-fit relative hover:scale-90 transition-transform ease-in-out duration-500'>
                <img src={Happy} alt="happy" className='w-full'/>
                <h1 className='absolute top-7 w-full left-fiftyPercent -translate-x-fiftyPercent z-20'>7-Day Happiness Guaranteed</h1>
            </div>
        </div>
    </div>
    <div className='flex py-4 lg:py-2 text-center justify-center lg:grid grid-cols-2 gap-x-4 lg:gap-x-0 lg:gap-y-0 gap-y-1 lg:place-items-center'>
        <div className='w-fiftyPercent sm:w-auto row-start-4 row-end-6 col-start-1 col-end-1 h-fit flex justify-end items-end xl:translate-x-4'>
            <div className='w-fit relative hover:scale-90 transition-transform ease-in-out duration-500'>
                <img src={BathStuff} alt="bathstuff" className='max-h-60'/>
                <h1 className='absolute top-10 w-full left-fiftyPercent -translate-x-fiftyPercent z-20'>Monthly House Cleaning</h1>
            </div>
        </div>
        <div className='w-fiftyPercent lg:w-auto flex row-start-4 col-start-2 col-end-2 row-end-7 items-end h-fit'>
            <div className='w-fit relative hover:scale-90 transition-transform ease-in-out duration-500'>
                <img src={Group} alt="group" className=''/>
                <h1 className='absolute top-10 w-full left-fiftyPercent -translate-x-fiftyPercent z-20'>Choose Your Own Roommate</h1>
            </div>
        </div>
    </div>
</section>
  )
}
