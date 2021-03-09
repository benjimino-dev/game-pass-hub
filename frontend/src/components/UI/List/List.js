import React from 'react';
import styles from './List.module.css';

const list = (props) => {
  return (
    <ul className={styles.List}>
      {props.items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default list;
