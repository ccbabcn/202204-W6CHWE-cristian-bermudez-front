import PropTypes from "prop-types";

const Button = (action, className, text) => {
  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
