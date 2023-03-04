import "../faust.config";
import "../styles/global.scss";
import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";
import { FaustProvider } from "@faustwp/core";
import PasswordProtection from "../components/PasswordProtection";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FaustProvider pageProps={pageProps}>
        {/* <PasswordProtection password="provepharm"> */}
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} key={router.asPath} />
        {/* </PasswordProtection> */}
      </FaustProvider>
    </>
  );
}
