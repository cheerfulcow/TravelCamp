import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderMain from '../SliderMain';
import Footer from '../Footer';
import About from './About';
import Directions from './Directions';
import Guides from './Guides';
import Booking from './Booking';
import {motion} from 'framer-motion'


const Home = (props) => {
  return (
//Настройки для появления и мсчезания при переходе с/на страницу 
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}}
    >   
    <div>     
     <SliderMain item={props.item}/>     
     <About/>          
     <Directions item={props.item}/>     
     <Guides/> 
     <Booking item={props.item}/>           
     <div className="gap300"></div>
     <Footer/>     
    </div>
    </motion.div>
  )
}

export default Home