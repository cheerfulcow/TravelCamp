import Button from 'react-bootstrap/Button';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const SliderMain = (props) => {
  return (
    <div className='carouselDiv'>
    <Carousel>
      <Carousel.Item interval={10000}>        
      <img 
          className="d-block w-100"
          src="./img_main/main_1.jpg"
          alt="Second slide"
        /> 
         <Carousel.Caption>
          <h3 className='carouselH3'>Видовые пешеходные маршруты по горной местности</h3>
          <div> 
          <Link exact to={'/booking'}>
            <Button variant="dark" className='mx-6'>Связаться с нами</Button>                  
          </Link>
          <Link exact to={'/directions'}>          
            <Button variant="dark">Наши туры</Button>                    
          </Link> 
          </div>
                          
        </Carousel.Caption>           
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src="./img_main/main_2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='carouselH3'>Пешеходные маршруты в предгорье</h3>
          <Link exact to={'/booking'}>
            <Button variant="dark" className='mx-6'>Связаться с нами</Button>
          </Link>
          <Link exact to={'/directions'}>
            <Button variant="dark">Наши туры</Button>
          </Link>           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src="./img_main/main_3.jpg"
          alt="Third slide"
        />    
        <Carousel.Caption>
          <h3 className='carouselH3'>Многодневные походы в горы</h3>
          <Link exact to={'/booking'}>
            <Button variant="dark" className='mx-6'>Связаться с нами</Button>
          </Link>
          <Link exact to={'/directions'}>
            <Button variant="dark">Наши туры</Button>
          </Link> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src="./img_main/main_4.jpg"
          alt="Third slide"
        />    
        <Carousel.Caption>
          <h3 className='carouselH3'>Экологические тропы</h3>
          <Link exact to={'/booking'}>
            <Button variant="dark" className='mx-6'>Связаться с нами</Button>
          </Link>
          <Link exact to={'/directions'}>
            <Button variant="dark">Наши туры</Button>
          </Link> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="gap100"></div>
    </div>
  )
}

export default SliderMain