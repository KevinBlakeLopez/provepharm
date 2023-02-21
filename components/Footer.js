import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Footer({ disclaimer }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="lg:mb-10 h-[1px] w-full bg-slate-900"></div>
      <Container size="xl">
        <div className="lg:py-4 lg:px-10 mb-10 md:flex md:justify-between">
          <div className="mb-10 max-w-[300px] md:mr-20">
            <div className="mb-4 flex flex-col items-center md:items-start">
              <Image src="/logo.jpeg" alt="me" height="80" width="200" />
              <p className="mt-10 text-center md:text-start">
                Provepharm is driven to improve the lives of our patients,
                employees, and the ecosystem!
              </p>
            </div>
          </div>

          <div className="mt-5 md:mt-0 flex flex-col md:flex-row text-lg text-[#1e387d]">
            <ul className="md:mr-20">
              <li className="mb-3">
                <Link className="" href="/about">
                  About
                </Link>
              </li>
              <li className="mb-3">
                <Link className="" href="/products">
                  Products
                </Link>
              </li>
              <li className="mb-3">
                <Link className="" href="/bludigo">
                  Bludigo™
                </Link>
              </li>
              <li className="mb-3">
                <Link className="ted" href="/press">
                  Press Releases
                </Link>
              </li>
              <li className="mb-3">
                <Link className="" href="/news">
                  News
                </Link>
              </li>
              <li className="mb-3">
                <Link className="" href="/events">
                  Events
                </Link>
              </li>
            </ul>
            <div className="mb-6"></div>
            <ul className="md:mr-20">
              <li className="mb-3">
                <Link className="" href="/contact">
                  Report an adverse event
                </Link>
              </li>
              <li>
                <Link className="" href="/compliance">
                  Compliance & Code of Conduct
                </Link>
              </li>
            </ul>
            <div className="mb-6"></div>
            <ul>
              <li className="mb-3">
                <Link className="" href="/terms">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link className="" href="/privacy">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="bg-[#1e387d] text-white py-10 px-5 flex justify-center">
        <p className="text-center">{`${year} Provepharm Inc., All rights reserved`}</p>
      </div>
      <div className={disclaimer ? "h-52" : ""}></div>
    </footer>
  );
}
