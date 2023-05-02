import { type FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import { toggleActions } from '@/redux';

import BorderRight from '@/components/BorderRight/BorderRight';
import BorderLeft from '@/components/BorderLeft/BorderLeft';

import styles from './SummaryGuide.module.css';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const SummaryGuide: FC = () => {
  const dispatch = useAppDispatch();
  const { summaryGuideActive } = useAppSelector(state => state.toggleReducer);
  
  const toggle = () => {
    dispatch(toggleActions.toggleSummaryGuide(!summaryGuideActive));
  };
  
  return (
    <div className={styles.mainContainer}>
      <BorderRight />
      <div className={styles.guideContainer}>
        <h3>How it works</h3>
        <CloseRoundedIcon
          className={styles.closeIcon}
          fontSize={'large'}
          onClick={() => { toggle(); }}
        />
        <ol>
          <li>Paste the link you want to summarize into the chat.</li>
          <li>Click the "Send" button.</li>
          <li>Wait a few seconds for the summary to generate.</li>
          <li>Read the summary and gain a better understanding of the content.</li>
        </ol>
      </div>
      <BorderLeft />
    </div>
  );
};

export default SummaryGuide;