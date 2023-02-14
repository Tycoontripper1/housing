import React, { useState, useEffect, useRef } from "react";
import { ListCards } from "./ListCards";
import ListData from "./ListData";
import ListSkeleton from "./LiistSkeleton";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Pagination from "./Pagination";

export const List = () => {
  const [listLength, setListLength] = useState(0);
  const [rows, setRows] = useState(6);
  // State to keep track if show all products or first 9 and hide the show more button

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [onScreen, setonScreen] = useState(false);

  const listingsRef = useRef();

  useEffect(() => {
    setListLength(ListData.length);
  }, [listLength]);

  const jumpTo = (anchor_id) => {
    var url = window.location.href;               //Saving URL without hash.
    window.location.href = "#"+anchor_id;                 //Navigate to the target element.
    window.history.replaceState(null,null,url);   //method modifies the current history entry.
}

const paginate = (page) =>{
    setLoading(true)
    setTimeout(() => {
        setCurrentPage(page)
        setLoading(false)
    }, 1000);
    let pageBtns = document.querySelectorAll('.page-nav')
    for (let i = 0; i < pageBtns.length; i++) {
        pageBtns[i].classList.remove('active-page')
        }
        pageBtns[page-1].classList.add('active-page')
    
        // let listTop = $('#listings').offset().top
        // alert(listTop)
        jumpTo('listings')
}



//   to show 6 items alone on itervervals using .slice(start, end)
  const start = (currentPage - 1) * rows;
  const end = start + rows;
  const display = ListData.slice(start, end);
  const listDataSet = display.map((data) => {
    return (
      <ListCards
        key={data.id}
        id={data.id}
        img={data.img}
        address={data.address}
        roomType={data.roomType}
        price={data.price}
        NoRooms={data.NoRooms}
        NoBaths={data.NoBaths}
        size={data.size}
      />
    );
  });

  // updating the skeleton loader
  let templates = [];
  for (let i = 0; i < rows; i++) {
    templates.push(i);
  }

// to show all 16 list items 
  const showAll = () => {
    setLoading(true);
    setCurrentPage(1);
    if (rows === listLength) {
      setRows(6);
    } else {
      setRows(listLength);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // to navigate up the list evrytime it is clicked

  const observer = new IntersectionObserver(
    ([entry]) => setonScreen(entry.isIntersecting)
  )

useEffect(() => {
    observer.observe(listingsRef.current)
    return () => {
        observer.disconnect()
      } 
}, [onScreen])



  const listingWrap = {
    slideDown: {
      opacity: 0,
      y: 150,
    },
    slideUp: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 5,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <section
      id="listings"
      className="bg-grey1x text-black dark:bg-gray-900 dark:text-lightGrey1x pt-14 pb-18 px-5 sm:px-10 lg:px-28"
    >
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between sm:items-center">
        <h1 className="inter inter-800 text-2xl sm:text-3xl lg:text-4xl capitalize">
          <span className="border-b-4 border-red1x">list </span>of properties
        </h1>
        <button
          onClick={() => {
            showAll();
          }}
          className="man-r man-r-500 w-fit self-end hover:scale-90 hover:ring hover:ring-red1x hover:ring-offset-2 hover:bg-white hover:text-red1x transition-all ease-in-out duration-500 text-sm sm:text-base bg-red1x py-3 px-4 sm:py-6 sm:px-8 text-white"
        >
          {rows === listLength
            ? "View Fewer Properties"
            : "View All Properties"}
        </button>
      </div>
      <div className="inter text-sm text-right pt-4">
        Viewing {start + 1} - {listLength >= end ? end : listLength} of{" "}
        {listLength} Properties
      </div>
      <motion.section
        variants={listingWrap}
        initial="slideDown"
        whileInView="slideUp"
        viewport={{ once: true, amount: 0 }}
        ref={listingsRef}
        className="pt-14 pb-18 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {loading
          ? templates.map((template) => {
              return <ListSkeleton key={template} />;
            })
          : listDataSet}
        <div
          className={`fixed bottom-5 right-5 animate-bounce z-250 group items-center justify-center ${
            onScreen ? "flex" : "hidden"
          }`}
          id="navToListingTop"
        >
          <a
            href="#listings"
            className="flex flex-row gap-3 items-center justify-center h-fit"
          >
            {/* <p>{onScreen ? 'OnScreen' : 'Offscreen'}</p> */}
            <p className="text-center text-xs hidden group-hover:block">
              To Listings Top
            </p>
            <BsFillArrowUpCircleFill className="text-red1x w-6 h-6"  />
          </a>
        </div>
      </motion.section>
      <section>
        <Pagination itemLength={listLength} rows={rows} currentPage={currentPage} paginate={paginate}/>
    </section>
    </section>
  );
};
