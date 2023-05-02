import { type FC } from 'react';

import FeatureButton from '@/components/FeatureButton/FeatureButton';
import MainSection from '@/components/MainSection/MainSection';
import BorderLeft from '@/components/BorderLeft/BorderLeft';

import styles from './Main.module.css';
import BorderRight from '@/components/BorderRight/BorderRight';

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
          <FeatureButton link={'/summary'}
                         text={<>
                           <span>Quick summary, </span>
                           <br />
                           <span>big insights</span>
                         </>}
                         bgcolor={'orange'}
          />
        </div>
      </div>
      <BorderLeft />
      <MainSection
        name={'Our Blog'}
        content={'Stay updated with our latest news and insights on our blog.'}
        link={'/blog'}
        text={'Read more'}
      />
      <BorderRight />
      <MainSection
        name={'About Us'}
        content={'Curious about the tools and techniques\n' +
          '          we\'re using to drive learning forward?\n' +
          '          Discover more about our work now.'}
        link={'/about'}
        text={'Learn more'}
        bg={"yes"}
      />
      <BorderLeft />
    </div>
  );
};

export default Main;