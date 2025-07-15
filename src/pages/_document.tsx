import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="https://apply.devfolio.co/v2/sdk.js" 
          as="script"
          crossOrigin="anonymous"
        />
        {/* Add browser hints */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
