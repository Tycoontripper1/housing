import React, {useState, useEffect} from 'react'
import { Header } from '../../components/header/Header'
import { motion } from 'framer-motion'
import { MapContainer,  TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "./../../../node_modules/leaflet/dist/leaflet.css";
import { Icon } from 'leaflet'
// import $ from 'jquery';
import { BiSearch } from "react-icons/bi";
import SanfranAreas from '../../data/SanFranAreas';


const RecenterAutomatically = ({position}) => {
  const map = useMap();
  useEffect(() => {
  map.setView(position, 13);
  map.flyTo(position, 13)
  }, [position]);
  return null;
}

export const Hero = () => {


  const [position, setPosition] = useState([37.776667, -122.277778])
  const [nValue, setNValue] = useState('37.776667, -122.277778')
  const [area, setArea] = useState('Alameda (Island)')
  



  // const handleSelect = () =>{
  //     let newValue = nValue.split(',')
  //     setPosition(newValue)

  //    let newArea =  $("#neighborhood option:selected").text();
  //     setArea(newArea)
  // }
  const text = {
    slideDown: { 
        opacity: 0,
        y:150,
        scale:0,
        },
    slideUp: { 
        opacity: 1, 
        y:0,
        scale:1,
        transition: {
        type: "spring",
        bounce: 0.4,
        duration:5,
        }
        },
}

const up = {
  slideDown: { 
      opacity: 0,
      y:100,
      },
  slideUp: { 
      opacity: 1, 
      y:0,
      transition: {
      type: "spring",
      bounce: 0.4,
      duration:5,
      }
      },
}


  return (
    <div className='hero relative text-white dark:text-white '>
      <div className='absolute z-10 h-full w-full bg-black/30 dark:bg-black/70 '></div>
      <div className=' md:px-12 lg:px-28 px-5 relative z-20 top-0 left-0 '>
      <Header />
      </div>
      <section className='md:px-12 lg:px-28 px-6 md:py-24 pb-40 relative py-12 z-10 h-full w-full flex  lg:flex-row flex-col gap-10 items-center '>
      <div className='lg:w-[40%] '>
                <motion.h1 variants={text} initial="slideDown" whileInView="slideUp" viewport={{once:true, amount:0}} className={`inter font-bold inter-700 ${''} text-2xl sm:text-3xl lg:text-5xl`}>The most affordable place to stay in the san franciso bay area</motion.h1>
            </div>
            <div className='md:w-[40%] flex justify-center   relative w-full mx-auto items-center'>
                <div className='w-full poppins poppins-500 text-sm flex flex-col items-center justify-center'>
                <motion.div variants={up} initial="slideDown" whileInView="slideUp" viewport={{once:true, amount:0}} id="map" className="rounded-ten">
                        <MapContainer center={position} zoom={18} scrollWheelZoom={false} icon={new Icon({iconUrl: './assets/images/icons/leaflet/images/marker-icon.png', iconSize:[20, 36], iconAnchor:[20, 36]})} className="xxs:w-60 xxs:h-60 xs:w-72 xs:h-72 w-80 h-80 sm:h-96 sm:w-96 max-w-full rounded-ten">
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Get property in the {area} area. <br /> Easily with <span className='up-red1x'>MLC</span>.
                                </Popup>
                            </Marker>
                            <RecenterAutomatically position={position}/>                    
                        </MapContainer>
                    </motion.div>
                    <motion.div variants={up} initial="slideDown" whileInView="slideUp" viewport={{once:true, amount:0}} className='flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-0 px-2 xxs:w-60 xs:w-72 w-80 max-w-sm sm:w-96 sm:px-5 py-4 mt-6 col-span-1 bg-white text-black dark:bg-black dark:text-white border border-black/10 rounded-ten'>
                        <select name="types" id="types" className='cursor-pointer px-5 py-4 h-14 border bg-lightGrey2x border-lightGrey1x dark:bg-slate-700 dark:border-slate-400 rounded-ten sm:rounded-l-ten sm:rounded-r-none'>
                            <option value="All Type" disabled selected>All Type</option>
                        </select>
                        <select id='neighborhood' onChange={(e)=>setNValue(e.target.value)} name="neighborhood" className='cursor-pointer px-5 h-14 py-4 rounded-ten sm:rounded-none sm:w-44 border bg-lightGrey2x border-lightGrey1x dark:bg-slate-700 dark:border-slate-400 '>
                            {/* <option value="Neighborhood" disabled selected>Neighborhood</option> */}
                            {SanfranAreas.map((areas)=>{
                               return <option value={areas.coordinates}>{areas.name}</option>
                            })}
                        </select>
                        <button  type='button' className='bg-blue1x rounded-ten sm:rounded-l-none sm:rounded-r-ten py-2 sm:py-0 px-5 flex items-center justify-center'>
                            <p className="hidden">Search</p>
                            <BiSearch className='h-[20px] w-[21px]' />
                        </button>
                    </motion.div>
                </div>
            </div>
      </section>
      
       
    </div>
  )
}
