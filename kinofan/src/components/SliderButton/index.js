import '../../pages/Main/styles.scss';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';

const SliderButton = ({ moveSlide, direction, display }) => {
  return (
    <button
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      onClick={moveSlide}
      style={{ display }}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  );
};
export default SliderButton;
