import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderMain from '../SliderMain';
import Footer from '../Footer';
import About from './About';
import Directions from './Directions';
import Guides from './Guides';
import Booking from './Booking';




const Home = (props) => {
  return (
    <div>     
     <SliderMain item={props.item}/>     
     <About/>          
     <Directions item={props.item}/>     
     <Guides/> 
     <Booking item={props.item}/>           
     <div className="gap300"></div>
     <Footer/>     
    </div>
  )
}

export default Home