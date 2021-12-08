import { useState } from 'react';
import chairImg from '../../assets/chair.png';

const Chair = ({ row, seat, taken, selectHandler, num }) => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    console.log(num);
    if (taken) return;
    setClicked(previousValue => !previousValue);
    selectHandler(row, seat, !clicked);
  };
  return (
    <img
      className="chair"
      alt="seat"
      src={chairImg}
      onClick={clickHandler}
      style={{
        backgroundColor: clicked && !taken && 'rgb(64, 167, 69)',
        opacity: taken && 0.3,
        cursor: taken && 'not-allowed',
      }}
    ></img>
  );
};

export default Chair;
