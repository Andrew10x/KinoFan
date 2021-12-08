import images from './images';

const getPosters = (index, data) => {
  const posters = [
    {
      image: images[data[0].image],
      name: data[0].name,
      left: '11rem',
      alt: 'квитки',
      filmName: data[0].image,
    },
    {
      image: images[data[1].image],
      name: data[1].name,
      left: index === 0 ? '33.8rem' : '1.7rem',
      alt: 'кіно',
      filmName: data[1].image,
    },
    {
      image: images[data[2].image],
      name: data[2].name,
      left: index === 0 ? '72rem' : index === 1 ? '40rem' : '7.5rem',
      alt: 'недорогі квитки',
      filmName: data[2].image,
    },
    {
      image: images[data[3].image],
      name: data[3].name,
      left: index === 1 ? '72rem' : index === 2 ? '40rem' : '7.8rem',
      alt: 'квитки в кіно',
      filmName: data[3].image,
    },
    {
      image: images[data[4].image],
      name: data[4].name,
      left: index === 2 ? '71rem' : index === 3 ? '38.8rem' : '6.7rem',
      alt: 'квитки Київ',
      filmName: data[4].image,
    },
    {
      image: images[data[5].image],
      name: data[5].name,
      left: index === 3 ? '72rem' : index === 4 ? '40rem' : '8rem',
      alt: 'квитки недорого',
      filmName: data[5].image,
    },
    {
      image: images[data[6].image],
      name: data[6].name,
      left: index === 4 ? '65.5rem' : index === 5 ? '33.5rem' : '1.5rem',
      alt: 'кінотеатр',
      filmName: data[6].image,
    },
    {
      image: images[data[7].image],
      name: data[7].name,
      left: index === 5 ? '72rem' : index === 6 ? '39.8rem' : '8rem',
      alt: 'Kinofun квитки',
      filmName: data[7].image,
    },
    {
      image: images[data[8].image],
      name: data[8].name,
      left: index === 6 ? '75.5rem' : '42.5rem',
      alt: 'Kinofun Київ',
      filmName: data[8].image,
    },
    {
      image: images[data[9].image],
      name: data[9].name,
      left: '70.2rem',
      alt: 'квитки в кіно',
      filmName: data[9].image,
    },
  ];
  return posters;
};

export default getPosters;
