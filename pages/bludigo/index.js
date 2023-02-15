import Image from "next/image";
import Link from "next/link";

import { gql, useQuery } from "@apollo/client";

import { Main } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ISI from "../../components/ISI";
import Modal from "../../components/Modal";

import bludigoProduct from "../../public/bludigo_product_image.png";
import bludigoDoctorsStock from "../../public/bludigoDoctorsStock.jpeg";
import chart from "../../public/chart_icon_2x.png";
import clock from "../../public/clock_icon_2x.png";
import target from "../../public/target_icon_2x.png";
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
      <Header />
      <Main>
        {/* adjust height of section element for mobile to make sure the Image component doesn't overflow */}
        <section
          id="hero"
          className="bg-gradient-to-b from-[#4E157D] to-[#230A2F] md:h-[1000px] lg:h-[750px] text-white lg:flex items-center px-2 py-10 md:p-16"
        >
          <div className="lg:pr-32">
            <div className="px-4 md:px-0">
              <p className="text-4xl lg:text-7xl pb-6">See the difference.</p>
              <h1 className="text-2xl pb-9 md:pb-24">
                Bludigo™ (indigotindisulfonate sodium injection, USP)
              </h1>
            </div>
            <div className="bg-[#230A2F] p-6 md:p-8">
              <h5 className="text-2xl md:text-3xl text-white mb-4 ">
                Product Information
              </h5>
              <Link href="products/bludigo-indigotindisulfonate-sodium-injection-usp">
                <a className="underline text-xl text-white ">
                  Click to read more
                </a>
              </Link>
            </div>
          </div>
          <figure className="w-5/6 lg:w-1/2">
            <Image
              // style={{ width: "75%", height: "auto" }}
              src={bludigoProduct}
              layout="responsive"
              priority
            />
          </figure>
        </section>
        <div>
          <Container>
            <section id="video-section" className="text-[#4E157D] md:my-20">
              <h2 className="md:text-3xl mb-12 md:mb-0 md:pb-12">
                Introducing Bludigo™ (indigotindisulfonate sodium injection,
                USP) the first and only FDA-approved injectable indigo carmine
                diagnostic dye.
              </h2>
              <figure className="flex flex-col justify-center items-center">
                <Image src={bludigoAnimation} />
                <figcaption className="mt-2 text-sm">
                  Bludigo™ Dye Being Injected
                </figcaption>
              </figure>
            </section>
          </Container>
        </div>
        <section className="lg:flex mb-16 md:mb-40">
          <figure className="flex lg:w-1/2 md:order-2">
            <Image src={bludigoDoctorsStock} />
          </figure>
          <div className="bg-gradient-to-b from-[#4E157D] to-[#230A2F] text-white font-light lg:w-1/2 md:order-1">
            <section className="lg:max-w-[543px] lg:float-right py-14 md:py-32 px-12 lg:pl-0 -mt-2">
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

        <section className="px-12 lg:px-0 md:mb-40">
          <p className="text-2xl md:text-5xl text-[#4E157D] lg:w-2/3 md:ml-32 mb-16">
            Bludigo™ has a deep blue color that significantly aids visualization
            when assessing ureter patency.
          </p>
          <div className="md:3/4 lg:w-2/3 md:mx-auto mb-20">
            <figure className="flex mb-12">
              <div className="w-1/2 md:2/3 lg:w-1/3">
                <Image src={chart} layout="responsive" />
              </div>
              <figcaption className="text-lg md:text-2xl text-[#4E157D] ml-[20px] md:ml-[105px]">
                83% of the ureter patency assessments in the Bludigo™ clinical
                trial were reported as visualizing good or striking color
                contrast in the ureter jet stream.
              </figcaption>
            </figure>
            <figure>
              <div className="flex">
                <div className="w-5/6 lg:w-1/2">
                  <Image src={target} layout="responsive" />
                </div>
                <div className="text-[#4E157D] ml-[20px] md:ml-[105px]">
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
              </div>
            </figure>
          </div>
        </section>
        <div className="hidden md:block md:mb-16">
          <figure className="lg:w-5/6 mx-auto">
            <Image src={table} layout="responsive" />
          </figure>
        </div>

        <section className="bg-gradient-to-b from-[#4E157D] to-[#230A2F] py-12 px-8 md:py-36 md:px-0">
          <h3 className="text-2xl md:text-5xl text-white mb-4 md:mb-16 md:ml-24 lg:ml-32 md:w-3/5">
            Fast detection. Bludigo™ is excreted in the urine quickly.
          </h3>
          <figure className="flex md:w-5/6 lg:w-2/3 md:mx-auto items-center">
            <div className="w-1/2 md:w-full">
              <Image src={clock} />
            </div>
            <figcaption className="text-lg md:text-3xl text-white ml-8 mt-8 md:mt-0">
              After injection, the blue color at the ureteral orifices is
              detectable within 4–9 minutes.
            </figcaption>
          </figure>
        </section>
        <hr className="mb-16" />
        <section className="mb-16 px-4 md:px-0 text-center">
          <p className="mb-8 text-xl md:text-3xl font-medium">
            Read the full prescribing information
          </p>
          <Modal
            text="LEARN MORE"
            externalLink="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=73f246c4-b127-452e-856f-134b56cb8870"
            classes="bg-gradient-to-b from-[#4E157D] to-[#230A2F] py-4 px-10 text-white text-xl md:text-2xl"
          />
        </section>
        <section className="bg-gradient-to-b from-[#4E157D] to-[#230A2F] flex flex-col md:flex-row  items-center p-10 md:py-16 lg:w-3/4 mx-auto mb-16">
          <p className="text-white text-2xl md:text-4xl mb-12 md:mb-0 text-center md:text-left">
            Learn more about Bludigo™ (indigotindisulfonate sodium injection,
            USP){" "}
          </p>
          <Link href="/contact">
            <a className="bg-white text-[#4E157D] text-xl py-4 px-8 h-14 min-w-[13rem]">
              CONTACT US
            </a>
          </Link>
        </section>
        <ISI importantsafetyinformation={bludigo.importantsafetyinformation} />
      </Main>
      <Footer />
    </>
  );
}

Bludigo.query = gql`
  query {
    product(id: "cG9zdDozODU=") {
      metaFields {
        importantsafetyinformation
      }
    }
  }
`;
