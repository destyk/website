import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-100" data-bs-theme="dark">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#08070b" />
        <meta
          name="description"
          content="DestyK i.e. Nikita Arefev - A software engineer working on high-load web applications and web infrastructure"
        />
        <meta name="keywords" content="Ключевые слова" />
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
}
