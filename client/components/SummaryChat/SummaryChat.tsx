import { type FC } from 'react';

import styles from './SummaryChat.module.css';

const SummaryChat: FC = () => {
  const test = async (event) => {
    event.preventDefault();
    console.log(123);
  };
  
  return (
    <div className={styles.mainContainer}>
      <div>
        Chat Window
      </div>
      <form onSubmit={test}>
        <input type='text' />
        <button type={"submit"}>Send</button>
      </form>
    </div>
  );
};

export default SummaryChat;