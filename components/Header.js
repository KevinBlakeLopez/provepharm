import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Header() {
  const [isNavShown, setIsNavShown] = useState(false);
  const handleClick = () => {
    setIsNavShown(!isNavShown);
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TZWF1H1MKM"
      />
      <Script
        nonce="2726c7f26c"
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TZWF1H1MKM', {
          page_path: window.location.pathname,});
          `,
        }}
      />
      <header
        className={`bg-white relative
       border-b-2 w-full p-5 ${
         isNavShown ? "h-full absolute overflow-hidden top-0 width:100%" : ""
       }`}
      >
        <div className="flex justify-between items-center">
          <div className="cursor-pointer">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="me"
                height="55"
                width="130"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
          </div>

          <div>
            <div className="md:hidden p-5" onClick={handleClick}>
              <div className="h-[2px] w-7 bg-black mb-[6px]"></div>
              <div className="h-[2px] w-7 bg-black mb-[6px]"></div>
              <div className="h-[2px] w-7 bg-black mb-[6px]"></div>
            </div>

            <div
              className={
                isNavShown
                  ? `
                w-full h-full overflow-hidden fixed left-0 top-24 pt-7 pl-7 bg-white z-50 md:relative md:top-[initial] border-t-2 border-solid border-primary
                `
                  : "hidden md:block"
              }
            >
              <ul className="text-[#1e387d] md:flex">
                <li className="text-2xl md:text-base mb-6 md:mb-0 md:mr-4">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="text-2xl md:text-base mb-6 md:mb-0 md:mr-4">
                  <Link href="/products">Products</Link>
                </li>
                <li className="text-2xl md:text-base mb-6 md:mb-0 md:mr-4">
                  <Link href="/bludigo">Bludigo™</Link>
                </li>
                <li className="text-2xl md:text-base mb-6 md:mb-0 md:mr-4">
                  <Link href="/press-releases">Press Releases</Link>
                </li>
                <li className="text-2xl md:text-base mb-6 md:mb-0 md:mr-4">
                  <Link href="/news">News</Link>
                </li>
                <li className="text-2xl md:text-base mb-6 md:mb-0 md:mr-4">
                  <Link href="/events">Events</Link>
                </li>
                <li className="text-2xl md:text-base mb-6 md:mb-0 md:mr-4">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <style global jsx>{`
        body {
          overflow: ${isNavShown ? "hidden" : "auto"};
        }
      `}</style>
    </>
  );
}
