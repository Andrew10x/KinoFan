import { useState, useEffect } from 'react';
import Spinner from 'react-loader-spinner';

import SliderButton from '../../components/SliderButton';
import Poster from '../../components/Poster';
import './styles.scss';
import getPosters from '../../constants/posters';
import Card from '../../components/Card';
import getWindowWidth from '../../helpers/windowWidth';
import getPositions from '../../constants/positions';
import { getAllFilms } from '../../api/api-helper';

const Main = () => {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    document.getElementById('title').innerText = 'Квитки в кіно - кінотеатр Kinofun | Київ';
    const getFilmsData = async () => {
      const films = await getAllFilms();
      films.sort((a, b) => a.id - b.id);
      setFilms(films);
    };
    getFilmsData();
  }, []);

  const [width, setWidth] = useState(getWindowWidth());

  const [slideIndex, setSlideIndex] = useState(0);

  const [numberOfPosters, setNumberOfPosters] = useState(3);

  const handleResize = () => setWidth(getWindowWidth());

  window.addEventListener('resize', handleResize);

  useEffect(() => {
    if (width < 670 && numberOfPosters !== 1) setNumberOfPosters(1);
    if (width < 990 && width > 670 && numberOfPosters !== 2) setNumberOfPosters(2);
    if (width > 990 && numberOfPosters !== 3) setNumberOfPosters(3);
  }, [width]);

  const nextSlide = () => {
    if (slideIndex !== posters.length) setSlideIndex(previousValue => previousValue + 1);
  };

  const previousSlide = () => {
    if (slideIndex !== 0) setSlideIndex(previousValue => previousValue - 1);
  };

  if (!films)
    return (
      <div style={{ marginTop: '5rem', marginLeft: '45rem' }}>
        <Spinner type="TailSpin" color="#757575" height={100} width={100} timeout={3000} />
      </div>
    );

  const posters = getPosters(slideIndex, films);

  return (
    <>
      <div className="container-slider">
        {posters.map((value, index) => (
          <div className={slideIndex === index ? 'slide active-anim' : 'slide'} key={value.image}>
            <Poster
              key={posters[slideIndex].name}
              image={posters[slideIndex].image}
              name={posters[slideIndex].name}
              left={posters[slideIndex].left}
              alt={posters[slideIndex].alt}
              filmName={posters[slideIndex].filmName}
            />
            <Poster
              key={posters[slideIndex + 1].name}
              image={posters[slideIndex + 1].image}
              name={posters[slideIndex + 1].name}
              left={posters[slideIndex + 1].left}
              alt={posters[slideIndex + 1].alt}
              filmName={posters[slideIndex + 1].filmName}
            />
            <Poster
              key={posters[slideIndex + 2].name}
              image={posters[slideIndex + 2].image}
              name={posters[slideIndex + 2].name}
              left={posters[slideIndex + 2].left}
              alt={posters[slideIndex + 2].alt}
              filmName={posters[slideIndex + 2].filmName}
            />
          </div>
        ))}
        <SliderButton
          moveSlide={previousSlide}
          direction="previous"
          display={slideIndex === 0 ? 'none' : ''}
        />
        <SliderButton
          moveSlide={nextSlide}
          direction="next"
          display={slideIndex === 8 ? 'none' : ''}
        />
      </div>
      <div className="films">
        {numberOfPosters === 3 &&
          posters.map((value, index) => {
            if (!(index % 3)) {
              return (
                <div className="pair" key={value.image}>
                  <Card
                    key={value.filmName}
                    image={value.image}
                    filmName={value.filmName}
                    name={value.name}
                    positions={getPositions(numberOfPosters)[index]}
                  />
                  {posters[index + 1] && (
                    <Card
                      key={posters[index + 1].filmName}
                      image={posters[index + 1].image}
                      filmName={posters[index + 1].filmName}
                      name={posters[index + 1].name}
                      positions={getPositions(numberOfPosters)[index + 1]}
                    />
                  )}
                  {posters[index + 2] && (
                    <Card
                      key={posters[index + 2].filmName}
                      image={posters[index + 2].image}
                      filmName={posters[index + 2].filmName}
                      name={posters[index + 2].name}
                      positions={getPositions(numberOfPosters)[index + 2]}
                    />
                  )}
                </div>
              );
            }
          })}
        {numberOfPosters === 2 &&
          posters.map((value, index) => {
            if (!(index % 2)) {
              return (
                <div className="pair" key={value.image}>
                  <Card
                    key={value.filmName}
                    image={value.image}
                    filmName={value.filmName}
                    name={value.name}
                    positions={getPositions(numberOfPosters)[index]}
                  />
                  <Card
                    key={posters[index + 1].filmName}
                    image={posters[index + 1].image}
                    filmName={posters[index + 1].filmName}
                    name={posters[index + 1].name}
                    positions={getPositions(numberOfPosters)[index + 1]}
                  />
                </div>
              );
            }
          })}
        {numberOfPosters === 1 &&
          posters.map((value, index) => (
            <Card
              key={value.filmName}
              image={value.image}
              filmName={value.filmName}
              name={value.name}
              positions={getPositions(numberOfPosters)[index]}
            />
          ))}
      </div>
    </>
  );
};

export default Main;
