import type { AppProps } from 'next/app';
import { setupStore } from "@/redux/store";
import { Provider } from "react-redux";

import '@/styles/globals.css';

import { MainLayout } from "@/layouts";

const store = setupStore();

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
      <Provider store={store}>
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
      </Provider>
  );
};

export default App;