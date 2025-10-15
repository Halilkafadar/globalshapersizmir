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
  {/* Favicon - High Quality PNG */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="96x96" href="/gs-logo-hakkimizda.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/gs-logo-hakkimizda.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/gs-logo-hakkimizda.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/gs-logo-hakkimizda.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
