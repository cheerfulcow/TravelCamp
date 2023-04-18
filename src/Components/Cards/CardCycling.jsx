import React from 'react'
import CardTemplate from './CardTemplate'

const CardCycling = (props) => {  
  return (      
    <div>  
      {         
        props.item.map(obj=> {
          if (obj.tourType === "Вело"){
          return (            
            <CardTemplate
            key={obj.id}
            id={obj.id}
            myId={obj.myid}
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
            />
          )}
        }) 
      }
    </div>
  )
}

export default CardCycling