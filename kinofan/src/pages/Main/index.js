import { useState, useEffect } from 'react';

import SliderButton from '../../components/SliderButton';
import Poster from '../../components/Poster';
import './styles.scss';
import getPosters from '../../constants/posters';
import Card from '../../components/Card';
import getWindowWidth from '../../helpers/windowWidth';

const Main = () => {
  const [width, setWidth] = useState(getWindowWidth());

  const [slideIndex, setSlideIndex] = useState(0);

  const [numberOfPosters, setNumberOfPosters] = useState(3);

  const handleResize = () => setWidth(getWindowWidth());

  window.addEventListener('resize', handleResize);

  useEffect(() => {
    if (width < 640 && numberOfPosters !== 1) setNumberOfPosters(1);
    if (width < 940 && width > 640 && numberOfPosters !== 2) setNumberOfPosters(2);
    if (width > 940 && numberOfPosters !== 3) setNumberOfPosters(3);
    console.log(width);
  }, [width]);

  const nextSlide = () => {
    if (slideIndex !== posters.length) setSlideIndex(previousValue => previousValue + 1);
  };

  const previousSlide = () => {
    if (slideIndex !== 0) setSlideIndex(previousValue => previousValue - 1);
  };

  const posters = getPosters(slideIndex);

  return (
    <>
      <div className="container-slider">
        {posters.map((value, index) => (
          <div className={slideIndex === index ? 'slide active-anim' : 'slide'} key={value.image}>
            <Poster
              image={posters[slideIndex].image}
              name={posters[slideIndex].name}
              left={posters[slideIndex].left}
            />
            <Poster
              image={posters[slideIndex + 1].image}
              name={posters[slideIndex + 1].name}
              left={posters[slideIndex + 1].left}
            />
            <Poster
              image={posters[slideIndex + 2].image}
              name={posters[slideIndex + 2].name}
              left={posters[slideIndex + 2].left}
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
          display={slideIndex === 7 ? 'none' : ''}
        />
      </div>
      <div className="films">
        {numberOfPosters === 3 &&
          posters.map((value, index) => {
            if (!(index % 3)) {
              return (
                <div className="pair">
                  <Card image={value.image} />
                  {posters[index + 1] && <Card image={posters[index + 1].image} />}
                  {posters[index + 2] && <Card image={posters[index + 2].image} />}
                </div>
              );
            }
          })}
        {numberOfPosters === 2 &&
          posters.map((value, index) => {
            if (!(index % 2)) {
              return (
                <div className="pair">
                  <Card image={value.image} />
                  <Card image={posters[index + 1].image} />
                </div>
              );
            }
          })}
        {numberOfPosters === 1 && posters.map(value => (
          <Card image={value.image} />
        ))}
      </div>
    </>
  );
};

export default Main;
