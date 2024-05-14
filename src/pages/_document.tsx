import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en" className="h-100" data-bs-theme="dark">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#08070b" />
        <meta name="author" content="destyk." />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="d-flex h-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
