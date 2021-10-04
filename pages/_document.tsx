import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { JSXElementConstructor, ReactElement, ReactFragment } from 'react'

interface GetInitialProps {
  html: string
  head?: JSX.Element[]
  styles?: ReactElement<unknown, string | JSXElementConstructor<unknown>>[] | ReactFragment
}

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<GetInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="fi">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
