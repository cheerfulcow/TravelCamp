import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <div >
      <footer className='border-top'>
        <div class='row justify-content-around align-items-start' id="footer">
     <div class='col-md-1' id="footerLogo"><img src='../siteLogo.png'/></div>
     <div class='col-md-2' id="footerTravelCamp">
      <p>TravelCamp</p>
      <p id="underTravel">навстречу приключениям!</p>
      </div>
      <div class='col-md-5'>      
        <p>Наши контакты: </p>
        <div class='row justify-content-start align-items-center'>
          <div class='col-6 align-self-start justify-content-start'>
            <p>Telegram: @LookAtMyHorse</p>
            <p>WhatsUp: @MyHorseIsAmazing</p>
            </div>
          <div class='col-6'>
           <p>Тел: 8-800-555-35-35</p>
           <p>VK: kk.com/bestGuysYouEverMet</p>
          </div>
        </div>
        </div>
        <div class='col-md-3 align-self-center'>
          <p>Разработка сайта:</p><p>студия "И тааааааааак сойдёт!"</p><p>creativity@crisis.come</p>             
          </div>
      </div> 
      </footer>      
    </div>
  )
}

export default Footer