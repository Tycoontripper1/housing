

const ListSkeleton = () => {

    

  return (
    <div className='w-ninetyPercent min-w-[90%] sm:min-w-full sm:w-auto max-w-[350px] mx-auto rounded-26.62px shadow-lg'>
        <div className='h-80 w-full min-w-full bg-gray-300 skeleton rounded-t-26.62px'></div>
        <div className='bg-white text-black dark:bg-black/40 dar:text-white rounded-b-26.62px space-y-5 h-fit w-full min-w-full pt-5'>
            <div className='px-5'>
                <div className='h-10 w-eightyFivePercent bg-gray-300 skeleton rounded-lg'></div>
            </div>
            <div className='py-4 px-5'>
                <div className='space-y-3'>
                    <div className='w-fortyPercent h-4 bg-gray-300 skeleton rounded-lg'></div>
                    <div className='w-sixtyPercent h-4 bg-gray-300 skeleton'></div>
                </div>
            </div>
            <div className='divide-x  rounded-b-26.62px  border-t grid grid-cols-3'>
                <div className='py-6 col-span-1 bg-white text-black dark:bg-black/40 dark:text-white flex flex-row items-center justify-center gap-2 rounded-bl-26.62px'>
                    <div className='w-4 bg-gray-300 skeleton h-4 rounded-fiftyPercent'></div>
                    <div className='w-6 bg-gray-300 skeleton h-4'></div>
                </div>
                <div className='py-6 col-span-1 bg-white text-black dark:bg-black/40 dark:text-white flex flex-row items-center rounded-lg justify-center gap-2'>
                    <div className='w-4 bg-gray-300 skeleton h-4 rounded-fiftyPercent'></div>
                    <div className='w-6 bg-gray-300 skeleton h-4'></div>
                </div>
                <div className='py-6 col-span-1 bg-white text-black dark:bg-black/40 dark:text-white  flex flex-row items-center justify-center gap-2 rounded-br-26.62px'>
                    <div className='w-4 bg-gray-300 skeleton h-4 rounded-fiftyPercent'></div>
                    <div className='w-6 bg-gray-300 skeleton h-4'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListSkeleton
