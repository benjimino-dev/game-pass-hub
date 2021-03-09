import React from 'react';
import styles from './GameSummary.module.css';
import Notification from '../UI/Notification/Notification';
import List from '../UI/List/List';

const gameSummary = (props) => {
  return (
    <article
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url(https://images.igdb.com/igdb/image/upload/t_1080p/${props.gameImage}.jpg)`,
      }}
      className={styles.GameSummary}
    >
      <header className={styles.GameSummary__name}>
        <h2>{props.name}</h2>
        <p>{props.themes ? props.themes.join(', ') : 'No Themes Available'}</p>
      </header>
      <section className={styles.GameSummary__dates}>
        <p>Added on: {props.dateAdded}</p>
      </section>
      <section>
        {props.dateLeaving ? (
          <Notification>
            This game leaves Game Pass on {props.dateLeaving}
          </Notification>
        ) : null}
      </section>
      <section className={styles.GameSummary__genres}>
        {props.genres ? <List items={props.genres} /> : 'No Genres Available'}
        <p>{props.rating} out of 10</p>
        <p>{props.timeToBeat}</p>
      </section>
      <section className={styles.GameSummary__summary}>{props.summary}</section>
    </article>
  );
};

export default gameSummary;
