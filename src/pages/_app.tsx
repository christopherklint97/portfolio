import type { AppProps } from "next/app";
import { Layout } from "../components";
import "../styles/global.css";
import "../styles/prism.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="light"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
