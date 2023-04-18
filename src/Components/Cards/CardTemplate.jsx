import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
      <Card.Img variant="top" src={props.img} />
      <Card.Body> 
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.descriptionShort}</Card.Text>        
        <div className="cardButtons">
{/* При нажатии кнопки будет раскрываться и сворачиваться доп инфа о маршруте */}
        {(detailed == true) ?
  //Если кнопка нажата - раскрываем
          <div>
          <p id="CardTemplateDetailInfo">{props.descriptionFull}</p>
          <h5>Параметры маршрута</h5>
          <p id="CardTemplateDetailInfo">Тип маршрута: {props.tourType}</p>
          <p id="CardTemplateDetailInfo">Продолжительность: {props.duration}</p>
          <p id="CardTemplateDetailInfo">Дистанция: {props.distance}</p>        
          <p id="CardTemplateDetailInfo">Набор высоты: {props.elevation}</p>
          <p id="CardTemplateDetailInfo">Максимальное количество участников в группе: {props.maxPersonInGroup}</p>
          <p id="CardTemplateDetailInfo">Стоимость (малая группа {props.smallGroupQuantity}): {props.priceSmallGroup}</p>
          <p id="CardTemplateDetailInfo">Стоимость (большая группа): {props.priceLargeGroup}</p>
          <br/>
          <p>Быть может, тут ещё будет галерея. Но это не точно</p>
          <br/>
          <Button id="cardButtonDetailedInfo"variant="dark" className="detailedInfoButton" onClick={showDetailedInfo}>Свернуть описание</Button>
          </div>        
            :
   //Иначе не показываем / сворачиваем
          <Button variant="dark" className="detailedInfoButton" onClick={showDetailedInfo}>Подробнее о маршруте</Button>        
        }        
        <br/>
        
        {(favorites == false) ?                
          <Button variant="dark" className="detailedInfoButton" onClick={onClickFavorites}>Добавить в избранное</Button>
          :
          <Button variant="dark" className="detailedInfoButton" onClick={onClickFavorites}>Удалить из избранного</Button> 
        }
        <br/>      
      
        <Link exact to={'/booking'}>          
        <Button variant="dark" className="detailedInfoButton">Записаться</Button>
        </Link>
        </div>        
      </Card.Body>
    </Card> 
    </div>  
    </div>    
  )
  
  
}

export default CardTemplate