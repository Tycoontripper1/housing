import React from "react";
import SocialIcons from "./SocialData";
import Logo from "../../../assets/images/logo/logo.png";
import {MdLocationOn} from 'react-icons/md'
import {HiPhone} from 'react-icons/hi'
import {AiFillPrinter} from 'react-icons/ai'

export const FooterUp = () => {
  return (
    <section className="flex md:items-center justify-around md:gap-20 lg:justify-between border-b-0.5 border-b-lightBlue1x pt-24 pb-20 flex-col md:flex-row">
      <div className="   md:[30%] lg:w-[40%]  md:pb-0 pb-20">
        <img
          src={Logo}
          alt="logo"
          className="hover:scale-90 transition-all duration-500 ease-in-out cursor-pointer bg-red1x shadow-md max-w-[200px] shadow-red1x"
        />
      </div>
      <div className="md:w-[70%] lg:w-[70%]  w-full space-y-10 text-darkBlue1x dark:text-white">
        <div className="space-y-6 ">
          <a href="#" className="flex items-center gap-3">
            <MdLocationOn className='text-red1x text-2xl' />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </a>
          <div className="flex justify-between w-full md:flex-row flex-col md:gap-0 gap-10 items-center">
            <a
              href="tel:+1234567890"
              className="w-full  flex items-center gap-3"
            >
                <HiPhone className="text-red1x text-2xl" />
              <p>(123) 456-7890</p>
            </a>
            <a href="#" className="w-full flex items-center gap-3">
                <AiFillPrinter className="text-red1x text-2xl" />
              <p>(123) 456-7890</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-4 items-center">
          <p className="opacity-50 text-sm">Social Media</p>
          <div className="items-center md:w-fit w-full  gap-10 gap-y-10 md:gap-y-4 md:gap-4 grid grid-cols-4 md:flex md:flex-row">
            {SocialIcons.map((data) => {
              return (
                <a
                  key={data.id}
                  href={data.link}
                  className="col-span-1 hover:scale-90 transition-all duration-500 ease-in-out"
                >
                  <img src={data.img} alt={data.id} srcset="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
