import { type FC } from 'react';

import FooterLinks from '@/components/FooterLinks/FooterLinks';

import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navigationContainer}>
        <FooterLinks
          name={"Features"}
          links={[ "/feature1", "/summary" ]}
          text={[ "Visual story", "Quick summary" ]}
        />
        
        <FooterLinks name={"Resources"} links={[ "/blog" ]} text={[ "Blog" ]}/>

        <FooterLinks
          name={"About"}
          links={[ "/about" ]}
          text={[ "Learn" ]}
        />
      </div>

      <div className={styles.copyrightContainer}>
        <p>Copyright &copy; {new Date().getFullYear()} BrieflyGPT. All rights reserved.</p>
        <p>Powered by OpenAI API.</p>
      </div>
    </div>
  );
};

export { Footer };