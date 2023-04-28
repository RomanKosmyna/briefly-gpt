import Head from "next/head";
import { type FC } from 'react';

const Custom404: FC = (): JSX.Element => {
    return (
        <div className={"not-found-container"}>
            <Head>
                <title>Not Found</title>
            </Head>
            <h1 className={"not-found-error"}>404</h1>
            <h2 className={"not-found-text"}>Page Not Found</h2>
        </div>
    );
};

export default Custom404;