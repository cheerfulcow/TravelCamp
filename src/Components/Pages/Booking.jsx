import React, { useContext } from 'react'
import TourTable from '../TourTable'
import BookingForm from '../BookingForm'
import {motion} from 'framer-motion'
import { AppContext } from '../../App'

const Booking = (props) => {

  const context=useContext(AppContext)

  return (
//Настройки для появления и мсчезания при переходе с/на страницу
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}}
    >
    <div className="booking">
      <h2>Получить консультацию</h2>  
      <p id="feedbackP">Заполните форму и мы Вам перезвоним </p>    
      <BookingForm item={props.item}/>
      <div className="gap100"></div>
    </div>
    </motion.div>
  )
}

export default Booking