import PropTypes from 'prop-types';
import './cardStyle.css';

function Card({ letter, isImmutable, cardColorClass }) {
  let cardStyle = 'card'; // Default class
  let isStageTwo = false;
  if (isImmutable) {
    isStageTwo = true;
    cardStyle = cardColorClass;
  } else {
    isStageTwo = false;
    cardStyle = 'card';
  }

  return (
    <div className={isStageTwo ? '' : cardStyle} id={isStageTwo ? cardStyle : ''}>
      <div className="letter-display">{letter}</div>
    </div>
  );
}

Card.propTypes = {
  letter: PropTypes.string.isRequired,
  isImmutable: PropTypes.bool.isRequired,
  isCorrect: PropTypes.oneOf([true, false, null]).isRequired,
  cardColorClass: PropTypes.string,
};

export default Card;
