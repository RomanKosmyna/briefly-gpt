import { type FC } from 'react';

import styles from './Main.module.css';
import FeatureButton from '@/components/FeatureButton/FeatureButton';

const Main: FC = (): JSX.Element => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sloganContainer}>
        <h1 className={styles.slogan}>
          <span className={styles.orange}>Empowering </span>
          <span className={styles.gradient}>
            you to
          <br />
          learn more, do more
          </span>
        </h1>
        <div className={styles.sloganText}>
          <p>
            Upgrade your knowledge game with BrieflyGPT.
            <br />
            Our app is your ultimate learning and working companion.
          </p>
        </div>
      </div>
      <div className={styles.featureContainer}>
        <h2>Explore our features</h2>
        <div className={styles.features}>
          <FeatureButton link={'/feature1'}
                         text={<>
                           <span>Discover the visual story of </span>
                           <span>any link</span>
                         </>}
                         bgcolor={'black'}
          />
          <FeatureButton link={'/feature2'}
                         text={<>
                           <span>Quick summary, </span>
                           <br />
                           <span>big insights</span>
                         </>}
                         bgcolor={'orange'}
          />
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <h2>About Us</h2>
        <p>Curious about the tools and techniques
          we're using to drive learning forward?
          Discover more about our work now.</p>
        <div className={styles.aboutBtn}>
          <FeatureButton link={"/about"} text={"Learn more"} bgcolor={"black"}/>
        </div>
      </div>
    </div>
  );
};

export default Main;