import React from 'react'
import Table from 'react-bootstrap/Table';

const TourTable = () => {
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Название маршрута</th>
          <th>Тип маршрута</th>
          <th>Стоимость</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10.10.2023</td>
          <td>К облакам!</td>
          <td>пеший</td>
          <td>Работаем за еду</td>
        </tr>
        <tr>
          <td>11.11.2023</td>
          <td>К серебряной беседке</td>
          <td>пеший</td>
          <td>Работаем за две еды</td>
        </tr>
        <tr>
          <td>12.12.2023</td>
          <td>Экологическая тропа по заповеднику</td>
          <td>пеший</td>
          <td>Работаю за зачёт :)</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default TourTable