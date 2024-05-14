import Wrapper from '@feature/wrapper/wrapper';
import { type ReactNode } from 'react';
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
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
