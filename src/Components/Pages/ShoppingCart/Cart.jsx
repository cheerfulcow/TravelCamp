import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ShoppingCartItem from './ShoppingCartItem'
import { AppContext } from '../../../App'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { getValue } from '@testing-library/user-event/dist/utils'



const Cart = (props) => {

  const context=React.useContext(AppContext)

//При удалении товара из избранных удаляет его из API раздела избранных
//А также удаляет из контекста
const onDeleteFromCart=(id)=> { 
  axios.delete(`https://643d1b4a6afd66da6aecbd82.mockapi.io/Cart/${id}`)  
  context.setCartItems((cartItems)=>cartItems.filter(item=>item.id !==id))  
}

const onClickOrder=()=>{
  alert('Функционал на стадии разработки')

}

  return (
    <motion.div 
//Настройки для появления и мсчезания при переходе с/на страницу
    initial={{opacity: 0 }}
    animate={{opacity: 1 }} 
    exit={{opacity: 0 }}   
    transition={{duration: 0.7}}
    >
    <div>
      <h3>Моя корзина</h3>
      {props.cartItems.map(obj =>{
        return(
          <div id="cardCart">
          <ShoppingCartItem 
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
            onDeleteFromCart={(myId)=>{onDeleteFromCart(myId)}}
            />
            </div>
        )
      }
      )      
    }
    <br/>
    <div className='row justify-content-center align-items-center'>  
    <h4 className='col-6'>Общая стоимость заказа: {context.totalPrice} руб.</h4> 
    </div>
    <div className='row justify-content-center align-items-center'>   
      <div className='col-6'>
        <Button variant="dark" id="orderButton"
          onClick={onClickOrder}>          
            Перейти к оформлению заказа 
        </Button>
    </div>
    </div>
    </div>    
    </motion.div>
  )
}

export default Cart