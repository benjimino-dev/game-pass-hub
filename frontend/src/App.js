import React, { useState } from 'react';

import styles from './App.module.css';
import Hero from './components/Hero/Hero';

import GameLibrary from './components/GameLibrary/GameLibrary';
import GameInfo from './components/GameInfo/GameInfo';

function App() {
  const [currentGame, setCurrentGame] = useState(null);

  const changeCurrentGame = (game) => {
    setCurrentGame(game);
  };
  return (
    <section className={styles.App}>
      <main className={styles.Main}>
        {currentGame ? <GameInfo gameId={currentGame} /> : <Hero />}
      </main>
      <section className={styles.GameLibrary}>
        <GameLibrary changeCurrentGame={changeCurrentGame} />
      </section>
    </section>
  );
}

export default App;
