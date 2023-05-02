import { type FC } from 'react';

import NavigationButton from '@/components/NavigationButton/NavigationButton';

import styles from './MainSection.module.css';

interface IProps {
  name: string;
  content: string;
  link: string;
  text: string;
  bg?: string;
}

const MainSection: FC<IProps> = (
  { name, content, link, text, bg },
) => {
  const changeBackground = bg === "yes" ? styles.changedBackground: styles.default;
  return (
    <div className={`${styles.container} ${changeBackground}`}>
      <h2>{name}</h2>
      <p>{content}</p>
      <NavigationButton link={link} text={text} />
    </div>
  );
};

export default MainSection;