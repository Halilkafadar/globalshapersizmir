import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="pbY1q4F1-KfSpxOZ-ANTgFUTv-DrMk2ru26YKRKEmQ0" />
  <meta name="description" content="Global Shapers İzmir Hub - Gençlerin geleceği şekillendirdiği topluluk" />
  {/* Prefer PNG logo as favicon (modern browsers) and keep .ico fallback */}
  <link rel="icon" type="image/png" sizes="32x32" href="/images/gs-logo.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/gs-logo.png" />
  <link rel="apple-touch-icon" href="/images/gs-logo.png" />
  <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
