import React from 'react'
import TourTable from '../TourTable'
import BookingForm from '../BookingForm'
import {motion} from 'framer-motion'

const Booking = (props) => {
  return (
//Настройки для появления и мсчезания при переходе с/на страницу
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}}
    >
    <div className="booking">
      <h2>БРОНИРОВАНИЕ ТУРОВ</h2>
      <BookingForm item={props.item}/>
      <p className ="descriptionP">Раздел на доработке</p>
      <TourTable/>
      <div className="gap100"></div>
    </div>
    </motion.div>
  )
}

export default Booking