import { useHistory } from 'react-router-dom';

import './styles.scss';

const Card = ({ image, name, filmName, positions }) => {
  const history = useHistory();
  const clickHandler = () => history.push(`/film/${filmName}`);
  return (
    <div className="card" onClick={clickHandler}>
      <img src={image} />
      <div onClick={clickHandler} style={positions}>
        {name}
      </div>
    </div>
  );
};

export default Card;
