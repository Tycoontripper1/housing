import React from "react";
import Bed from "./../../../assets/images/icons/list/Bed.svg";
import Bath from "./../../../assets/images/icons/list/Shower.svg";
import Size from "./../../../assets/images/icons/list/Size.svg";
import { IoMdBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { BiHash } from "react-icons/bi";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../../Context";

export const ListCards = ({
  img,
  address,
  roomType,
  price,
  NoRooms,
  size,
  NoBaths,
}) => {
  const { darkTheme } = useGlobalContext();
  return (
    <div className="dm shadow-lg rounded-26.62px w-ninetyPercent sm:w-auto max-w-[350px] hover:scale-90 transition-transform ease-in-out duration-500 mx-auto">
      <div>
        <img loading="lazy" src={img} alt="listing" className="w-[350px] h-[300px]" />
        <section className="bg-white text-black dark:bg-black/40 dark:text-white text-left rounded-b-26.62px pt-18px space-y-18px">
          <h1 className="pl-7 pr-5 dm-700 text-lg sm:text-2xl">{address}</h1>
          <div className="pl-7 pr-5">
            <p className="dm-400 text-grey2x sm:text-lg">{roomType} Room</p>
            <p className="dm-700 text-lg sm:text-2xl text-red1x">
              {price}/Month
            </p>
          </div>
          <div className="flex flex-row items-center dm-700 rounded-b-26.62px border-t border-lightGrey3x divide-x divide-lightGrey3x justify-between">
            <div className="text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5">
              {darkTheme ? (
                <IoMdBed className="w-3 sm:w-auto" />
              ) : (
                <img
                  loading="lazy"
                  src={Bed}
                  alt="rooms"
                  className="w-3 sm:w-auto sm:h-auto"
                />
              )}
              <p>{NoRooms}</p>
            </div>
            <div className="text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5">
              {darkTheme ? (
                <FaBath className="w-3 sm:w-auto" />
              ) : (
                <img
                  loading="lazy"
                  src={Bath}
                  alt="shower"
                  className="w-3 sm:w-auto sm:h-auto"
                />
              )}
              <p>{NoBaths}</p>
            </div>
            <div className="text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5">
              {darkTheme ? (
                <BiHash className="w-3 sm:w-auto" />
              ) : (
                <img
                  loading="lazy"
                  src={Size}
                  alt="size"
                  className="w-3 sm:w-auto sm:h-auto"
                />
              )}
              <p>{size}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
