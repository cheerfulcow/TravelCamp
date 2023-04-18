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

//Экспортируем контекст
export const AppContext = React.createContext({})


function App() {
  
  const[tours, setTours] = useState([]);
  const[favorites, setFavorites] = useState([]);
  const[cartItems, setCartItems] = useState([]);  
//получаем данные от БД, async + await - для асинхронной работы 
//(отрисовка и выполнение кода без ожидания получения данных от сервера)
  useEffect (()=> {
    async function axiosData (){
      const toursData = await axios.get('https://6420194b82bea25f6dfa019b.mockapi.io/tyrs');     
      const favoritesData = await axios.get('https://643d1b4a6afd66da6aecbd82.mockapi.io/Favorites');
      const cartData = await axios.get('https://643d1b4a6afd66da6aecbd82.mockapi.io/Cart'); 

      setTours(toursData.data); //обращаемся к пришедшему объекту и забираем только данные (data)
      setFavorites(favoritesData.data);
      setCartItems(cartData.data);
    }
    axiosData();
},[]) // ,[] - указываем для того, чтобы сервак не отправлял постоянно запросы (каждые +/- 1-100 мс)

//удаление товаров
const deleteItems=(id)=>{
  axios.delete(`https://643d1b4a6afd66da6aecbd82.mockapi.io/Cart/${id}`)  
//Так же удаляем объект из стэйтов(фильтруем и оставляем только те, у которых ID отличается от удаляемго)
  setCartItems((objDelete)=> objDelete.filter(item=> item.id !==id)) 
}

const isAdded=(myId)=>{
  return cartItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFavorites=(myId)=>{
  return favorites.some((objIsFavorites)=> objIsFavorites.myId === myId)
}

//Для подсчета суммы в корзине
//.reduce = означает, что действие для каждого элемента
const totalPrice=cartItems.reduce((element = cartItems.length, obj)=>
  element+obj.price, 0 
  )



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
        isAdded,
        isFavorites
      }
    }
    >
    
    <div>
      <Router>
        <NavBar/>
        <Routes>
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
      </Router>  
    </div>

    </AppContext.Provider>
  );
} 

export default App;
