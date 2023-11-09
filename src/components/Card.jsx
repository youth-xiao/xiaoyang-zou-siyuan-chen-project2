import PropTypes from 'prop-types';
import './cardStyle.css';

function Card({ letter, isImmutable, isCorrect, cardColorClass }) {
  // Determine the card color class based on correctness and immutability
  let cardColorClassOverride = '';
  if (isImmutable) {
    cardColorClassOverride = 'card-immutable';
  } else if (isCorrect === true) {
    cardColorClassOverride = 'card-correct';
  } else if (isCorrect === false) {
    cardColorClassOverride = 'card-incorrect';
  }

  return (
    <div className={`card ${cardColorClassOverride} ${cardColorClass}`}>
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
