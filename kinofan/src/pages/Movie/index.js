import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Spinner from 'react-loader-spinner';

import { getFilm } from '../../api/api-helper';
import getMonth from '../../constants/months';
import './movie.scss';
import images from '../../constants/images';

export default function Movie() {
  const history = useHistory();
  const params = useParams();
  const { filmName } = params;
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const data = await getFilm(filmName);
      setFilmData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (filmData) document.getElementById('title').innerText = `${filmData.name} - квитки на фільм`;
  }, [filmData])

  const dayInMs = 3600 * 24 * 1000;
  let today = new Date();
  today = Number(today.setHours(0, 0, 0, 0));

  const dateArr = [];
  const monthArr = [];
  let i = 0;
  let k = 0;
  while (i < 7) {
    let cur_day = today + k * dayInMs;
    let new_date = new Date(cur_day);
    if (new_date.getDate() === 31 && new_date.getHours() === 23) {
      k++;
      continue;
    }

    dateArr.push(new_date.getDate());
    monthArr.push(new_date.getMonth());
    i++;
    k++;
  }

  const clickHandler = (filmName, session) => history.push(`/hall/${filmName}/${session}`);

  if (!filmData)
    return (
      <div style={{ marginTop: '5rem', marginLeft: '45rem' }}>
        <Spinner type="TailSpin" color="#757575" height={100} width={100} timeout={3000} />
      </div>
    );
    localStorage.setItem('filmName', filmData.name)
  return (
    <>
      <section id="movie">
        <img src={images[filmData.image]} alt="img" />
        <div className="text">
          <h2 className="title">{filmData.name}</h2>
          <div className="field">
            <b>Оригінальна назва:</b> {filmData.originalName}
          </div>
          <div className="field">
            <b>Режисер:</b> {filmData.director}
          </div>
          <div className="field">
            <b>Мова:</b> {filmData.language}
          </div>
          <div className="field">
            <b>Жанр:</b> {filmData.genre}
          </div>
          <div className="field">
            <b>Тривалість:</b> {filmData.duration} хв.
          </div>
          <div className="field">
            <b>Студія:</b> {filmData.studio}
          </div>
          <div className="plot">
            <p>{filmData.description}</p>
          </div>
        </div>
      </section>

      <section id="movie-time">
        <h2 className="title2">Розклад сеансів</h2>

        <div className="date">
          {dateArr.map((date, index) => (
            <div className="date-block" key={date}>
              <div className="cur-date">
                {date} {getMonth(monthArr[index])}
              </div>
              <div className="date-times">
                <div onClick={() => clickHandler(filmName, `10-00-${date}-${monthArr[index]}`)}>
                  10:00
                </div>
                <div onClick={() => clickHandler(filmName, `13-00-${date}-${monthArr[index]}`)}>
                  13:00
                </div>
                <div onClick={() => clickHandler(filmName, `16-00-${date}-${monthArr[index]}`)}>
                  16:00
                </div>
                <div onClick={() => clickHandler(filmName, `19-00-${date}-${monthArr[index]}`)}>
                  19:00
                </div>
                <div onClick={() => clickHandler(filmName, `21-40-${date}-${monthArr[index]}`)}>
                  21:40
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
