import { type FC } from 'react';
import Link from 'next/link';

import styles from "./FooterLinks.module.css";

interface IProps {
  name?: string;
  links: string[];
  text: string[];
}

const FooterLinks: FC<IProps> = ({ name, links, text }) => {

  return (
    <div className={styles.container}>
      <h4>{name}</h4>
      {links?.map((link, index) => <Link key={link} href={link}>
        <p>{text[index]}</p>
      </Link>)
      }
    </div>
  );
};

export default FooterLinks;