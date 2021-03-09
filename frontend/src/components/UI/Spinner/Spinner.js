import React from 'react';
import styles from './Spinner.module.css';

const spinner = () => (
  <figure className={styles.LoaderWrapper}>
    <div className={styles.Loader}>Loading...</div>
  </figure>
);

export default spinner;
