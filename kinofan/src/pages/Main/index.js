import { useState } from 'react';

import SliderButton from '../../components/SliderButton';
import Poster from '../../components/Poster';
import './styles.scss';
import getPosters from '../../constants/posters';
import Card from '../../components/Card';

const Main = () => {
  const [slideIndex, setSlideIndex] = useState(0);

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
        {posters.map(value => (
          <Card image={value.image} />
        ))}
      </div>
    </>
  );
};

export default Main;
