import { type FC, useEffect, useState } from 'react';
import styles from "./Header.module.css";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hook";
import { toggleActions } from "@/redux";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Header: FC = () => {
  const [ isScrolled, setIsScrolled ] = useState(false);
    const dispatch = useAppDispatch();
    const { sidebarActive } = useAppSelector(state => state.toggleReducer);

    const toggle = (): void => {
        dispatch(toggleActions.toggleSidebar(!sidebarActive));
    };
    
    useEffect(() => {
      const scroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
      };
      window.addEventListener("scroll", scroll);
      return () => { window.removeEventListener("scroll", scroll); };
    }, []);

    return (
        <div className={`${styles.mainContainer} ${isScrolled ? styles.border: ""}`}>
            <div className={styles.nameContainer}>
                <h1 className={styles.logo}>
                  <span>B</span>
                  <span>r</span>
                  <span>i</span>
                  <span>e</span>
                  <span>f</span>
                  <span>l</span>
                  <span>y</span>
                  <span className={styles.nameSpan}>GPT</span>
                </h1>
            </div>
            <div className={styles.menuContainer}>
                <MenuRoundedIcon className={styles.menuIcon} fontSize={"large"} onClick={toggle}/>
            </div>
        </div>
    );
};

export { Header };