import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListData from "../list/ListData";
import { Fade } from "react-awesome-reveal";

export const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [RoomType, setRoomType] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageAsset, setImageAsset] = useState('');
  const [update, setUpdate] = useState(ListData)


  const saveDetails = () => {
    
    try {
      if (
        !name ||
        !address ||
        !unit ||
        !city ||
        !RoomType ||
        !state ||
        !price ||
        !description ||
        !imageAsset
        
      ) {
        
        //Show successful toast message
        toast.warning("Required fields can't be empty!!", {
          className: "w-full",
        });
      } else {
        const data = {
          id: `${Date.now()}`,
          name: name,
          address: address,
          NoRoom: unit,
          city: city,
          roomType: RoomType,
          state: state,
          description: description,
          img: imageAsset,
          price: `$${price}`,
        };
        update.push(data)
        
       
        toast.success("Data Uploaded successfully 😊", { className: "w-full" });
        // to clear all input data
        clearData();
        
      }
    } catch (error) {
      console.log(error);
     
    }
  };

  

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImageAsset(URL.createObjectURL(event.target.files[0]));
 }
}


useEffect(() => {
  localStorage.setItem('update', JSON.stringify(update));
}, [update]);



// useEffect(() => {
//   const json = localStorage.getItem("update")
//   const savedUpdate = JSON.parse(json)
//   if(savedUpdate){
//     setUpdate(savedUpdate)
  
