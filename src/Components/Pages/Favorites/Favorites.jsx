import React from 'react'
import {motion} from 'framer-motion'


const Favorites = () => {
  return (
//Настройки для появления и исчезания при переходе с/на страницу
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}}
    >
    <div>
      <h3>Мои избранные туры</h3>
      <p>Раздел в разработке</p>
    </div>
    </motion.div>
  )
}

export default Favorites