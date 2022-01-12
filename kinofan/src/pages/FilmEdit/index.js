import { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.scss';

import editSvg from '../../assets/edit.svg';
import deleteSvg from '../../assets/delete.svg';
import EditFilmForm from '../../components/EditFilmForm';
import { getAllFilms, getFilm, deleteFilm } from '../../api/api-helper';

const EditFilm = () => {
  const [films, setFilms] = useState(null);
  const [isVisibleForm, setFormVisibility] = useState(true);
  const [filmObj, setFilmObj] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      const films = await getAllFilms();
      console.log(films);
      setFilms(films);
      return films;
    };
    getFilms();
  }, []);

  const deleteSelectedFilm = async id => {
    await deleteFilm(id);
    const allFilms = await getAllFilms();
    setFilms(allFilms);
  };

  const getSelectedFilm = async title => {
    // let film = await axios.get(`http://localhost:3001/films/${id}`);
    const film = await getFilm(title);
    console.log(title);
    console.log(film);
    setFilmObj(film);
    setFormVisibility(previousValue => !previousValue);
  };

  return (
    <div className="container">
      <ul>
        {films &&
          films.map(film => (
            <li>
              <div>{film.name}</div>
              <div>
                <i>
                  <img src={editSvg} alt="edit" onClick={() => getSelectedFilm(film.image)} />
                </i>
                <i>
                  <img
                    src={deleteSvg}
                    alt="delete"
                    onClick={() => deleteSelectedFilm(film.image)}
                  />
                </i>
              </div>
            </li>
          ))}
      </ul>
      {filmObj && (
        <EditFilmForm
          isVisibleForm={isVisibleForm}
          setVisibility={() => {
            setFormVisibility(!isVisibleForm);
          }}
          filmObj={filmObj}
        />
      )}
    </div>
  );
};

export default EditFilm;
