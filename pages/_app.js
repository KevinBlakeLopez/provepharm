import "../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import { Header } from "../components/Header";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Header />
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
