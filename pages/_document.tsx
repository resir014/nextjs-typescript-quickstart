import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Next.js TypeScript Quickstart</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
