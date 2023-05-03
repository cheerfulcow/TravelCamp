import React from 'react'
import {motion} from 'framer-motion'
import { AppContext } from '../../../App'
import axios from 'axios'
import CardTemplate from '../../Cards/CardTemplate'
import '../../../App.css';
import FavoritesItem from './FavoritesItem'

const Favorites = (props) => {

//Объявляем context (тут хранятся данные, которые раздавали в App.jsx в AppContext.Provider)
//Если будут ошибки, попробовать использовать useContext
const context=React.useContext(AppContext)

//Добавление/удаление товара в корзину
const onAddToCart=async(obj)=>{

  try{       
    const findCartItem = context.cartItems.find(objCart=>objCart.myId===obj.myId)    
    if(findCartItem){ //если уже есть в корзине
      //удалить из БД избранных товаров
      axios.delete(`https://643d1b4a6afd66da6aecbd82.mockapi.io/Cart/${findCartItem.id}`)
      //удалить из пропсов
      context.setCartItems((cart)=>cart.filter(o=>o.myId !== obj.myId))      
    }
    else{      
      //добавляем карточку в API корзины
      const {data} = await axios.post('https://643d1b4a6afd66da6aecbd82.mockapi.io/Cart', obj)      
      //Добавляем данные карточки в пропсы
      context.setCartItems([...context.cartItems, data])      
    }
  }
  catch {
    alert("Что-то пошло не так. Наши специалисты уже не разбираются с проблемой")
  }
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
            onDeleteFavorites={(myId)=>{onDeleteFavorites(myId)}}
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