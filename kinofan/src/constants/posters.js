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
      name: 'Аватар',
      left: '11rem',
      alt: 'квитки',
    },
    {
      image: avengers,
      name: 'Месники: Завершення',
      left: index === 0 ? '33.8rem' : '1.7rem',
      alt: 'кіно',
    },
    {
      image: harrypotter,
      name: `Гаррі Поттер`,
      left: index === 0 ? '72rem' : index === 1 ? '40rem' : '7.5rem',
      alt: 'недорогі квитки',
    },
    {
      image: starwars,
      name: 'Зоряні війни',
      left: index === 1 ? '72rem' : index === 2 ? '40rem' : '7.8rem',
      alt: 'квитки в кіно',
    },
    {
      image: thedarkknight,
      name: 'Темний лицар',
      left: index === 2 ? '71rem' : index === 3 ? '38.8rem' : '6.7rem',
      alt: 'квитки Київ',
    },
    {
      image: zootopia,
      name: 'Зоотрополіс',
      left: index === 3 ? '72rem' : index === 4 ? '40rem' : '8rem',
      alt: 'квитки недорого',
    },
    {
      image: jurassicworld,
      name: 'Світ Юрського періоду',
      left: index === 4 ? '65.5rem' : index === 5 ? '33.5rem' : '1.5rem',
      alt: 'кінотеатр',
    },
    {
      image: lionking,
      name: 'Король Лев',
      left: index === 5 ? '72rem' : index === 6 ? '39.8rem' : '8rem',
      alt: 'Kinofun квитки',
    },
    {
      image: titanic,
      name: 'Титанік',
      left: index === 6 ? '75.5rem' : '42.5rem',
      alt: 'Kinofun Київ',
    },
    {
      image: frozen,
      name: 'Холодне серце',
      left: '70.2rem',
      alt: 'квитки в кіно',
    },
  ];
  return posters;
};

export default getPosters;
