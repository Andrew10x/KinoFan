import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TicketCard from '../../components/Card/TicketCard';
import getPosters from '../../constants/posters';
import './cinemaHall.scss';
import getMonth from '../../constants/months';
import Chair from '../../components/Chair';
import Ticket from '../../components/Ticket';
import getSeatsArray from '../../helpers/seats';
import getObjectInArrayIndex from '../../helpers/objectInArray';

export default function CinemaHall() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [seats, setSeats] = useState(getSeatsArray());

  useEffect(() => {
    document.getElementById('title').innerText = 'Вибір місць';
  }, []);

  useEffect(() => {
    console.log(selectedSeats);
  }, [selectedSeats]);

  const params = useParams();

  const { session, filmName } = params;

  const name = getPosters(0).find(value => value.filmName === filmName).name;

  const chairArr = [];
  for (let i = 0; i < 120; i++) {
    chairArr.push(1);
  }

  const selectHandler = (row, seat, clicked) => {
    setSelectedSeats(previousValue => {
      const array = [...previousValue];
      if (clicked) array.push({ row, seat });
      else {
        let valueIndex;
        array.forEach((object, index) => {
          if (object.row === row && object.seat === seat) valueIndex = index;
        });
        array.splice(valueIndex, 1);
      }
      return array;
    });
  };

  const clickHandler = () => {
    setSeats(previousValue => {
      for (const object of selectedSeats) {
        const index = getObjectInArrayIndex(previousValue, object.row, object.seat);
        previousValue[index].taken = true;
      }
      return previousValue;
    });
    setSelectedSeats([]);
  };

  return (
    <section id="cinema-hall">
      <div className="container">
        <h1>{name}</h1>
        <div>
          {session.split('-')[2]} {getMonth(session.split('-')[3])} {session.split('-')[0]}:
          {session.split('-')[1]}
        </div>
        <div className="screen">Екран</div>
        <div className="hall">
          {chairArr.map((seat, index) =>
            index % 12 === 0 || index % 12 === 11 ? (
              <div className="row">{Math.floor(index / 12) + 1}</div>
            ) : (
              <div>
                <Chair
                  row={Math.floor(index / 12) + 1}
                  seat={index % 12}
                  selectHandler={selectHandler}
                  taken={
                    seats[getObjectInArrayIndex(seats, Math.floor(index / 12) + 1, index % 12)]
                      .taken
                  }
                />
                {index % 12 === 10 ? (
                  <div className="number number12">{index % 12}</div>
                ) : (
                  <div className="number">{index % 12}</div>
                )}
              </div>
            )
          )}
        </div>
      </div>
      {!!selectedSeats.length && (
        <TicketCard>
          {selectedSeats.map(value => (
            <Ticket
              key={`${value.row}=${value.seat}`}
              row={value.row}
              seat={value.seat}
              price="80 грн."
            />
          ))}
          <h3>Всього до оплати: {`${selectedSeats.length * 80} грн.`}</h3>
          <button className="buy_button" onClick={clickHandler}>Придбати</button>
        </TicketCard>
      )}
    </section>
  );
}
