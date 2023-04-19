import React from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AppContext } from '../App';


const BookingForm = (props) => {

  const context = React.useContext(AppContext)


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  console.log("12345"+context.bookingTour)
  
   return (
    <div>      
      <form id="bookingForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <input {...register('lastName', {
            required:true,
            minLength:2,
            maxLength:30,
            pattern:/^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'          
          placeholder='Введите фамилию'/>
        </div>
        {errors?.lastName?.type==='required' && (<p>Поле обязательно для заполнения</p>)}
        {errors?.lastName?.type==='minLength' && (<p>Поле не может содержать менее 2 символов</p>)}
        {errors?.lastName?.type==='maxLength' && (<p>Поле не может содержать более 30 символов</p>)}
        {errors?.lastName?.type==='pattern' && (<p>Введите фамилию используя кириллицу</p>)}

        <div>        
          <input {...register('firstName', {
            required:true,
            minLength:2,
            maxLength:30,
            pattern:/^[А-Яа-я]+$/i
          })}
            type='text'
            className='form-control'
            placeholder='Введите имя'/>
        </div>
        {errors?.firstName?.type==='required' && (<p>Поле обязательно для заполнения</p>)}
        {errors?.firstName?.type==='minLength' && (<p>Поле не может содержать менее 2 символов</p>)}
        {errors?.firstName?.type==='maxLength' && (<p>Поле не может содержать более 30 символов</p>)}
        {errors?.firstName?.type==='pattern' && (<p>Введите фамилию используя кириллицу</p>)}

        <div>        
          <input {...register('email', {
            required:true,
            minLength:6,
            maxLength:100            
          })}
            type='email'
            className='form-control'
            placeholder='Введите e-mail (на него будет отправлено бронирование)'/>
        </div>
        {errors?.email?.type==='required' && (<p>Поле обязательно для заполнения</p>)}
        {errors?.email?.type==='minLength' && (<p>Введите корректный е-mail</p>)}
        {errors?.email?.type==='maxLength' && (<p>Поле не может содержать более 100 символов</p>)}  

        <div>
        <input {...register('phoneNumber', {
            required:true,
            pattern:/(\+7|7|8)[0-9]{10}/i,                        
          })}
          type='tel'
          className='form-control'          
          placeholder='Введите номер телефона'
          />
        </div>
        {errors?.phoneNumber?.type==='required' && (<p>Поле обязательно для заполнения</p>)}
        {errors?.phoneNumber?.type==='pattern' && (<p>Введите номер телефона, начиная с +7 или 7 или 8 и далее 10 цифр</p>)}      

        <div>          
          <select
          className='form-control' 
          {...register("tourTitle", {required: true })}
          >
{/* Прописываем пустое value='' для option по-умолчанию, для того чтобы 
срабатывала проверка на невыбранное значение.
Также, если был осуществлён переход по кнопке "записаться на тур", то автоматически 
подставляем название и тип тура*/}
          <option value="" disabled selected hidden>
          {(context.bookingTour.title == null) ? 
          "Выберите тур(автозаполн. от `btn Записаться`)"
          : context.bookingTour.title +' ('+ context.bookingTour.tourType +')'
          } </option>
{/* Проходимся циклом по базе данных и забираем оттуда названия туров, тип маршрута 
и для каждого тура создаём свой option */}
          {props.item.map(obj => {
          return(
          <option>{obj.title} ({obj.tourType})</option>)})} 
          </select>
        </div>
        {errors?.tourTitle?.type==='required' && (<p>Выберите тур</p>)}

        <div>        
          <input {...register('personQuantity', {
            required:true,
            min:1,            
            max:8            
          })}
            type='number'
            className='form-control'
            placeholder='Укажите количество человек в группе (от 1 до 8)'/>
        </div>
        {errors?.personQuantity?.type==='required' && (<p>Укажите количество человек в группе</p>)}
        {errors?.personQuantity?.type==='min' && (<p>Количество человек должно быть не менее 1</p>)}
        {errors?.personQuantity?.type==='max' && (<p>Количество человек должно быть не более 8</p>)}

        <div>          
          <select id="selectDisabled" disabled {...register("tourDate", {
            required:true            
          })}
          className='form-control'
          >
          <option value="" disabled selected hidden>Выберете дату тура(функционал пока не доступен)</option>
{/* Раздел с выбором даты пока заблокирован, функционал отсутствует.
Проходимся циклом по базе данных и забираем оттуда названия туров, тип маршрута 
и для каждого тура создаём свой option */}
          {/* {props.item.map(obj => {
          return(
          <option>{obj.title} ({obj.tourType})</option>)})} 
          */}
          </select>
        </div> 
        {/* {errors?.tourDate?.type==='required' && (<p>Выберите дату</p>)} */}
        
        <input className="btn btn-success" type="submit" value={"Добавить в корзину"}/>        
        
        <Link exact to={'/cart'}>        
          <input className="btn btn-success" type="button" value={"Перейти к корзине"} />           
        </Link>   

        
      </form>

      <div>
        <h3>Ваши туры</h3>
      </div>

    </div>
  )
}

export default BookingForm