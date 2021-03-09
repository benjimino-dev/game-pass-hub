import React, { useState, useEffect, useRef } from 'react';
import useWindowSize from '../../../custom-hooks/useWindowSize';
import {
  MdNavigateBefore as BackIcon,
  MdNavigateNext as ForwardIcon,
} from 'react-icons/md';
import styles from './Slider.module.css';

const Slider = (props) => {
  const [isScrollable, setIsScrollable] = useState(0);
  // I am using a custom hook here to check when the width of the browser window has been resized.
  const [width, height] = useWindowSize();
  const sliderContainer = useRef(null);
  useEffect(() => {
    // If the browser has been resized and the width is changed, check if the slider has overflowed and set the appropiate isScrollable state
    setIsScrollable(
      sliderContainer.current.scrollWidth > sliderContainer.current.clientWidth
    );
  }, [width]);
  const scroll = (direction) => {
    const scrollOffset = 0.25 * sliderContainer.current.scrollWidth;
    if (direction === 'forward') {
      sliderContainer.current.scrollLeft += scrollOffset;
    } else {
      sliderContainer.current.scrollLeft -= scrollOffset;
    }
  };
  return (
    <section className={styles.Slider}>
      <nav
        onClick={() => scroll('back')}
        className={
          isScrollable
            ? `${styles.Slider__arrow} ${styles.Slider__arrowBack}`
            : styles.disabled
        }
      >
        <BackIcon />
      </nav>

      <section ref={sliderContainer} className={styles.Slider__container}>
        {props.children}
      </section>
      <nav
        onClick={() => scroll('forward')}
        className={
          isScrollable
            ? `${styles.Slider__arrow} ${styles.Slider__arrowForward}`
            : styles.disabled
        }
      >
        <ForwardIcon />
      </nav>
    </section>
  );
};

export default Slider;
