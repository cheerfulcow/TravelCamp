import React from 'react'
import CardTemplate from './CardTemplate'
import { AppContext } from '../../App';
import axios from 'axios';

const CardHiking = (props) => { 

  const context = React.useContext(AppContext)
  
//Добавление товара в избранное
const onAddFavorites=async(obj)=>{

  try{  
    console.log('try')  
    const findFavorites = context.favorites.find(objFavorites=>objFavorites.myId===obj.myId)    
    if(findFavorites){ //если уже есть в избранных
      //удалить из БД избранных товаров
      axios.delete(`https://643d1b4a6afd66da6aecbd82.mockapi.io/Favorites/${findFavorites.myId}`)
      //удалить из пропсов
      context.setFavorites((over)=>over.filter(o=>o.myId !== obj.myId))      
    }
    else{      
      //добавляем карточку в API избранное
      const {data} = await axios.post('https://643d1b4a6afd66da6aecbd82.mockapi.io/Favorites', obj)      
      //Добавляем данные карточки в пропсы
      context.setFavorites([...context.favorites,data])      
    }
  }
  catch {
    alert("Что-то пошло не так. Наши специалисты уже не разбираются с проблемой")
  }
}

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

  return (      
    <div>  
      {         
        props.item.map(obj=> {
//Проходимся циклом (map) по всем объектам БД. Если в БД в графе tourType 
//будет указано, что маршрут "Пеший", то создаём карточку этого тура
          if (obj.tourType === "Пеший"){
          return (            
            <CardTemplate
//Передаем пропсы - все поля объекта из БД
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
            onAddFavorites={(favoritesObj)=>{onAddFavorites(favoritesObj)}} 
            onAddToCart={(cartObj)=>{onAddToCart(cartObj)}} 
            />
          )}
        }) 
      }
    </div>
  )
}

export default CardHiking