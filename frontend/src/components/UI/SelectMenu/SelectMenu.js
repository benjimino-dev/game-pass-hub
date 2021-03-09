import React from 'react';
import styles from './SelectMenu.module.css';

const selectMenu = (props) => {
  const options = props.options.map((option) => {
    return (
      <option key={option.val} value={option.val}>
        {option.text}
      </option>
    );
  });
  return (
    <select onChange={props.changeHandler} className={styles.SelectMenu}>
      {options}
    </select>
  );
};

export default selectMenu;
