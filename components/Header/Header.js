import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Header({ menuItems }) {
  console.log(menuItems);

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
        className={`bg-white
         border-b-2 w-full p-5 ${isNavShown ? "fixed top-0 width:100%" : ""}`}
      >
        <div className="flex justify-between items-center">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src="/logo.jpeg" alt="me" height="55" width="130" />
            </Link>
          </div>

          <div>
            <div className="md:hidden" onClick={handleClick}>
              <div className="h-[2px] w-6 bg-black mb-1"></div>
              <div className="h-[2px] w-6 bg-black mb-1"></div>
              <div className="h-[2px] w-6 bg-black mb-1"></div>
            </div>

            <div
              className={
                isNavShown
                  ? `
                  fixed left-0 top-24 w-full h-full pt-5 pl-5 bg-white
                   z-50
                  md:relative md:top-[initial]
                  `
                  : "hidden md:block"
              }
            >
              <ul className="text-[#1e387d] md:flex">
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-4">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-4">
                  <Link href="/products">Products</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-4">
                  <Link href="/bludigo">Bludigo™</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-4">
                  <Link href="/press">Press Releases</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-4">
                  <Link href="/news">News</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-4">
                  <Link href="/events">Events</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-4">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
