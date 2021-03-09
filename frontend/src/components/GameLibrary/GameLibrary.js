import React, { useState, useEffect } from 'react';
import useFadeIn from '../../custom-hooks/style-hooks/fadeIn/useFadeIn';
import useAxios from '../../custom-hooks/useAxios';
import styles from './GameLibrary.module.css';
import Slider from '../UI/Slider/Slider';
import GameCard from '../GameCard/GameCard';
import Spinner from '../UI/Spinner/Spinner';
import SelectMenu from '../UI/SelectMenu/SelectMenu';
import Paginate from '../UI/Pagination/Pagination';
const GameLibrary = (props) => {
  const [url, setUrl] = useState('/games');
  const fadeIn = useFadeIn();
  const [response, isLoading, hasError] = useAxios(url);
  const [gameLib, setGameLib] = useState([]);
  const [displayLib, setDisplayLib] = useState('full-library');

  useEffect(() => {
    if (displayLib === 'leaving-soon') {
      setUrl('/games/leaving-soon');
    } else {
      setUrl('/games');
    }
  }, [displayLib]);
  useEffect(() => {
    if (response) {
      setGameLib(response);
    }
  }, [response]);
  const handlePageClick = (e) => {
    setUrl(`/games?page=${e.selected + 1}`);
  };
  const handleSelectChange = (e) => {
    setDisplayLib(e.target.value);
  };

  return (
    <section className={`${styles.GameLibrary} ${fadeIn}`}>
      <header className={styles.GameLibrary__header}>
        {displayLib === 'full-library' ? (
          <Paginate
            handlePageClick={handlePageClick}
            pageCount={gameLib.games ? gameLib.games.totalPages : 36}
          />
        ) : (
          <p>
            Leaving from:{' '}
            {gameLib.games ? gameLib.games.docs[0].dateLeaving || '--' : null}
          </p>
        )}

        <nav>
          <SelectMenu
            options={[
              { val: 'full-library', text: 'Full Library' },
              { val: 'leaving-soon', text: 'Leaving Soon' },
            ]}
            changeHandler={handleSelectChange}
          />
        </nav>
      </header>
      <section className={styles.GameLibrary__gallery}>
        {isLoading ? (
          <div className={styles.GameLibrary__staging}>
            <Spinner />
          </div>
        ) : hasError ? (
          <div className={styles.GameLibrary__staging}>
            <h1>Something went wrong.</h1>
          </div>
        ) : (
          <div className={styles.GameLibrary__slider}>
            <Slider>
              {gameLib.games.docs.map((game) => {
                return (
                  <GameCard
                    key={game.id}
                    gameImageId={game.coverImage}
                    gameTitle={game.name}
                    clicked={() => props.changeCurrentGame(game.id)}
                  />
                );
              })}
            </Slider>
          </div>
        )}
      </section>
    </section>
  );
};

export default GameLibrary;
