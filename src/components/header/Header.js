import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import logo from '../../assets/images/logo/logo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";

export const Header = () => {
  const {setDarkTheme,darkTheme}= useGlobalContext()
  const mobileNav = useRef();

  const switchActive = (id) => {
    
    // sets active navigation menu
    document.querySelectorAll(".nav-items li").forEach((item) => {
      // remove active from all navigations
      item.classList.remove("active");
    });
    // Set active to the clicked item
    document.getElementById(id).classList.add("active");
    
  };

  // Showing or hide navigation for mobile
  const toggleNav = () => {
    mobileNav.current.classList.toggle("w-0");
  };
  return (
    <section>
      <div
        ref={mobileNav}
        className="h-screen w-[300px] bg-white dark:bg-black  dark:text-white text-black z-[9999] fixed top-0 right-0 pt-8  transition-all w-0 overflow-hidden"
      >
        <ImCancelCircle
          onClick={toggleNav}
          className="absolute top-8 right-6 w-[26px] h-[26px] dark:text-white"
        />
        
        <ul className="px-[30px]">
          <li onClick={toggleNav} data-id="home" className="mobile-nav hover:text-red1x">
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleNav} data-id="marketplace" className="mobile-nav hover:text-red1x">
            <Link to="/marketplace">Landlord</Link>
          </li>
          <li onClick={toggleNav} data-id="auctions" className="mobile-nav hover:text-red1x">
            <Link to="/auctions">Tenants</Link>
          </li>
          <li onClick={toggleNav} data-id="drop" className="mobile-nav hover:text-red1x">
            <Link to="/drop">Contact Us</Link>
          </li>
        </ul>
         {/* NAV ICONS */}
         <div className="border px-[30px]  border-white dark:border-slate-600 rounded-full">
          <button className="p-2 md:py-2 md:px-4 bg-white rounded-l-full dark:bg-black">
            <BiSearch onClick={() => setDarkTheme(false)} />
          </button>
          <button className="p-2 md:py-2 md:px-4 rounded-r-full bg-white/80 dark:bg-slate-600 dark:border-slate-600">
            <BsCart3 onClick={() => setDarkTheme(true)} />
          </button>
        </div>
        
      </div>

      <div className="py-6 md:py-6 md:px-0 border-b  overflow-hidden w-full justify-between flex  mx-auto items-center  ">
        {/* hambugger button */}
       
        <div>
          {/* main header */}
          <Link to='/'>
         
          <div className="max-w-28 ">
          <img src={logo} alt="logo" />
          </div>
       
          </Link>
        </div>

        {/* NAV */}
        <ul className="md:flex gap-8 hidden nav-items ">
          <li onClick={() => switchActive("home")} className="active hover:text-red1x transition-colors duration-500 " id="home">
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => switchActive("marketplace")} id="marketplace" className="hover:text-red1x transition-colors duration-500">
            <Link to="/marketplace">Landlord</Link>
          </li>
          <li onClick={() => switchActive("auctions")} id="auctions"className="hover:text-red1x transition-colors duration-500">
            <Link to="/auctions">Tenants</Link>
          </li>
          <li onClick={() => switchActive("drop")} id="drop"className="hover:text-red1x transition-colors duration-500">
            <Link to="/drop">Contact Us</Link>
          </li>
        </ul>

        {/* NAV ICONS */}
               {/* NAV ICONS */}
               <div className="border md:block hidden  border-white dark:border-slate-600 rounded-full">
          <button className="p-2 md:py-2 md:px-4 bg-white rounded-l-full dark:bg-black">
            <BiSearch onClick={() => setDarkTheme(false)} />
          </button>
          <button className="p-2 md:py-2 md:px-4 rounded-r-full bg-white/80 dark:bg-slate-600 dark:border-slate-600">
            <BsCart3 onClick={() => setDarkTheme(true)} />
          </button>
        </div>
        <div className=" md:hidden text-3xl" onClick={toggleNav}>
          <AiOutlineMenu />
        </div>

      </div>
    </section>
  );
};

 
