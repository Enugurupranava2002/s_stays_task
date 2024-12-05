import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Saffronstays Frontend Task (Copy)</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
