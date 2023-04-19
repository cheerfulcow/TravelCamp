import React from 'react'
import {motion} from 'framer-motion'


const About = () => {
  return (
//Настройки для появления и мсчезания при переходе с/на страницу
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}}
    >
    <div className="aboutDiv">
      <h2>О НАС</h2>
      <img src="../img_about/about_1.jpg" alt='тут должны быть картинка'></img>
      <p className="descriptionP">Описание в разработке </p>
      <div className="gap100"></div>
    </div>
    </motion.div>
  )
}

export default About