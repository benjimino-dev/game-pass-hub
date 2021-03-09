import React from 'react';
import styles from './GameCard.module.css';
import GameImage from '../GameImage/GameImage';

const gameCard = (props) => {
  return (
    <figure onClick={props.clicked} className={styles.GameCard}>
      <GameImage size="cover_big" imageId={props.gameImageId} />
    </figure>
  );
};

export default gameCard;
