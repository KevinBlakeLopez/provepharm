import Image from "next/image";
import Link from "next/link";

import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

import { Main } from "../../components";
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ISI from "../../components/ISI";
import Modal from "../../components/Modal";

import bludigoProduct from "../../public/bludigo_product_packaging_vial.png";
import bludigoDoctorsStock from "../../public/bludigoDoctorsStock.jpeg";
import chart from "../../public/chart_icon.png";
import clock from "../../public/clock_icon_white.png";
import target from "../../public/target_icon.png";
import table from "../../public/table_2x.png";
import bludigoAnimation from "../../public/bludigo-injection-animation.gif";

export default function Bludigo() {
  const { data, loading } = useQuery(Bludigo.query);

  if (loading) {
    return <></>;
  }

  const { metaFields } = data.product;
  const bludigo = metaFields;

  return (
    <>
      <SEO title={data.page.seo.title} description={data.page.seo.metaDesc} />
      <Header />
      <Main>
        {/* adjust height of section element for mobile to make sure the Image component doesn't overflow */}
        <section
          id="hero"
          className="bg-gradient-to-l from-[#31023d] to-primary text-white lg:flex lg:justify-center items-center px-2 sm:p-20 py-10 lg:p-16 flex flex-col-reverse lg:flex-row"
        >
          <div className="lg:pr-32">
            <div className="px-4 md:px-0 my-10 md:mt-0 lg:mb-14">
              <p className="text-4xl md:text-6xl lg:text-7xl pb-4 sm:pb-6">
                See the difference.
              </p>
              <h1 className="text-xl sm:text-2xl">
                Bludigo™ (indigotindisulfonate sodium injection, USP)
              </h1>
            </div>
            <Link
              href="products/bludigo-indigotindisulfonate-sodium"
              className="inline-block border-2 border-white p-4 mb-8 rounded text-center text-2xl text-white w-full lg:w-auto "
            >
              View Product Information
            </Link>
          </div>
          <figure className="lg:w-[740px]">
            <Image
              src={bludigoProduct}
              // placeholder="blur"
              quality={50}
              priority
              sizes="100vw"
              style={{
                width: "1200px",
                height: "auto",
              }}
              alt="the bludigo dye inside its Provepharm box packaging"
            />
          </figure>
        </section>
        <div>
          <Container>
            <section id="video-section" className="text-primary my-10 md:my-15">
              <h2 className="text-2xl md:text-3xl mb-20 md:mb-10 md:pb-12">
                Introducing Bludigo™ (indigotindisulfonate sodium injection,
                USP) the first and only FDA-approved injectable indigo carmine
                diagnostic dye.
              </h2>
              <figure className="flex flex-col justify-center items-center">
                <Image
                  src={bludigoAnimation}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  alt="a video of bludigo dye being injected inside urinary system"
                />
                <figcaption className="mt-3">
                  Urine Jet post - Bludigo™ application
                </figcaption>
              </figure>
            </section>
          </Container>
        </div>
        <section className="lg:flex">
          <figure className="flex lg:w-1/2 md:order-2">
            <Image
              src={bludigoDoctorsStock}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              alt="a group of doctors surrounding an operating room table"
            />
          </figure>
          <div className="bg-gradient-to-b from-primary to-[#020224] text-white font-light lg:w-1/2 md:order-1">
            <section className="lg:max-w-[543px] lg:float-right py-12 md:py-20 lg:py-14 px-10 md:px-10 lg:px-12 lg:pl-0 md:-mt-2">
              <h3 className="text-2xl md:text-[3.3rem] tracking-wide leading-extra-tight mb-6">
                Not just any blue dye.
              </h3>
              <p className="text-lg md:text-2xl">
                Bludigo™ is a diagnostic dye indicated for use as a
                visualization aid in the cystoscopic assessment of the integrity
                of the ureters in adults following urological and gynecological
                open, robotic, or endoscopic surgical procedures.{" "}
              </p>
            </section>
          </div>
        </section>

        <section>
          <Container size="sm" padding="px-5 py-20 md:py-28">
            <p className="text-2xl md:text-4xl text-primary mb-24">
              Bludigo™ has a deep blue color that significantly aids
              visualization when assessing ureter patency.
            </p>
            <div className="md:mx-auto">
              <figure className="flex mb-20 md:items-center">
                <div className="w-2/3 md:w-7/12 lg:w-1/4 ml-[5px] lg:ml-[10px]">
                  <Image
                    src={chart}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    alt="an icon of a chart"
                  />
                </div>
                <div className="text-primary ml-[20px] md:ml-[65px] lg:ml-[114px]">
                  <figcaption className="text-lg md:text-2xl">
                    83% of the ureter patency assessments in the Bludigo™
                    clinical trial were reported as visualizing good or striking
                    color contrast in the ureter jet stream.
                  </figcaption>
                </div>
              </figure>
              <figure className="flex md:items-center">
                <div className="w-full md:w-11/12 lg:w-5/12">
                  <Image
                    src={target}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    alt="a target icon"
                  />
                </div>
                <div className="text-primary ml-[20px] md:ml-[60px] lg:ml-[105px]">
                  <figcaption className="text-lg md:text-2xl">
                    In 90% of urologic and gynecologic surgical procedures
                    (N=49) in the Bludigo™ clinical trial, physicians agreed
                    that their ability to assess ureteral patency was improved
                    following the use of Bludigo™ compared to saline.
                  </figcaption>
                  <p className="text-primary italic">
                    Data on file PVP-19ICO1 clinical study report.
                  </p>
                </div>
              </figure>
            </div>
          </Container>
          <div className="hidden md:block md:mb-16">
            <figure className="lg:max-w-[1000px] mx-auto">
              <Image
                src={table}
                alt="a table showing information from surgeons about using bludigo"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </figure>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#31023d] to-primary py-12 px-4 md:py-18 md:px-0">
          <Container size="md">
            <h3 className="text-2xl md:text-5xl text-white mb-4 md:mb-24 md:ml-24 lg:ml-32 md:w-3/5">
              Fast detection. Bludigo™ is excreted in the urine quickly.
            </h3>
            <figure className="flex md:w-5/6 lg:w-2/3 md:mx-auto items-center">
              <div className="w-1/2 lg:w-1/2">
                <Image
                  src={clock}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt="a clock icon"
                />
              </div>
              <figcaption className="text-lg md:text-3xl text-white ml-12 mt-8 md:mt-0">
                After injection, the blue color at the ureteral orifices is
                detectable within 4–9 minutes.
              </figcaption>
            </figure>
            {bludigo.trifold.mediaItemUrl ? (
              <div>
                <a
                  href={bludigo.trifold.mediaItemUrl}
                  className="block border-2 border-white p-4 mt-24 mx-auto rounded text-center text-2xl text-white w-full md:max-w-[350px] md:2/3 lg:w-1/2"
                >
                  See Product Brochure{" "}
                  {/* <img
                  class="inline-block ml-1 h-7"
                  src="/pdf-icon-white.png"
                  alt="pdf"
                /> */}
                </a>
              </div>
            ) : (
              <span className="inline-block border-2 border-white p-4 mb-8 rounded text-center text-2xl text-white w- lg:w-auto ">
                Product Brochure coming soon!
              </span>
            )}
          </Container>
        </section>
        <hr className="mb-16" />
        <div className="md:flex justify-evenly">
          <section className="mb-16 px-4 md:px-0 text-center">
            <p className="mb-8 text-xl md:text-3xl font-medium">
              Prescribing Information
            </p>
            <Modal
              text="Read more"
              externalLink="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=73f246c4-b127-452e-856f-134b56cb8870"
              classes="bg-primary py-4 px-10 text-white text-xl md:text-2xl"
            />
          </section>
          <section className="mb-16 px-4 md:px-0 text-center">
            <p className="mb-12 text-xl md:text-3xl font-medium">
              Bludigo Sales Sheet
            </p>
            {bludigo.salesSheet.mediaItemUrl ? (
              <a
                className="bg-primary py-4 px-10 text-white text-xl md:text-2xl"
                href={bludigo.salesSheet.mediaItemUrl}
              >
                Read Sales Sheet
              </a>
            ) : (
              <span>Product Sales Sheet coming soon!</span>
            )}
          </section>
        </div>
        <section className="bg-primary flex flex-col md:flex-row justify-between items-center p-10 md:py-16 lg:w-3/4 mx-auto mb-16">
          <p className="text-white text-2xl md:text-3xl mb-12 md:mb-0 text-center md:text-left md:mr-8">
            Learn more about Bludigo™ (indigotindisulfonate sodium injection,
            USP){" "}
          </p>
          <Link
            href="/contact"
            className="border-2 border-white text-white text-xl py-4 px-8 min-w-[13rem] text-center"
          >
            CONTACT US
          </Link>
        </section>
        <ISI importantsafetyinformation={bludigo.importantsafetyinformation} />
      </Main>
      <Footer disclaimer />
    </>
  );
}

Bludigo.query = gql`
  query {
    page(id: "/bludigo", idType: URI) {
      seo {
        title
        metaDesc
      }
    }
    product(id: "cG9zdDozODU=") {
      metaFields {
        importantsafetyinformation
        salesSheet {
          mediaItemUrl
        }
        trifold {
          mediaItemUrl
        }
      }
    }
  }
`;

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Bludigo,
    revalidate: 10,
  });
}
