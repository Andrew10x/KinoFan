import axios from 'axios';
import { createFilm } from '../../api/api-helper';

import './styles.scss';

export default function AddFilmForm({ isVisibleForm, setVisibility, filmObj }) {
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
        image: form.origName.value.toLowerCase(),
      };

      await createFilm(obj);
      setVisibility(!isVisibleForm);
    }
  }

  return (
    <>
      {isVisibleForm && (
        <form action="" method="post" name="test" className="form" id="form">
          <input type="text" name="name" placeholder={filmObj.name} />
          <input type="text" name="origName" placeholder={filmObj.origName} />
          <input type="text" name="director" placeholder={filmObj.director} />
          <input type="text" name="language" placeholder={filmObj.language} />
          <input type="text" name="genre" placeholder={filmObj.genre} />
          <input type="text" name="duration" placeholder={filmObj.duration} />
          <input type="text" name="studio" placeholder={filmObj.studio} />
          <textarea name="details" placeholder={filmObj.details} className="details" />
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
}
