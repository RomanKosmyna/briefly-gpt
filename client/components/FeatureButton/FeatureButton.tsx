import { type FC } from 'react';
import Link from 'next/link';

import styles from "./FeatureButton.module.css";

interface IProps {
  link: string;
  text: any;
  bgcolor: "orange" | "black";
}

const FeatureButton: FC<IProps> = (
  { link, text, bgcolor }) => {
  const buttonBgColor = bgcolor === "orange" ? styles.orangeBgColor : styles.blackBgColor;

  return (
    <Link href={link} className={styles.container}>
      <button type={"button"} className={`${styles.button} ${buttonBgColor}`}>
        {text}
      </button>
    </Link>
  );
};

export default FeatureButton;