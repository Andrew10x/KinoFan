import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.scss';
import { updateFilm } from '../../api/api-helper';

const EditFilmForm = ({ isVisibleForm, setVisibility, filmObj }) => {
  console.log('filmObj', filmObj);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  const [inputValue8, setInputValue8] = useState('');
  const [film, setFilm] = useState(null);

  useEffect(() => {
    setInputValue1(filmObj.name);
    setInputValue2(filmObj.originalName);
    setInputValue3(filmObj.director);
    setInputValue4(filmObj.language);
    setInputValue5(filmObj.genre);
    setInputValue6(filmObj.duration);
    setInputValue7(filmObj.studio);
    setInputValue8(filmObj.description);
    setFilm(filmObj);
  }, [isVisibleForm]);

  /*async function getFilm(id) {
            let film = await axios.get(`http://localhost:3001/films/${id}`)
            setVisibility(!isVisibleForm)
            //setFilmObj(null)
            setFilmObj(film.data)
            console.log(film.data)
        }

        const [filmObj, setFilmObj] = React.useState(null);
*/
  if (!filmObj) {
    filmObj = {
      name: 'назва фільму',
      origName: 'оригінальна назва фільму',
      director: 'режисер',
      language: 'мова',
      genre: 'жанр',
      duration: 'тривалість',
      studio: 'студія',
      details: 'детальний опис фільму',
    };
  }

  const sendForm = async form => {
    if (form) {
      const obj = {
        name: form.name.value,
        originalName: form.origName.value,
        director: form.director.value,
        language: form.language.value,
        genre: form.genre.value,
        duration: form.duration.value,
        studio: form.studio.value,
        description: form.details.value,
        image: film.image,
      };
      await updateFilm(obj);
    //   axios.patch(`http://localhost:3001/films/${filmObj.id}`, obj);
      setVisibility(!isVisibleForm);
    }
  }

  return (
    <>
      {isVisibleForm && (
        <form action="" method="post" name="test" className="form" id="form">
          <input
            type="text"
            name="name"
            value={inputValue1}
            placeholder={filmObj.name}
            onChange={e => setInputValue1(e.target.value)}
          />
          <input
            type="text"
            name="origName"
            value={inputValue2}
            placeholder={filmObj.origName}
            onChange={e => setInputValue2(e.target.value)}
          />
          <input
            type="text"
            name="director"
            value={inputValue3}
            placeholder={filmObj.director}
            onChange={e => setInputValue3(e.target.value)}
          />
          <input
            type="text"
            name="language"
            value={inputValue4}
            placeholder={filmObj.language}
            onChange={e => setInputValue4(e.target.value)}
          />
          <input
            type="text"
            name="genre"
            value={inputValue5}
            placeholder={filmObj.genre}
            onChange={e => setInputValue5(e.target.value)}
          />
          <input
            type="text"
            name="duration"
            value={inputValue6}
            placeholder={filmObj.duration}
            onChange={e => setInputValue6(e.target.value)}
          />
          <input
            type="text"
            name="studio"
            value={inputValue7}
            placeholder={filmObj.studio}
            onChange={e => setInputValue7(e.target.value)}
          />
          <textarea
            name="details"
            value={inputValue8}
            placeholder={filmObj.details}
            onChange={e => setInputValue8(e.target.value)}
            className="details"
          />
          <div className="buttons">
            <input
              type="button"
              value="Зберегти"
              className="button1"
              onClick={() => sendForm(document.getElementById('form'))}
            />
            <input type="button" value="Вийти" className="button2" onClick={setVisibility} />
          </div>
        </form>
      )}
    </>
  );
};

export default EditFilmForm;
