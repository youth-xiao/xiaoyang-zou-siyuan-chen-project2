import './cardStyle.css';
import PropTypes from 'prop-types';

function Card({ letter, onKeyPress }) {
  return (
    <div className="card" onKeyPress={onKeyPress}>
      <div className="letter-display">{letter}</div>
    </div>
  );
}

Card.propTypes = {
  letter: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default Card;