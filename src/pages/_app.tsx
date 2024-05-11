import Wrapper from '@feature/wrapper/wrapper';
import { useEffect, type ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '@assets/globals.scss';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const __next = document.getElementById('__next');
    if (__next !== null) {
      __next.className = 'w-100 h-100';
    }
  }, []);

  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
