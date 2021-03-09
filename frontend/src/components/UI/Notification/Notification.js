import React from 'react';
import styles from './Notification.module.css';
import { MdInfo as InfoIcon } from 'react-icons/md';
const notification = (props) => {
  return (
    <article className={styles.Notification}>
      <InfoIcon />
      {props.children}
    </article>
  );
};

export default notification;
