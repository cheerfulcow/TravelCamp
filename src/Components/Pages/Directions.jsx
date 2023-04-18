import React from 'react'
import ActivityTypeTab from '../ActivityTypeTab';

const Directions = (props) => {
  return (
    <div className="directions">
    <h2>Наши туры</h2>
    <p className="descriptionP">Данные подтягиваются с mocAPI и сортируются по типу активности</p>  
     <ActivityTypeTab item={props.item}/>
     <div className="gap100"></div>
  </div>
  )
}

export default Directions