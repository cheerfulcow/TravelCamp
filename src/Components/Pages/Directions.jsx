import React from 'react'
import ActivityTypeTab from '../ActivityTypeTab';
import {motion} from 'framer-motion'


const Directions = (props) => {
  return (
//Настройки для появления и мсчезания при переходе с/на страницу
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}} 
    >
    <div className="directions">
    <h2>Наши туры</h2>
    <p className="descriptionP">Данные подтягиваются с mocAPI и сортируются по типу активности</p>  
     <ActivityTypeTab item={props.item}/>
     <div className="gap100"></div>
  </div>
  </motion.div>
  )
}

export default Directions