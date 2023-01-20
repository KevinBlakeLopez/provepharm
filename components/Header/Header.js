import { useState } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "./Header.module.scss";

// import Link from "next/link";
// import { Container, NavigationMenu, SkipNavigationLink } from "..";s

let cx = classNames.bind(styles);

export default function Header({
  title = "Headless by WP Engine",
  description,
  menuItems,
}) {
  const [isNavShown, setIsNavShown] = useState(false);

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
      <header className="bg-slate-900 h-20  w-full flex justify-center">
        <div className="w-[70%] flex justify-between items-center">
          <Image
            src="/provepharm-logo-white.png"
            alt="me"
            height="55"
            width="130"
          />
          <ul className="text-white flex">
            <li className="mr-5">
              <a href="">About Us</a>
            </li>
            <li className="mr-5">
              <Link href="/products">Products</Link>
            </li>
            <li className="mr-5">
              <a href="">Events</a>
            </li>
            <li className="mr-5">
              <a href="">Contact Us</a>
            </li>
            <li className="mr-5">
              <a href="">Press Releases</a>
            </li>
            <li className="mr-5">
              <Link href="/posts">News</Link>
            </li>
          </ul>
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
