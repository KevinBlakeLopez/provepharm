import Image from "next/image";
import Link from "next/link";

import { gql } from "@apollo/client";

import { Main } from "../components";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ISI from "../components/ISI";
import Modal from "../components/Modal";

import bludigoProduct from "../public/bludigo_product_packaging_vial.png";
import bludigoDoctorsStock from "../public/bludigoDoctorsStock.jpeg";
import chart from "../public/chart_icon.png";
import clock from "../public/clock_icon_white.png";
import target from "../public/target_icon.png";
import table from "../public/table_2x.png";
import bludigoAnimation from "../public/bludigo-injection-animation.gif";

export default function Bludigo(props) {
  const { metaFields } = props.data.product;
  const data = props.data;
  const bludigo = metaFields;

  return (
    <>
      <SEO title={data.page.seo.title} description={data.page.seo.metaDesc} />
      <Header />
      <Main>
        <section
          id="hero"
          className="bg-gradient-to-l from-[#31023d] to-primary md:h-[1000px] lg:h-[750px] text-white lg:flex lg:justify-center items-center px-2 py-10 md:p-16"
        >
          <div className="lg:pr-32">
            <div className="px-4 md:px-0 mb-14 lg:mb-14">
              <p className="text-4xl md:text-6xl lg:text-7xl pb-6">
                See the difference.
              </p>
              <h1 className="text-2xl">
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
                width: "100%",
                height: "auto",
              }}
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
                  See Product Brochure
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
                Read more
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

// import { fallbackHttpConfig, gql } from "@apollo/client";
// import Image from "next/image";

// import SEO from "../components/SEO";
// import Container from "../components/Container";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import BannerBludigo from "../components/BannerBludigo";
// import BannerPeopleLives from "../components/BannerPeopleLives";
// import Timeline from "../components/Timeline";
// import BannerThirdWay from "../components/BannerThirdWay";

// import frontPageHero from "../public/frontPage-hero.jpeg";
// import frontPageBanner from "../public/frontPageBanner.jpeg";
// import award from "../public/frontPage-award.png";
// import gears from "../public/frontPage-gears.png";
// import hexagon from "../public/frontPage-hexagonArrows.png";
// import plant from "../public/frontPage-plant.png";
// import shield from "../public/frontPage-secure-shield.png";

// export default function Component(props) {
//   if (props.loading) {
//     return <>Loading...</>;
//   }

//   const home = props.data.page;

//   return (
//     <>
//       <SEO title={home.seo.title} description={home.seo.metaDesc} />
//       <Header />
//       <div className="relative h-[400px] md:h-[800px] bg-slate-700 flex justify-center xl:justify-start">
//         <Image
//           src={frontPageHero}
//           alt="Scientists performing surgery operating room"
//           className="mix-blend-soft-light 0 z-0"
//           quality={90}
//           priority={true}
//           fill
//           sizes="100vw"
//           style={{
//             objectFit: "cover",
//             objectPosition: "top",
//           }}
//         />
//         <div className="text-white mb-12 flex items-center z-1 relative">
//           <p className="xl:pl-64 text-3xl md:text-7xl font-light">
//             THERAPEUTICS AND <br /> DIAGNOSTICS THAT
//             <br />
//             <strong className="font-bold">
//               MAKE A <br /> DIFFERENCE IN <br /> PATIENTS' LIVES
//             </strong>
//           </p>
//         </div>
//       </div>

//       <Container size="lg" padding="px-10 py-10">
//         <div className="md:flex justify-between pt-12 mb-12 text-primary">
//           <section className="md:w-1/2 md:mr-2">
//             <h3 className="mb-4 text-4xl md:text-6xl">ABOUT US</h3>
//             <p className="text-xl mb-10 md:mb-0">
//               With an impressive legacy of healthcare innovations and solutions
//               spanning more than 20 years, Provepharm is at the forefront of
//               developing innovative drugs from well-known molecules that advance
//               therapeutic progress for the benefits of patients.
//             </p>
//           </section>

//           <figure className="md:w-1/2">
//             <Image
//               src={frontPageBanner}
//               style={{
//                 maxWidth: "100%",
//                 height: "auto",
//               }}
//             />
//           </figure>
//         </div>
//       </Container>

//       <div className="bg-primary text-white text-center text-xl md:p-10">
//         <Container size="md">
//           <h3 className="text-3xl md:text-4xl text-secondary mb-5">
//             TO ACCOMPLISH THIS MISSION, <br />
//             OUR STRATEGY IS BASED ON
//           </h3>
//           <h3 className="text-3xl md:text-5xl text-white mb-20">5 PILLARS</h3>

//           <div className="flex flex-col md:flex-row mb-12 gap-5">
//             <div className="w-full md:max-w-[200px] mb-10">
//               <figure className="flex flex-col items-center">
//                 <Image className="mb-3" src={plant} width={110} height={110} />

