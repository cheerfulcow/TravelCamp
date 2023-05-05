import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (     
    <div>      
      <Navbar bg="dark" variant="dark">
        <Container >  
{/* Link to = указываем URL, на который будет переход при нажатии на ссылочный элемент */}
          <Navbar.Brand><Link to={'/'} id="travelCamp"><img src='../siteLogo.png' id="siteLogo"></img>Travel Camp</Link></Navbar.Brand>           
          <div className="navbar-collapse collapse justify-content-around">        
          <Nav id="travelCampLinks">
            <Nav.Link ><Link to={'/about'}>О нас</Link></Nav.Link>            
            <Nav.Link ><Link to={'/directions'}> Наши туры</Link> </Nav.Link>
            <Nav.Link ><Link to={'/guides'}>Наши гиды</Link></Nav.Link>
            <Nav.Link ><Link to={'/booking'}>Заказать звонок</Link></Nav.Link>
            <Nav.Link ><Link to={'/favorites'}>Список желаний</Link></Nav.Link> 
            <Nav.Link ><Link to={'/cart'}>Корзина</Link></Nav.Link>           
          </Nav> 
          </div>          
        </Container>
      </Navbar>
    </div>
   
  )
}

export default NavBar