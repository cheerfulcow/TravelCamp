import React from 'react'
import CardTemplate from './CardTemplate'

const CardHiking = (props) => {  
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

export default CardHiking