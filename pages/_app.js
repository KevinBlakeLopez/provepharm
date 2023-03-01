import "../faust.config";
import { Inter } from "next/font/google";
import React from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "../styles/global.scss";
import PasswordProtection from "../components/PasswordProtection";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <PasswordProtection password="provepharm">
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} key={router.asPath} />
      </PasswordProtection>
    </FaustProvider>
  );
}
