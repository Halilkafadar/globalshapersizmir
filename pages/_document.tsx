import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
  {/* Google Search Console verification */}
  <meta name="google-site-verification" content="Bz7-z4lxwThEdQhft9IfEgSDiULn1kAolcoIdq7rDqI" />
  <meta name="description" content="Global Shapers Izmir Hub - Gençlerin geleceği şekillendirdiği topluluk" />
        {/* Load fonts with latin-ext subset to support Turkish characters */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&family=Inter:wght@400;600&display=swap&subset=latin-ext"
        />
  {/* Favicon - Standard Sizes */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="icon" type="image/x-icon" sizes="96x96" href="/favicon.ico" />
  <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
  <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
