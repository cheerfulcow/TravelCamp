import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Directions from './Components/Pages/Directions';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Guides from './Components/Pages/Guides';
import Booking from './Components/Pages/Booking';
import Cart from './Components/Pages/ShoppingCart/Cart';
import Favorites from './Components/Pages/Favorites/Favorites';
import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';


//Экспортируем контекст из реакта: {} означает, что там будет массив данных
export const AppContext = React.createContext({})


function App() {
  
  const[tours, setTours] = useState([]);
  const[favorites, setFavorites] = useState([]);
  const[cartItems, setCartItems] = useState([]); 
  const[bookingTour, setBookingTourTitle] = useState([]);
//получаем данные от БД, async + await - для асинхронной работы 
//(отрисовка и выполнение кода без ожидания получения данных от сервера)
  useEffect (()=> {
    async function axiosData (){
      const toursData = await axios.get('https://6420194b82bea25f6dfa019b.mockapi.io/tyrs');     
      const favoritesData = await axios.get('https://643d1b4a6afd66da6aecbd82.mockapi.io/Favorites');
      const cartData = await axios.get('https://643d1b4a6afd66da6aecbd82.mockapi.io/Cart'); 

//.data - обращаемся к пришедшему объекту и забираем только данные (помимо них, ещё приходит много другой сервисной информации)
      setTours(toursData.data); 
      setFavorites(favoritesData.data);
      setCartItems(cartData.data);
      
    }
    axiosData();
},[]) // ,[] - указываем для того, чтобы сервак не отправлял постоянно запросы (каждые +/- 1-100 мс)

//удаление товара по пришедшему id
const deleteItems=(myId)=>{
  axios.delete(`https://643d1b4a6afd66da6aecbd82.mockapi.io/Cart/${myId}`)  
//Так же удаляем объект из стэйтов(фильтруем и оставляем только те, у которых ID отличается от удаляемго)
// в objDelete - переменная, в которой хранятся все объекты хука, их мы и фильтруем
  setCartItems((objDelete)=> objDelete.filter(item=> item.myId !==myId)) 
}

const isFavorites=(myId)=>{
  return favorites.some((objIsFavorites)=> objIsFavorites.myId === myId)
}

//Для подсчета суммы в корзине (функционал пока не работает)
//.reduce = означает, что действие для каждого элемента
const totalPrice=cartItems.reduce((element = cartItems.length, obj)=>
  element+Number(obj.priceSmallGroup), 0 
  )

// хук для анимированного перехода между страницами
const location = useLocation();


// --- return starts here --- //
  return (   
    
//Передаём данные в контекст для доступа к ним из любого компоненты
    <AppContext.Provider
    value={
      {
        tours,
        setTours,
        favorites,
        setFavorites,
        cartItems,
        setCartItems,
        bookingTour,
        setBookingTourTitle,
        // isAdded,
        isFavorites,
        deleteItems,  
        totalPrice              
      }
    }
    >   

    <div> 
        <NavBar/>        
          <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>        
{/* В path указывается URL путь, в element - то, что будет отрисовано по этому пути.
при необходимости скармливаем компонентам пропсы - данные от БД */}
          <Route path='/' element = {<Home 
            item={tours}/>}>            
          </Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/directions' element = {<Directions 
            item={tours}/>}>              
          </Route>
          <Route path='/guides' element = {<Guides/>}></Route>
          <Route path='/booking' element = {<Booking 
            item={tours}/>}>            
          </Route>
          <Route path='/favorites' element = {<Favorites 
            item={tours}
            favorites={favorites}
            setFavorites={setFavorites}
            cartItems={cartItems}
            setCartItems={setCartItems}
            />}>              
          </Route>
          <Route path='/cart' element = {<Cart   
            favorites={favorites}          
            cartItems={cartItems}
            setCartItems={setCartItems}
            totalPrice={totalPrice}
            deleteItems={deleteItems}
          />}>            
        </Route>
        </Routes> 
        </AnimatePresence>      
    </div>
    </AppContext.Provider>    
  );
} 

export default App;
