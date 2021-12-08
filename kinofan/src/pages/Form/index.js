import { useState } from 'react';
import { useHistory } from 'react-router';
import { updateSeats } from '../../api/api-helper';

import './styles.scss';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const buyHandler = event => {
    event.preventDefault();
    const data = [];
    const seats = JSON.parse(localStorage.getItem('seats'));
    const { filmName, date, time } = JSON.parse(localStorage.getItem('filmData'));
    for (const value of seats) {
      const object = {
        film: filmName,
        date,
        time,
        row: value.row,
        seat: value.seat,
      };
      data.push(object);
    }
    updateSeats(data);
    setSubmitted(true);
  };
  const returnHandler = () => {
    history.push('/');
  };
  return (
    <div>
      {!submitted && (
        <div className="card">
          <h2>Введіть, будь ласка, дані</h2>
          <form onSubmit={buyHandler}>
            <label htmlFor="name">Ім'я</label>
            <input type="text" id="name" placeholder="Введіть ім'я" />
            <label htmlFor="phone">Номер телефону</label>
            <input type="text" id="phone" placeholder="Введіть номер телефону" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Введіть email" />
            <label htmlFor="card">Номер карти</label>
            <input type="text" id="card" placeholder="Введіть номер карти" />
            <h3>Всього до оплати: {`${localStorage.getItem('price')} грн.`}</h3>
            <button className="buy_button">Придбати</button>
          </form>
        </div>
      )}
      {submitted && (
        <div style={{ marginTop: '15rem', marginLeft: '32rem', width: '41.5rem' }}>
          <h2>Квитки були надіслані на вказану поштову адресу.</h2>
          <h2>Чекаємо на Вас у нашому кінотеатрі.</h2>
          <button className="buy_button" onClick={returnHandler} style={{ marginLeft: 0 }}>
            Повернутися на головну сторінку
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
