import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="pbY1q4F1-KfSpxOZ-ANTgFUTv-DrMk2ru26YKRKEmQ0" />
        <meta name="description" content="Global Shapers İzmir Hub - Gençlerin geleceği şekillendirdiği topluluk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