//                 <figcaption className="font-semibold pb-4">
//                   External
//                   <br />
//                   Growth
//                 </figcaption>
//               </figure>
//               <hr className="w-8 mx-auto pb-4" />
//               <p>With the acquisition of products or companies</p>
//             </div>

//             <div className="w-full md:max-w-[200px] mb-10">
//               <figure className="flex flex-col items-center">
//                 <Image className="mb-3" src={gears} width={110} height={110} />
//                 <figcaption className="font-semibold pb-4">
//                   Internal
//                   <br />
//                   Development
//                 </figcaption>
//               </figure>
//               <hr className="w-8 mx-auto pb-4" />
//               <p>By diversifying our product portfolio</p>
//             </div>

//             <div className="w-full md:max-w-[200px] mb-10">
//               <figure className="flex flex-col items-center">
//                 <Image
//                   className="mb-3"
//                   src={hexagon}
//                   width={110}
//                   height={110}
//                 />
//                 <figcaption className="font-semibold pb-4">
//                   Commercial
//                   <br />
//                   Transformation
//                 </figcaption>
//               </figure>
//               <hr className="w-8 mx-auto pb-4" />
//               <p>By expanding sales channels</p>
//             </div>

//             <div className="w-full md:max-w-[200px] mb-10">
//               <figure className="flex flex-col items-center">
//                 <Image className="mb-3" src={shield} width={110} height={110} />
//                 <figcaption className="font-semibold pb-4">
//                   Secure
//                   <br />
//                   Our API
//                 </figcaption>
//               </figure>
//               <hr className="w-8 mx-auto pb-4" />
//               <p>By securing our supply</p>
//             </div>

//             <div className="w-full md:max-w-[200px] mb-10">
//               <figure className="flex flex-col items-center">
//                 <Image className="mb-3" src={award} width={110} height={110} />
//                 <figcaption className="font-semibold pb-4">
//                   Operational
//                   <br />
//                   Excellence
//                 </figcaption>
//               </figure>
//               <hr className="w-8 mx-auto pb-4" />
//               <p>By capitalizing on the women and men of Provepharm</p>
//             </div>
//           </div>

//           <div className="">
//             <h4 className="text-3xl text-secondary text-center mb-4">
//               From drug discovery – to marketplace
//             </h4>

//             <p className="text-center">
//               Scientific experience combined with healthcare business savvy
//               enables Provepharm to add
//               <br />
//               value to all levels of the product lifecycle, from ground-breaking
//               discovery, to successfully bringing therapy and diagnostics to the
//               appropriate patient
//             </p>
//           </div>
//         </Container>
//       </div>

//       <BannerThirdWay />

//       <Container padding="py-0 px-10" margin="mb-20" size="sm">
//         <div className="md:flex justify-between text-xl text-primary">
//           <div className="md:w-1/2 mr-8">
//             <p className="mb-8">
//               At Provepharm, we innovate in order to understand each molecule's
//               full potential, to provide treatments that help patients.
//               Provepharm is an international private company with a global
//               presence in over 30 countries worldwide.
//             </p>

//             <p className="mb-8">
//               The company operates with integrity, as our goal is to have a
//               positive, significant and sustainable impact on our planet’s
//               ecosystem. As a responsible pharmaceutical company, we are
//               committed to adhering to the US legislation and regulations that
//               apply to our company's business. We act with honesty, transparency
//               and sincerity in a spirit of mutual respect.
//             </p>

//             <p>
//               Efficiency is at the heart of our development model, notably by
//               reducing time to market and broadening the accessibility of new
//               treatments.
//             </p>
//           </div>

//           <div className="md:w-1/2">
//             <p className="mb-8">
//               And, commitment is also demonstrated through the group’s social
//               initiatives, the ultimate expression of our values and our sense
//               of sharing.
//             </p>

//             <p className="mb-8">
//               The members of Provepharm are true trailblazers unafraid to
//               venture into new areas in order to define new standards of
//               innovation based on the development of the potential of existing
//               molecules. We demonstrate the definition of cutting edge every day
//               – as we strive to reinvent the model of pharmaceutical innovation
//               and contribute to the improvement of the hospital practices and
//               specialty care for the benefit of our customers and patients.
//             </p>

//             <p>
//               These values reflect our identity, our goals and embody our
//               corporate culture. They characterize every Provepharm employee and
//               are expressed through the daily actions of all our teams.
//             </p>
//           </div>
//         </div>
//       </Container>

//       <BannerPeopleLives />

//       <Timeline />

//       <BannerBludigo />

//       <Footer />
//     </>
//   );
// }

// Component.query = gql`
//   query Home {
//     page(id: "/home/", idType: URI) {
//       seo {
//         title
//         metaDesc
//       }
//     }
//   }
// `;
