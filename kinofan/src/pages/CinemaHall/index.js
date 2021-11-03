import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import getPosters from '../../constants/posters';
import './cinemaHall.scss';
import chairImg from '../../assets/chair.png';
import getMonth from '../../constants/months';

export default function CinemaHall() {
  useEffect(() => {
    document.getElementById('title').innerText = 'Вибір місць';
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  const { session, filmName } = params;

  const name = getPosters(0).find(value => value.filmName === filmName).name;

  const chairArr = [];
  for (let i = 0; i < 120; i++) {
    chairArr.push(1);
  }

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
          {chairArr.map((place, index) =>
            index % 12 === 0 || index % 12 === 11 ? (
              <div className="row">{Math.floor(index / 12) + 1}</div>
            ) : (
              <div>
                <img className="chair" alt="seat" src={chairImg}></img>
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
    </section>
  );
}
