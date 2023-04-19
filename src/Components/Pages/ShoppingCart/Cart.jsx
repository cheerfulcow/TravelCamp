import React from 'react'
import {motion} from 'framer-motion'



const Cart = (props) => {
  return (
    <motion.div 
//Настройки для появления и мсчезания при переходе с/на страницу
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}}
    >
    <div>
      <h3>Моя корзина</h3>
      <h4>Раздел в разработке</h4>
    </div>
    </motion.div>
  )
}

export default Cart