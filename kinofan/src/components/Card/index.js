import './styles.scss';

const Card = ({ image }) => {
  return <div className="card">
    <img src={image} />
  </div>;
};

export default Card;
