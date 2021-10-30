import { useHistory } from 'react-router-dom';
import './styles.scss';

const Poster = ({ image, name, left, alt }) => {
  const history = useHistory();
  const clickHandler = () => history.push('/film');
  return (
    <>
      <img src={image} className="image" alt={alt} onClick={clickHandler} />
      <div className="name" style={{ left }} onClick={clickHandler}>
        {name}
      </div>
    </>
  );
};

export default Poster;
