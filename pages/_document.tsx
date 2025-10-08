import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="pbY1q4F1-KfSpxOZ-ANTgFUTv-DrMk2ru26YKRKEmQ0" />
  <meta name="description" content="Global Shapers İzmir Hub - Gençlerin geleceği şekillendirdiği topluluk" />
  {/* Use the provided .ico as primary favicon (best browser compatibility) */}
  <link rel="icon" href="/gs-logo-hakkimizda.ico" type="image/x-icon" />
  {/* PNG fallbacks and apple touch icon */}
  <link rel="icon" type="image/png" sizes="32x32" href="/images/gs-logo.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/gs-logo.png" />
  <link rel="apple-touch-icon" href="/images/gs-logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
