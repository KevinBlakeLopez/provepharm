import { useState } from "react";
import { Container, NavigationMenu, SkipNavigationLink } from "..";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "./Header.module.scss";

let cx = classNames.bind(styles);

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
         w-full p-5 ${isNavShown ? "fixed top-0 width:100%" : ""}`}
      >
        <div className="flex justify-between items-center">
          <Image src="/logo.jpeg" alt="me" height="55" width="130" />

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
              <ul className="text-blue-900 md:flex">
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-2">
                  <a href="">About Us</a>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-3">
                  <Link href="/products">Products</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-3">
                  <Link href="/events">Events</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-3">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-3">
                  <Link href="/press-releases">Press Releases</Link>
                </li>
                <li className="text-lg md:text-base mb-3 md:mb-0 md:mr-3">
                  <Link href="/posts">News</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

// return (
//   <header className={cx('component')}>
//     <SkipNavigationLink />
//       <Container>
//         <div className={cx('navbar')}>
//           <div className={cx('brand')}>
//             <Link href="/">
//               <a className={cx('title')}>{title}</a>
//             </Link>
//             {description && <p className={cx('description')}>{description}</p>}
//           </div>
//           <button
//             type="button"
//             className={cx('nav-toggle')}
//             onClick={() => setIsNavShown(!isNavShown)}
//             aria-label="Toggle navigation"
//             aria-controls={cx('primary-navigation')}
//             aria-expanded={isNavShown}
//           >
//             ☰
//           </button>
//           <NavigationMenu
//             className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
//             menuItems={menuItems}
//           />
//       </div>
//     </Container>
//   </header>
// );
// }
