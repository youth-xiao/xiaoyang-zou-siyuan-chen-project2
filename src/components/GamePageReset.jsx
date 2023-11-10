import PropTypes from "prop-types";
import "../style/gamePageResetStyle.css";

const GamePageReset = ({ onReset, buttonText }) => {
  return (
    <button onClick={onReset} className="reset-button">
      {buttonText}
    </button>
  );
};

GamePageReset.propTypes = {
  onReset: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default GamePageReset;
