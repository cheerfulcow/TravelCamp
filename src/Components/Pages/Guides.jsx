import React from 'react'
import {motion} from 'framer-motion'


const Guides = () => {
  return (
//Настройки для появления и мсчезания при переходе с/на страницу
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}}
    >
    <div className="ourGuides">
      <h2>НАШИ ГИДЫ</h2>
      <p className="descriptionP">Раздел в разработке</p>
      <div className="gap100"></div>
    </div>
    </motion.div>
  )
}

export default Guides