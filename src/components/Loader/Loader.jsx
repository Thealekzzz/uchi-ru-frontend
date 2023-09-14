import PropTypes from 'prop-types';
import './Loader.css';

const sizes = {
  small: {
    dimentions: 24,
    borderWidth: 3,
  },
  normal: {
    dimentions: 48,
    borderWidth: 5,
  },
};

const Loader = ({ color='black', size='normal' }) => {
  return (
      <div
        className="loader"
        style={{
          borderColor: color,
          borderBottomColor: 'transparent',
          borderWidth: `${sizes[size].borderWidth}px`,

          height: `${sizes[size].dimentions}px`,
          width: `${sizes[size].dimentions}px`,
        }}
      ></div>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

export default Loader;