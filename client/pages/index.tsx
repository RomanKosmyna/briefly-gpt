import { type FC } from "react";
import Head from 'next/head';
// import axios from "axios";

import Main from "@/components/Main/Main";

const Home: FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Briefly GPT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <Main />
    </>
  );
};

// export const getServerSideProps = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.data;
//
//     return {
//         props: {
//             data,
//         },
//     };
// };

export default Home;
