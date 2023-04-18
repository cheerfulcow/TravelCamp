import React from 'react'
import TourTable from '../TourTable'
import BookingForm from '../BookingForm'

const Booking = (props) => {
  return (
    <div className="booking">
      <h2>БРОНИРОВАНИЕ ТУРОВ</h2>
      <BookingForm item={props.item}/>
      <p className ="descriptionP">Раздел на доработке</p>
      <TourTable/>
      <div className="gap100"></div>
    </div>
  )
}

export default Booking