import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import '../../../App.css'

const ShoppingCartItem = (props) => {

  //Устанавливаем минимальную дату бронирования тура
  const minTourDate=(separator='-')=>{
    let newDate = new Date()
    let date = newDate.getDate()+2;
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
    }

    //Устанавливаем максимальную дату бронирования тура
    const maxTourDate=(separator='-')=>{
      let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 7;
      let year = newDate.getFullYear();    
      return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
      }

      const [checkAvailableTour, setCheckAvailableTour] = useState(false);

  const onClickCheckButton=()=>{

  }

  const checkAvailableDate = () =>{
    if (checkAvailableTour) {
      return <p id="greenP">Дата свободна</p>
    }
    // else { 
    // return <p>Дата занята</p>
    //}
  }

  const onClickDeleteFromCart = () => {
    props.onDeleteFromCart(props.id)
  }

  //пока форма никуда не отправляется и в логике не задействована
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (register == null) { // это условие не работает
      setCheckAvailableTour(false)
    }
    else {
      setCheckAvailableTour(true)
  }
  }


  return (
    <div className='container text-center'>     
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="row justify-content-center align-items-start" id="rowCard">
        
        <div class = "col-md-3 col-sm-6" id="cardContainer"> 
          <Card >
          <Card.Img variant="top"       
          src={props.img} />
          <Card.Body> 
            <Card.Title>{props.title}</Card.Title>
            <p> От 1 до {props.maxPersonInGroup} человек</p>
          </Card.Body>
          </Card> 
        </div>

        <div class = "col-md-6 col-sm-6">
        <div>        
          <input {...register('personQuantity', {
            required:true,
            min:1,            
            max: props.maxPersonInGroup            
          })}
            type='number'
            className='form-control'
            placeholder='Укажите количество человек в группе' 
            />
        </div>
        <div className="errorInput">
        {errors?.personQuantity?.type==='required' && (<p>Укажите количество человек в группе (от 1 до {props.maxPersonInGroup})</p>)}
        {errors?.personQuantity?.type==='min' && (<p>Количество человек должно быть не менее 1</p>)}
        {errors?.personQuantity?.type==='max' && (<p>Количество человек должно быть не более {props.maxPersonInGroup}</p>)}
        </div>
        <br/>
        <div>

          <input {...register('tourDate', {
            required:true,
            min: minTourDate(),
            max: maxTourDate()            
          })}
            type='date'
            className='form-control'            
            />
        </div>
        <div className="errorInput">
        {errors?.tourDate?.type==='required' && (<p>Укажите дату</p>)}
        {errors?.tourDate?.type==='min' && (<p>Укажите дату не ранее {minTourDate()}</p>)}
        {errors?.tourDate?.type==='max' && (<p>Бронирование доступно до {maxTourDate()}</p>)}
        </div>

          <br/><br/>
        <p id="CartCardPrice">Стоимость тура (руб.): <br/> {props.priceSmallGroup}</p>
        </div >

        <div class = "col-md-3 col-sm-8 align-self-start"> 
          <Button variant="dark" onClick={onClickDeleteFromCart} id="cardButtons">          
            Удалить из корзины 
          </Button>
          <Button variant="dark" type="submit" onClick={onClickCheckButton} id="cardButtons">          
          Проверить свободные места
          </Button> 
          {checkAvailableDate()}
       
        </div>
        
        </div>
        </form>
        <hr></hr>
    </div>
    
  )
}

export default ShoppingCartItem