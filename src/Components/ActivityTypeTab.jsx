import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardHiking from './Cards/CardHiking';
import CardCycling from './Cards/CardCycling';


const ActivityTypeTab = (props) => {
  return (
    <div className="directionsTab">        
       <Tabs fill    //fill - для растягивания вкладок на всю ширину
      defaultActiveKey="Hiking"
      id="RoutesTab"
      className="mb-3"
    >
      <Tab eventKey="Hiking" title="Пешие маршруты">
        <CardHiking item={props.item}></CardHiking>
      </Tab>
      <Tab eventKey="Cycling" title="Велосипедные маршруты">
        <CardCycling item={props.item}></CardCycling>
      </Tab>
    </Tabs>
    </div>
  )
}

export default ActivityTypeTab