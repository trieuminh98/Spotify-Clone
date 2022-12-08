import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { theme } from '../configs/theme';
import '../styles/dist.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <title>Spotify</title>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ConfigProvider>
  );
}

const Wrapper = ({ children }: any) => {
  useEffect(() => { }, []);

  return <>{children}</>;
};

