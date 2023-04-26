import React, {type FC, useState} from "react";
import styles from "./Header.module.css";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

type ToggleProps = () => void;

const Header: FC = () => {
    const [active, setActive] = useState(false);
    
    const toggle: ToggleProps = () => {
        setActive(!active);
    };
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.nameContainer}>
                <h1 className={styles.name}>
                    Briefly
                    <span className={styles.nameSpan}>GPT</span>
                </h1>
            </div>
            <div className={styles.menuContainer}>
                {active ? (
                    <CloseRoundedIcon className={styles.menuIcon} fontSize={"large"} onClick={toggle}/>
                ) : (
                    <MenuRoundedIcon className={styles.menuIcon} fontSize={"large"} onClick={toggle}/>
                )}
            </div>
        </div>
    );
};

export {Header};