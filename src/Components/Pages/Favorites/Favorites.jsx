import React from 'react'
import {motion} from 'framer-motion'
import { AppContext } from '../../../App'
import axios from 'axios'
import CardTemplate from '../../Cards/CardTemplate'
import '../../../App.css';
import FavoritesItem from './FavoritesItem'

const Favorites = (props) => {

//Объявляем context (тут хранятся данные, которые раздавали в App.jsx в AppContext.Provider)
//Если будут ошибки, попробовать использовать useContex
const context=React.createContext(AppContext)

//Сработает при добавлении товара в корзину(из раздела с фаворитами)
const onAddToCart = (obj) =>{
  axios.post('https://643d1b4a6afd66da6aecbd82.mockapi.io/Cart', obj)
  context.setCartItems([...context.cartItems, obj]);
}

//При удалении товара из избранных удаляет его из API раздела избранных
//А также удаляет из контекста
const onDeleteFavorites=(id)=> { 
  axios.delete(`https://643d1b4a6afd66da6aecbd82.mockapi.io/Favorites/${id}`)  
  props.setFavorites((favorites)=>favorites.filter(item=>item.id !==id))  
}
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
     {props.favorites.map(obj =>{
        return(
          <div id="cardFavorite">
          <FavoritesItem 
//Передаем пропсы - все поля объекта из API, + функции
            key={obj.id}
            id={obj.id}
            myId={obj.myId}
            title={obj.title}
            descriptionShort={obj.descriptionShort}
            descriptionFull={obj.descriptionFull}
            tourType={obj.tourType}
            duration={obj.duration}
            distance={obj.distance}
            elevation={obj.elevation}
            maxPersonInGroup={obj.maxPersonInGroup}
            smallGroupQuantity={obj.smallGroupQuantity}
            priceSmallGroup={obj.priceSmallGroup}
            priceLargeGroup={obj.priceLargeGroup}
            img={obj.img}
            onDeleteFavorites={(id)=>{onDeleteFavorites(id)}}
            onAddToCart={(cartObj)=>{onAddToCart(cartObj)}}
            />
            </div>
      )
    })} 
    </div>
    </motion.div>
  )
}

export default Favorites