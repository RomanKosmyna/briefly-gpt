import { type FC } from 'react';
import styles from "./Sidebar.module.css";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hook";
import { toggleActions } from "@/redux";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Sidebar: FC = () => {
    const dispatch = useAppDispatch();
    const { sidebarActive } = useAppSelector(state => state.toggleReducer);

    const toggle = (): void => {
        dispatch(toggleActions.toggleSidebar(!sidebarActive));
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.navigationContainer}>

            </div>
            <CloseRoundedIcon className={styles.menuIcon} fontSize={"large"} onClick={toggle}/>
        </div>
    );
};

export { Sidebar };