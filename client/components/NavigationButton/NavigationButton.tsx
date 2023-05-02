import { type FC } from 'react';
import Link from 'next/link';

import styles from "./NavigationButton.module.css";

interface IProps {
  link: string;
  text: string;
}

const NavigationButton: FC<IProps> = ({ link, text }) => {
  return (
    <Link href={link}>
      <button type={"button"} className={styles.button}>{text}</button>
    </Link>
  );
};

export default NavigationButton;