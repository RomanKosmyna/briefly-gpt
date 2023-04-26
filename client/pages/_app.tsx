import '@/styles/globals.css';
import React from "react";
import type { AppProps } from 'next/app';
import {MainLayout} from "@/layouts";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
  );
}
