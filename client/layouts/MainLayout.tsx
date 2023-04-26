import React, {type FC, type ReactNode} from 'react';
import {Header} from "@/components";

interface Props {
    children: ReactNode
}

const MainLayout: FC<Props> = ( {children}: Props ) => {
    return (
        <div className={"main-layout-container"}>
            <Header/>
            {children}
        </div>
    );
};

export {MainLayout};