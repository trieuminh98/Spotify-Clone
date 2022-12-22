import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from 'redux/actions/mainDashboardAction';
import store, { AppDispatch } from 'redux/store';
import { theme } from '../configs/theme';
import '../styles/dist.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <title>Spotify</title>
        </Head>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Provider>
    </ConfigProvider>
  );
}

const Wrapper = ({ children }: any) => {
  const dispath = useDispatch<AppDispatch>();

  useEffect(() => {
    dispath(getAccessToken({}));
  }, []);

  return <>{children}</>;
};
