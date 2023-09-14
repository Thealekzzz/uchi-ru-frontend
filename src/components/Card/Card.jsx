import './Card.css';
import PropTypes from 'prop-types';

import likeIcon from '../../assets/like.svg';
import likeFilledIcon from '../../assets/like_filled.svg';

const Card = ({ url, liked, onLike }) => {
  return (
    <div className='card'>
      <img src={url} alt="Фото кота" className='card__image' />

      <div className="card__base"></div>
      <img
        src={liked ? likeFilledIcon : likeIcon}
        alt=""
        className="card__like"
        onClick={onLike}
      />
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string,
  liked: PropTypes.bool,
  onLike: PropTypes.func,
}



export default Card;