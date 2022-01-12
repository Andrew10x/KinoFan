import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AddFilmForm from '../../components/AddFilmForm';
import './styles.scss';

const FilmAdmin = () => {
  const [isVisibleForm, setFormVisibility] = useState(false);
  const history = useHistory();
  const clickHandler = () => history.push('/admin/edit');
  return (
    <div className="container">
      <div className="buttons">
        <button
          onClick={() => {
            setFormVisibility(!isVisibleForm);
          }}
        >
          Додати Фільм
        </button>
        <button onClick={clickHandler}>Редагувати</button>
      </div>
      <AddFilmForm
        isVisibleForm={isVisibleForm}
        setVisibility={() => {
          setFormVisibility(!isVisibleForm);
        }}
      />
    </div>
  );
};

export default FilmAdmin;
