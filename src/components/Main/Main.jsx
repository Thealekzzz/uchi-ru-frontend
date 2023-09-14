import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Cats from '../Cats/Cats';
import Loader from '../Loader/Loader';

import { baseUrl, token } from '../../config';
import './Main.css';

const Main = ({ onLike, likedCats }) => {
  const [cats, setCats] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const likedCatIds = likedCats.map((cat) => cat.id);

  function handleLikeClick(cardId) {
    const likedCat = cats.find((card) => card.id === cardId);

    onLike(likedCat);

    setCats([...cats]);
  }

  function handleButtonClick() {
    loadCats();
  }

  function loadCats() {
    setisLoading(true);
    fetch(`${baseUrl}/search?limit=20`, {
      headers: {
        'x-api-key': token,
      }
    })
      .then((res) => res.json())
      .then((newCats) => {
        setCats((prev) => ([
          ...prev,
          ...newCats.map((newCat) => {
            newCat.liked = likedCatIds.includes(newCat.id);
            return newCat;
          })
        ]));
        setisLoading(false);
      })
      .catch(() => {
        console.log('Ошибка при получении фотографий');
      });
  }

  useEffect(() => {
    loadCats();
  }, []);

  return (
    <>
      <Cats cats={cats} handleLikeClick={handleLikeClick} isLoading={isLoading} />
      {cats.length > 0 && (
        <div className="container container_type_center">
          <button
            className="button"
            disabled={isLoading}
            onClick={handleButtonClick}
          >
            {isLoading ? <Loader color='white' size='small' /> : 'Загрузить еще'}
          </button>
        </div>

      )}
    </>
  );
};

Main.propTypes = {
  likedCats: PropTypes.array,
  onLike: PropTypes.func,
};

export default Main;