//   }
// }, []);

  const clearData = () => {
    setName("");
    setAddress("");
    setUnit("");
    setCity("Select City");
    setState("Select State");
    setRoomType("Select Room Type");
    setPrice("");
    setDescription("");
    setImageAsset(null);
  };

  const formWrap = {
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
        delayChildren: 5,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };
  return (
    <>
      <ToastContainer />
      <section className="space-y-9">
        <h1 className="inter inter-500 text-center text-lg sm:text-2xl">
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </h1>
        <motion.form
          id="myForm"
          variants={formWrap}
          initial="slideDown"
          whileInView="slideUp"
          viewport={{ once: true, amount: 0 }}
          className="pt-11 px-5 sm:px-16 pb-14 bg-white text-black dark:bg-slate-900 dark:text-lightGrey1x  shadow-2xl rounded-ten"
        >
          <h1 className="text-red1x poppins poppins-700 text-xl sm:text-3xl text-center">
            Add A New Property
          </h1>
          <Fade>
          <section className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 pt-8 sm:pt-16 gap-4 sm:gap-10">
            
            <div className="flex flex-col gap-4 items-start col-span-1">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                Name
              </p>
              <label htmlFor="name" className="relative w-full">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="peer autofill:bg-black focus:outline-red1x w-full border focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm bg-lightGrey2x border-lightGrey1x text-grey4x dark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x  px-5 py-3"
                />
                <p className="absolute top-fiftyPercent left-5 -translate-y-fiftyPercent text-sm text-transparent peer-focus:text-red1x peer-focus:top-0 px-2 py-0.5 peer-focus:bg-white dark:peer-focus:bg-slate-900 peer-focus:text-xs transition-transform duration-500 place-holder">
                  Enter Name
                </p>
              </label>
            </div>
            <div className="flex flex-col gap-4 items-start col-span-1">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                Address
              </p>
              <label htmlFor="address" className="relative w-full">
                <input
                  required
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address"
                  className="peer autofill:bg-black focus:outline-red1x w-full border focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm bg-lightGrey2x border-lightGrey1x text-grey4x dark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x px-5 py-3"
                />
                <p className="absolute top-fiftyPercent left-5 -translate-y-fiftyPercent text-sm text-transparent peer-focus:text-red1x peer-focus:top-0 px-2 py-0.5 peer-focus:bg-white dark:peer-focus:bg-slate-900 peer-focus:text-xs transition-transform duration-500 place-holder">
                  Enter Address
                </p>
              </label>
            </div>
            <div className="flex flex-col gap-4 items-start col-span-1">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                Unit Number
              </p>
              <label htmlFor="unit" className="relative w-full">
                <input
                  required
                  type="text"
                  name="unit"
                  id="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="Enter Unit"
                  className="peer autofill:bg-black focus:outline-red1x w-full border focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm bg-lightGrey2x border-lightGrey1x text-grey4x dark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x px-5 py-3"
                />
                <p className="absolute top-fiftyPercent left-5 -translate-y-fiftyPercent text-sm text-transparent peer-focus:text-red1x peer-focus:top-0 px-2 py-0.5 peer-focus:bg-white  dark:peer-focus:bg-slate-900 peer-focus:text-xs transition-transform duration-500 place-holder">
                  Enter Unit
                </p>
              </label>
            </div>
            <div className="flex flex-col gap-4 items-start col-span-1">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                City
              </p>
              <label htmlFor="city" className="relative w-full">
                <select
                  required
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  id="city"
                  className="peer focus:outline-red1x border bg-lightGrey2x border-lightGrey1x text-grey4x dark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x h-12 focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm px-5 py-3 w-full min-h-fit"
                >
                  <option value="Select City" selected disabled>
                    Select City
                  </option>
                  <option value="Bayview">Bayview</option>
                  <option value="Chinatown">Chinatown</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-4 items-start col-span-1">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                State
              </p>
              <label htmlFor="state" className="relative w-full">
                <select
                  required
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  id="state"
                  className="peer focus:outline-red1x border bg-lightGrey2x border-lightGrey1x text-grey4x dark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x h-12 focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm px-5 py-3 w-full min-h-fit"
                >
                  <option value="Select State" selected disabled>
                    Select State
                  </option>
                  <option value="Bayview">San Francisco</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-4 items-start col-span-1">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                Room Type
              </p>
              <label htmlFor="roomType" className="relative w-full">
                <select
                  name="room-type"
                  value={RoomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  id="roomType"
                  className="peer focus:outline-red1x border bg-lightGrey2x border-lightGrey1x text-grey4x dark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x h-12 focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm px-5 py-3 w-full min-h-fit"
                >
                  <option value="Select Room Type" selected disabled>
                    Select Room Type
                  </option>
                  <option value="Private">Private</option>
                  <option value="Shared">Shared</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-4 items-start col-span-1">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                Price
              </p>
              <label htmlFor="price" className="relative w-full">
                <input
                  required
                  type="text"
                  name="price"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter Price"
                  className="peer autofill:bg-black focus:outline-red1x w-full border focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm bg-lightGrey2x border-lightGrey1x text-grey4xdark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x px-5 py-3"
                />
                <p className="absolute top-fiftyPercent left-5 -translate-y-fiftyPercent text-sm text-transparent peer-focus:text-red1x peer-focus:top-0 px-2 py-0.5 peer-focus:bg-white dark:peer-focus:bg-slate-900  peer-focus:text-xs transition-transform duration-500 place-holder">
                  Enter Price
                </p>
              </label>
            </div>
            <div className="flex flex-col gap-4 items-start col-span-1">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                Room Type
              </p>
              <label htmlFor="roomType" className="relative w-full">
                <select
                  required
                  name="room-type"
                  value={RoomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  id="roomType"
                  className="peer focus:outline-red1x border bg-lightGrey2x border-lightGrey1x text-grey4x dark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x h-12 focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm px-5 py-3 w-full min-h-fit"
                >
                  <option value="Select Room Type" selected disabled>
                    Select Room Type
                  </option>
                  <option value="Private">Private</option>
                  <option value="Shared">Shared</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-4 items-start col-span-2 lg:col-span-3">
              <p className='flex-form-label after:content-["*"] after:ml-0.5 after:text-red1x'>
                Description
              </p>
              <label htmlFor="desc" className="relative w-full">
                <textarea
                  required
                  cols="30"
                  rows="6"
                  name="desc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="desc"
                  placeholder="Enter Description"
                  className="peer focus:outline-red1x resize-none w-full border focus-within:placeholder:text-transparent rounded-five inter inter-400 text-sm bg-lightGrey2x border-lightGrey1x text-grey4x dark:bg-slate-700 dark:border-slate-400 dark:text-lightGrey4x px-5 py-3"
                />
                <p className="absolute top-fiftyPercent left-5 -translate-y-fiftyPercent text-sm text-transparent peer-focus:text-red1x peer-focus:top-0 px-2 py-0.5 peer-focus:bg-white  dark:peer-focus:bg-slate-900 peer-focus:text-xs transition-transform duration-500 place-holder">
                  Enter Description
                </p>
              </label>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col gap-4 items-start w-full">
              <h1>Upload Photos</h1>
              <label
                htmlFor="listingImg"
                id="listingImgLabel"
                className="w-full py-7 cursor-pointer relative flex flex-col items-center border border-dashed border-red1x rounded-ten"
              >
                <input
                  required
                  type="file"
                  multiple
                  id="listingImg"
                  onChange={onImageChange}
                  name="listing-img"
                  className="w-full bg-red-400 absolute top-fiftyPercent -translate-y-fiftyPercent h-full opacity-0"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <h1 className="poppins poppins-700">
                    Drag your images here, or{" "}
                    <span className="poppins-500 text-red1x">browse</span>
                  </h1>
                  <p className="text-sm">Supported: JPG, JPEG, PNG</p>
                </div>
              </label>
            </div>
            {/* <div id="showFiles" className={`${imageLength ? 'h-20' : 'h-0'} gap-5 grid sm:grid sm:grid-cols-2 lg:grid-cols-3`}>
                <div className="show-img cols-span-1 rounded-ten">
                    <img src={image} alt=""  classList="object-cover"/>
                </div>
            </div> */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 pt-5 inter inter-500 text-lg sm:text-xl flex items-center justify-center">
              <button
                onClick={saveDetails}
                type="button"
                id="submitListing"
                className="bg-red1x hover:bg-red1x/90 hover:text-white active:translate-y-7 hover:ring-offset-white hover:ring-offset-4 hover:shadow-md transition-all duration-500 ease-in-out hover:ring hover:ring-red1x text-white rounded-ten py-4 sm:py-5 w-full sm:w-3/5 "
              >
                Add New Property
              </button>
            </div>
           
          </section>
          </Fade>
        </motion.form>
      </section>
    </>
  );
};
