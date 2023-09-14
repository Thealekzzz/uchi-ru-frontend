import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';

import arrowIcon from '../../assets/arrow.svg';
import './Cats.css';

const Cats = ({ cats, handleLikeClick, isLoading }) => {
  return (<>
    {cats.length === 0 && isLoading ? (
      <div className="container_type_center">
        <Loader />
      </div>
    ) : (<>
      {cats.length === 0 ? (
        <div className="container container_type_center">
          <p>Нет ни одного котика :(</p>
          <Link to='/' className="cats__button">
            <p>Добавить</p>
            <img src={arrowIcon} alt="Стрелка" />
          </Link>
        </div>
      ) : (
        <div className='cats'>
          <div className="container cats__container">
            {cats.map(({ id, url, liked }) => (
              <Card key={id} url={url} liked={liked} onLike={() => handleLikeClick(id)} />
            ))}
          </div >
        </div >

      )}

    </>)}
  </>);
};

Cats.propTypes = {
  cats: PropTypes.array,
  handleLikeClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Cats;