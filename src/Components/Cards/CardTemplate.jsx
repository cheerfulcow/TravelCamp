import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const CardTemplate = (props) => {  

const [detailed, setDetailed ] = useState(false);
//Функция для раскрытия/скрытия подробной информации о карточке
const showDetailedInfo =()=>{
  setDetailed(!detailed);
}

//Функция для добавления в избранное (пока не работает)
const [favorites, setFavorites] = useState(false);
const onClickFavorites =()=>{
  setFavorites(!favorites);

  const pageMotionPreSet = {
    initial:{opacity:0},
    animate:{opacity:1}
  }

}

// //Добавление товара в избранное (перенести в CardHiking, CardCycling?)
// const onAddFavorites=async(obj)=>{
//   try{
//     const findFavorites = props.favorites.find(objFavorites=>objFavorites.myId===obj.myId)
//     if(findFavorites){ //если уже есть в избранных
//       //удалить из БД избранных товаров
//       axios.delete(`https://643d1b4a6afd66da6aecbd82.mockapi.io/Favorites/${findFavorites.id}`)
//       //удалить из пропсов
//       props.setFavorites((over)=>over.filter(o=>o.myId !== obj.myId))
//     }
//     else{
//       //добавляем карточку в БД избранное
//       const{data}=await axios.post('https://643d1b4a6afd66da6aecbd82.mockapi.io/Favorites', obj)
//       //Добавляем данные карточки в пропсы
//       props.setFavorites([...props.favorites,data])
//     }
//   }
//   catch {
//     alert("Что-то пошло не так. Наши специалисты уже не разбираются с проблемой")
//   }
// }

// --- return --- //
  return (
    <div className="cardTemplate">
    <div>
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
          <Button id="cardButtonDetailedInfo" variant="dark" className="detailedInfoButton" onClick={showDetailedInfo}>Свернуть описание</Button>
          </motion.div>
          <br/>

          </div> 
            :
   //Иначе не показываем / сворачиваем
          <motion.div
          whileHover={{scale:1.05}}>
          <Button variant="dark" className="detailedInfoButton" onClick={showDetailedInfo}>Подробнее о маршруте</Button>
          </motion.div>        
        } 
        
        {(favorites == false) ? 
           <motion.div
           whileHover={{scale:1.05}}>            
          <Button variant="dark" className="detailedInfoButton" onClick={onClickFavorites}>Добавить в избранное</Button>
          </motion.div>
          :
          <motion.div
          whileHover={{scale:1.05}}>
          <Button variant="dark" className="detailedInfoButton" onClick={onClickFavorites}>Удалить из избранного</Button>
          </motion.div>          
        }             
        <motion.div
          whileHover={{scale:1.05}}>
        <Link exact to={'/booking'}>          
        <Button variant="dark" className="detailedInfoButton">Записаться</Button>
        </Link>
        </motion.div>
        
        </div>        
      </Card.Body>
    </Card> 
    </div>  
    </div>    
  )
  
  
}

export default CardTemplate