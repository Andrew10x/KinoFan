import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from 'react-loader-spinner';

import TicketCard from '../../components/Card/TicketCard';
import getPosters from '../../constants/posters';
import './cinemaHall.scss';
import getMonth from '../../constants/months';
import Chair from '../../components/Chair';
import Ticket from '../../components/Ticket';
import getSeatsArray from '../../helpers/seats';
import getObjectInArrayIndex from '../../helpers/objectInArray';
import { getAllFilms, getSeats } from '../../api/api-helper';

export default function CinemaHall() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [seats, setSeats] = useState(getSeatsArray());

  const [films, setFilms] = useState(null);

  const [seatArr, setSeatArr] = useState(null);

  const history = useHistory();

  const params = useParams();

  const { session, filmName } = params;

  const year = new Date().getFullYear();
  let month = +session.split('-')[3] + 1;
  let day = +session.split('-')[2];
  console.log({ month, day });
  if (month < 9) month = `0${month + 1}`;
  if (day < 9) day = `0${day}`;
  const date = `${year}-${month}-${day}`;
  const time = `${session.split('-')[0]}:${session.split('-')[1]}`;

  console.log(session, filmName);

  useEffect(() => {
    document.getElementById('title').innerText = 'Вибір місць';
    window.scrollTo(0, 0);
    const getFilmsData = async () => {
      const films = await getAllFilms();
      setFilms(films);
    };
    const getSeatsData = async () => {
      const seats = await getSeats(filmName, date, time);
      setSeatArr(seats);
    };
    getFilmsData();
    getSeatsData();
  }, []);

  useEffect(() => {
    console.log(selectedSeats);
  }, [selectedSeats]);

  if (!films || !seatArr)
    return (
      <div style={{ marginTop: '5rem', marginLeft: '45rem' }}>
        <Spinner type="TailSpin" color="#757575" height={100} width={100} timeout={3000} />
      </div>
    );

  const name = getPosters(0, films).find(value => value.filmName === filmName).name;

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
    history.push(`/hall/${filmName}/${session}/form`);
    localStorage.setItem('seats', JSON.stringify(selectedSeats));
    localStorage.setItem('price', selectedSeats.length * seatArr[0].price);
    localStorage.setItem('filmData', JSON.stringify({ filmName, date, time }));
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
                    seatArr.find(
                      value => value.row === Math.floor(index / 12) + 1 && value.seat === index % 12
                    ).status === 'taken'
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
              price={`${seatArr[0].price} грн.`}
            />
          ))}
          <h3>Всього до оплати: {`${selectedSeats.length * seatArr[0].price} грн.`}</h3>
          <button className="buy_button" onClick={clickHandler}>
            Придбати
          </button>
        </TicketCard>
      )}
    </section>
  );
}
