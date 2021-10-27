import avatar from '../assets/avatar.jpg';
import titanic from '../assets/titanic.jpg';
import harrypotter from '../assets/harrypotter.jpg';
import avengers from '../assets/avengers.jpg';
import starwars from '../assets/starwars.jpg';
import thedarkknight from '../assets/1.jpg';
import lionking from '../assets/lionking.jpg';
import zootopia from '../assets/zootopia.jpg';
import frozen from '../assets/frozen.jpg';
import jurassicworld from '../assets/jurassicworld.jpg';

const getPosters = index => {
  const posters = [
    {
      image: avatar,
      name: 'Avatar',
      left: '12rem',
    },
    {
      image: avengers,
      name: 'Avengers: Endgame',
      left: index === 0 ? '36rem' : '4rem',
    },
    {
      image: harrypotter,
      name: `Harry Potter`,
      left: index === 0 ? '73rem' : index === 1 ? '40rem' : '8rem',
    },
    {
      image: starwars,
      name: 'Star Wars',
      left: index === 1 ? '74rem' : index === 2 ? '42rem' : '10rem',
    },
    {
      image: thedarkknight,
      name: 'The Dark Knight',
      left: index === 2 ? '70rem' : index === 3 ? '38rem' : '5rem',
    },
    {
      image: zootopia,
      name: 'Zootopia',
      left: index === 3 ? '75rem' : index === 4 ? '43rem' : '10rem',
    },
    {
      image: jurassicworld,
      name: 'The Jurassic World',
      left: index === 4 ? '69rem' : index === 5 ? '36.5rem' : '4.5rem',
    },
    {
      image: lionking,
      name: 'The Lion King',
      left: index === 5 ? '71rem' : index === 6 ? '39rem' : '7rem',
    },
    {
      image: titanic,
      name: 'Titanic',
      left: index === 6 ? '75.5rem' : '44rem',
    },
    {
      image: frozen,
      name: 'Frozen',
      left: '76rem'
    },
  ];
  return posters;
};

export default getPosters;
