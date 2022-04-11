import "normalize.css"
import "styles/globals.scss"

import Head from "next/head"

import type { AppProps } from "next/app"

import Layout from "components/layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jacob Vogelbacher - Web Developer</title>
        <meta
          name="description"
          content="Jacob Vogelbacher is full-stack web developer based in central Florida."
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
