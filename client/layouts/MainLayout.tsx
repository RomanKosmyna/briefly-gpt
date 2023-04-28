import React, { type FC, type ReactNode } from 'react';
import { Header, Sidebar } from "@/components";
import { useAppSelector } from "@/hooks/redux-hook";

interface Props {
    children: ReactNode
}

const MainLayout: FC<Props> = ( { children }: Props ) => {
    const { sidebarActive } = useAppSelector(state => state.toggleReducer);
    
    return (
        <div className={"main-layout-container"}>
            <Header/>
            {sidebarActive && <Sidebar/>}
            {children}
        </div>
    );
};

export { MainLayout };