import Head from "next/head";

export default function Custom404() {
    return (
        <div className={"not-found-container"}>
            <Head>
                <title>Not Found</title>
            </Head>
            <h1 className={"not-found-error"}>404</h1>
            <h2 className={"not-found-text"}>Page Not Found</h2>
        </div>
    );
}