import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import {motion} from 'framer-motion'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';

const FavoritesItem = (props) => {

  const context=React.useContext(AppContext)

  const [added, setAdded] = useState(false);
  const [detailed, setDetailed ] = useState(false);

  // const[bookingTour, setBookingTourTitle] = useState('');

//Функция для раскрытия/скрытия подробной информации о карточке
const showDetailedInfo =()=>{
  setDetailed(!detailed);
} 

//При нажатии на кнопку "Записаться", в форму подставятся тайтл и тип маршрута
const onClickBooking = () => {  
  let bookingProps = props;   
  context.setBookingTourTitle(bookingProps);  
}

//Функция добавления в корзину. Disable.Думаю, переедет в Booking
  // const onClickAddToCart = () => {
  //   setAdded(!added);
  //   let id = props.id;
  //   let myId = props.myId;
  //   let title = props.title;
  //   let descriptionShort = props.descriptionShort;
  //   let descriptionFull=props.descriptionFull;
  //   let tourType=props.tourType;
  //   let duration=props.duration;
  //   let distance=props.distance;
  //   let elevation=props.elevation;
  //   let maxPersonInGroup=props.maxPersonInGroup;
  //   let smallGroupQuantity=props.smallGroupQuantity;
  //   let priceSmallGroup=props.priceSmallGroup;
  //   let priceLargeGroup=props.priceLargeGroup;
  //   let img=props.img;
  //   props.onAddToCart({
  //     id, myId, title, descriptionShort, descriptionFull, tourType, duration, distance,
  //     elevation, maxPersonInGroup,smallGroupQuantity, priceSmallGroup, priceLargeGroup, img})      
  // }
  
  //При нажатии на кнопку удалить, вызывает функцию onDeleteFavorites из Favorites 
  //и передает в неё id удаляемого товара
  const onClickDelete = () => {
    props.onDeleteFavorites(props.id)
  }

  return (
    <div >
      <Card>
      <Card.Img variant="top"       
      src={props.img} />
      <Card.Body> 
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.descriptionShort}</Card.Text>        
        <div className="cardButtons">
{/* При нажатии кнопки будет раскрываться и сворачиваться доп инфа о маршруте */}
        {(detailed == true) ?
  //Если кнопка нажата - раскрываем подробную инфу о туре (+ анимация текста)
        <div>
{/* Плавное появление текста. Для каждого следующего параграфа увеличивается задержка */}
        <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 0.2,duration: 1}}>
          {props.descriptionFull}
          </motion.p>

          <motion.h5 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 0.6,duration: 1}}>
           Параметры маршрута
          </motion.h5> 

          <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 0.8,duration: 1}}>
         Тип маршрута: {props.tourType}
          </motion.p>

          <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 1.0,duration: 1}}>
          Длительность: {props.duration}
          </motion.p>

          <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 1.2,duration: 1}}>
          Дистанция: {props.distance}
          </motion.p>

          <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 1.4, duration: 1}}>
          Набор высоты: {props.elevation}
          </motion.p>

          <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 1.6,duration: 1}}>
          Максимальное количество участников в группе: {props.maxPersonInGroup}
          </motion.p>

          <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 1.8,duration: 1}}>
          Стоимость (малая группа {props.smallGroupQuantity}): {props.priceSmallGroup}
          </motion.p>

          <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 2.0,duration: 1}}>
          Стоимость (большая группа): {props.priceLargeGroup}
          </motion.p>

          <br/>
          <motion.p id='CardTemplateDetailInfo'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 2.2,duration: 1}}>
          Быть может, тут ещё будет галерея. Но это не точно
          </motion.p> 

          <br/>
          <motion.div
          whileHover={{scale:1.05}}>
          <Button id="cardButtonDetailedInfo" variant="dark" className="detailedInfoButton" 
          onClick={showDetailedInfo}>Свернуть описание</Button>
          </motion.div>
          <br/>

          </div> 
            :
   //Иначе не показываем / сворачиваем
          <motion.div
          whileHover={{scale:1.05}}>
          <Button variant="dark" className="detailedInfoButton" 
          onClick={showDetailedInfo}>Подробнее о маршруте</Button>
          </motion.div>        
        }         
         
           <motion.div
           whileHover={{scale:1.05}}>            
          <Button variant="dark" className="detailedInfoButton" 
          onClick={onClickDelete}>Удалить из избранного</Button>
          </motion.div>

          <motion.div
          whileHover={{scale:1.05}}>
          <Link exact to={'/booking'}>          
          <Button variant="dark" className="detailedInfoButton"
          onClick={onClickBooking}>
          Записаться</Button>
          </Link>
          </motion.div>
          
          {/* <motion.div
          whileHover={{scale:1.05}}>
          <Button variant="dark" className="detailedInfoButton" 
          onClick={onClickAddToCart}> { added ?
            'Уже у вас в корзине'
            :
            'Добавить в корзину'
          } </Button>
          </motion.div> */}

        </div>        
      </Card.Body>
    </Card> 
    </div>
  )
}

export default FavoritesItem