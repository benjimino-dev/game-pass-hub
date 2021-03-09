import React from 'react';
import { FaGamepad as GamePadIcon } from 'react-icons/fa';
import styles from './Hero.module.css';
import useFloatUp from '../../custom-hooks/style-hooks/floatUp/useFloatUp';
import useFadeIn from '../../custom-hooks/style-hooks/fadeIn/useFadeIn';

const Hero = () => {
  const floatUp = useFloatUp();
  const fadeIn = useFadeIn();
  return (
    <section className={`${styles.Hero} ${fadeIn}`}>
      <section className={`${styles.Hero__content} ${floatUp}`}>
        <GamePadIcon className={styles.Hero__icon} />
        <h1 className={styles.Hero__header}>
          Prioritise which games to play on Game Pass with Game Pass Hub!
        </h1>
      </section>
    </section>
  );
};

export default Hero;
