import PropTypes from "prop-types";

const GamePageReset = ({ onReset }) => {
  return (
    <button onClick={onReset} className="reset-button">
      Reset Game
    </button>
  );
};

GamePageReset.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default GamePageReset;
