import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cats from './components/Cats/Cats';

import './App.css';

function App() {
  const [likedCats, setLikedCats] = useState(JSON.parse(localStorage.getItem('likedCats')) || []);

  function handleLikeClick(likedCat) {
    likedCat.liked = !likedCat.liked;

    if (likedCat.liked) {
      setLikedCats((prev) => ([...prev, likedCat]))
    } else {
      setLikedCats((prev) => prev.filter((card) => card.id !== likedCat.id));
    }
  }

  useEffect(() => {
    localStorage.setItem('likedCats', JSON.stringify(likedCats));

  }, [likedCats]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main
            onLike={handleLikeClick}
            likedCats={likedCats} />}
        />
        <Route
          path='/liked'
          element={<Cats
            cats={likedCats}
            handleLikeClick={(catId) => handleLikeClick(likedCats.find((cat) => cat.id === catId))} />}
        />
        {/* <Route path='/' element={<Cats cats={cats} handleLikeClick={handleLikeClick} isLoading={isLoading} />} />
        <Route path='/liked' element={<Cats cats={likedCats} handleLikeClick={handleLikeClick} />} /> */}
      </Routes>
    </>
  )
}

export default App
