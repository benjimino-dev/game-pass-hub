import React, { useState, useEffect } from 'react';
import styles from './GameInfo.module.css';
import useAxios from '../../custom-hooks/useAxios';
import Spinner from '../UI/Spinner/Spinner';
import Slider from '../UI/Slider/Slider';
import GameImage from '../GameImage/GameImage';
import GameSummary from '../GameSummary/GameSummary';
const GameInfo = (props) => {
  const [gameData, setGameData] = useState(0);
  const [response, isLoading, hasError] = useAxios(`/games/${props.gameId}`);
  useEffect(() => {
    if (response) {
      setGameData(response.game);
    }
  }, [response]);
  return (
    <section className={styles.GameInfo}>
      {isLoading ? (
        <Spinner />
      ) : hasError ? (
        <p>Something went wrong</p>
      ) : (
        <>
          <figure>
            {gameData.screenshots ? (
              <Slider>
                {gameData.screenshots.map((screenshot) => {
                  return (
                    <GameImage
                      key={screenshot.image_id}
                      size={'screenshot_med'}
                      imageId={screenshot.image_id}
                      alternate={`Gameplay of ${gameData.name}`}
                    />
                  );
                })}
              </Slider>
            ) : (
              <p>No Screenshots Available</p>
            )}
          </figure>
          <GameSummary
            name={gameData.name}
            dateAdded={gameData.dateAdded}
            dateLeaving={gameData.dateLeaving}
            summary={gameData.summary}
            timeToBeat={gameData.timeToBeat}
            rating={gameData.rating}
            genres={gameData.genres}
            themes={gameData.themes}
            playerPerspectives={gameData.playerPerspectives}
            gameImage={
              gameData.screenshots ? gameData.screenshots[0].image_id : null
            }
          />
        </>
      )}
    </section>
  );
};

export default GameInfo;
