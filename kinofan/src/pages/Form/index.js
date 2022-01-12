import { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { updateSeats } from '../../api/api-helper';

import Card from '../../components/Card';
import TicketCard from '../../components/Card/TicketCard';
import Ticket from '../../components/Ticket';
import './styles.scss';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const history = useHistory();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const cardRef = useRef();
  const checkValidation = () => {
    const nameValue = nameRef.current.value;
    const phoneValue = phoneRef.current.value;
    const emailValue = emailRef.current.value;
    const cardValue = cardRef.current.value;
    if (!nameValue || !phoneValue || !emailValue || !cardValue) {
      setIsValid(false);
      return false;
    }
    return true;
  };
  const buyHandler = event => {
    event.preventDefault();
    if (!checkValidation()) return;
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
  const filmName = localStorage.getItem('filmName');
  const seats = JSON.parse(localStorage.getItem('seats'));
  return (
    <div>
      {!submitted && (
        <div className="card">
          <h2>Введіть, будь ласка, дані</h2>
          <form onSubmit={buyHandler}>
            <label htmlFor="name">Ім'я *</label>
            <input type="text" id="name" placeholder="Введіть ім'я" ref={nameRef} />
            <label htmlFor="phone">Номер телефону *</label>
            <input type="text" id="phone" placeholder="Введіть номер телефону" ref={phoneRef} />
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="Введіть email" ref={emailRef} />
            <label htmlFor="card">Номер карти *</label>
            <input type="text" id="card" placeholder="Введіть номер карти" ref={cardRef} />
            {!isValid && <p style={{ color: 'red' }}>Введіть, будь ласка, дані в усі поля.</p>}
            <h3>Всього до оплати: {`${localStorage.getItem('price')} грн.`}</h3>
            <button className="buy_button">Придбати</button>
          </form>
        </div>
      )}
      {submitted && (
        // <div styles={{ display: 'flex', flexDirection: 'column' }}>
        //   <TicketCard>
        //   {seats.map(value => (
        //     <Ticket
        //       film={filmName}
        //       key="1"
        //       row={value.row}
        //       seat={value.seat}
        //       hall={3}
        //       margin={-10}
        //     />
        //   </TicketCard>)}
          <div style={{ marginTop: '15rem', marginLeft: '32rem', width: '41.5rem' }}>
            <h2>Квитки були надіслані на вказану поштову адресу.</h2>
            <h2 style={{ textAlign: 'center' }}>Чекаємо на Вас у нашому кінотеатрі.</h2>
            <button className="buy_button" onClick={returnHandler} style={{ marginLeft: 0 }}>
              Повернутися на головну сторінку
            </button>
          </div>
        // </div>
      )}
    </div>
  );
};

export default Form;
