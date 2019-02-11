import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const { html, head, buildManifest } = ctx.renderPage()
    const styles = flush()
    return { html, head, styles, buildManifest }
  }

  public render() {
    return (
      <html lang="en">
        <Head>
          <style>{this.props.styles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
