import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* // * Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Grape+Nuts&amp;family=Poppins:wght@300;400&amp;display=swap"
            rel="stylesheet"
          ></link>

          {/* // * Favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body data-color-theme="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
