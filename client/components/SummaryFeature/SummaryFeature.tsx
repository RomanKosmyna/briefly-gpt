import { type FC } from 'react';
import { useAppSelector } from '@/hooks/redux-hook';

import SummaryGuide from '@/components/SummaryGuide/SummaryGuide';
import SummaryChat from '@/components/SummaryChat/SummaryChat';

import styles from './SummaryFeature.module.css';

const SummaryFeature: FC = () => {
  const { summaryGuideActive } = useAppSelector(state => state.toggleReducer);

  return (
    <div className={styles.mainContainer}>
      <h2>Get a
        <span className={styles.highlightOrange}> quick</span> summary of
        <span className={styles.highlightOrange}> any </span>
        article</h2>
      {summaryGuideActive && <SummaryGuide />}
      <SummaryChat />
    </div>
  );
};

export default SummaryFeature;