import PropTypes from 'prop-types';
import './cardStyle.css';

function Card({ letter, isImmutable, isCorrect, cardColorClass }) {
  let cardStyle = 'card'; // Default class
  let isStageTwo = false;
  if (isImmutable && isCorrect) {
    isStageTwo = true;
    cardStyle = 'card-correct';
  }

  // if (cardColorClass) {
  //   cardStyle += ` ${cardColorClass}`; // Apply additional classes
  // }

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
  cardColorClass: PropTypes.string, // Accepts an additional color class as a prop
};

export default Card;
