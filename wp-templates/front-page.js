import { fallbackHttpConfig, gql } from "@apollo/client";
import Image from "next/image";

import SEO from "../components/SEO";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerBludigo from "../components/BannerBludigo";
import BannerPeopleLives from "../components/BannerPeopleLives";
import Timeline from "../components/Timeline";
import BannerThirdWay from "../components/BannerThirdWay";

import frontPageHero from "../public/frontPage-hero.jpeg";
import frontPageBanner from "../public/frontPageBanner.jpeg";
import award from "../public/frontPage-award.png";
import gears from "../public/frontPage-gears.png";
import hexagon from "../public/frontPage-hexagonArrows.png";
import plant from "../public/frontPage-plant.png";
import shield from "../public/frontPage-secure-shield.png";

export default function Component(props) {
  if (props.loading) {
    return <>Loading...</>;
  }

  const home = props.data.page;

  return (
    <>
      <SEO title={home.seo.title} description={home.seo.metaDesc} />
      <Header />
      <div className="relative h-[400px] md:h-[800px] bg-slate-700 flex justify-center xl:justify-start">
        <Image
          src={frontPageHero}
          alt="Scientists performing surgery operating room"
          className="mix-blend-soft-light 0 z-0"
          quality={90}
          priority={true}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
        <div className="text-white mb-12 flex items-center z-1 relative">
          <p className="xl:pl-64 text-3xl md:text-7xl font-light">
            THERAPEUTICS AND <br /> DIAGNOSTICS THAT
            <br />
            <strong className="font-bold">
              MAKE A <br /> DIFFERENCE IN <br /> PATIENTS' LIVES
            </strong>
          </p>
        </div>
      </div>

      <Container size="lg" padding="px-10 py-10">
        <div className="md:flex justify-between pt-12 mb-12 text-primary">
          <section className="md:w-1/2 md:mr-2">
            <h3 className="mb-4 text-4xl md:text-6xl">ABOUT US</h3>
            <p className="text-xl mb-10 md:mb-0">
              With an impressive legacy of healthcare innovations and solutions
              spanning more than 20 years, Provepharm is at the forefront of
              developing innovative drugs from well-known molecules that advance
              therapeutic progress for the benefits of patients.
            </p>
          </section>

          <figure className="md:w-1/2">
            <Image
              src={frontPageBanner}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </figure>
        </div>
      </Container>

      <div className="bg-[url('/.jpeg')] bg-cover bg-center bg-blend-soft-light bg-primary text-white text-center text-xl md:p-10">
        <Container size="md">
          <h3 className="text-3xl md:text-4xl text-secondary mb-5">
            TO ACCOMPLISH THIS MISSION, <br />
            OUR STRATEGY IS BASED ON
          </h3>
          <h3 className="text-3xl md:text-5xl text-white mb-20">5 PILLARS</h3>

          <div className="flex flex-col md:flex-row mb-12 gap-5">
            <div className="w-full md:max-w-[200px] mb-10">
              <figure>
                <Image
                  src={plant}
                  width={110}
                  height={110}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />

                <figcaption className="font-semibold pb-4">
                  External
                  <br />
                  Growth
                </figcaption>
              </figure>
              <hr className="w-8 mx-auto pb-4" />
              <p>With the acquisition of products or companies</p>
            </div>

            <div className="w-full md:max-w-[200px] mb-10">
              <figure>
                <Image
                  src={gears}
                  width={110}
                  height={110}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <figcaption className="font-semibold pb-4">
                  Internal
                  <br />
                  Development
                </figcaption>
              </figure>
              <hr className="w-8 mx-auto pb-4" />
              <p>By diversifying our product portfolio</p>
            </div>

            <div className="w-full md:max-w-[200px] mb-10">
              <figure>
                <Image
                  src={hexagon}
                  width={110}
                  height={110}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <figcaption className="font-semibold pb-4">
                  Commercial
                  <br />
                  Transformation
                </figcaption>
              </figure>
              <hr className="w-8 mx-auto pb-4" />
              <p>By expanding sales channels</p>
            </div>

            <div className="w-full md:max-w-[200px] mb-10">
              <figure>
                <Image
                  src={shield}
                  width={110}
                  height={110}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <figcaption className="font-semibold pb-4">
                  Secure
                  <br />
                  Our API
                </figcaption>
              </figure>
              <hr className="w-8 mx-auto pb-4" />
              <p>By securing our supply</p>
            </div>

            <div className="w-full md:max-w-[200px] mb-10">
              <figure>
                <Image
                  src={award}
                  width={110}
                  height={110}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <figcaption className="font-semibold pb-4">
                  Operational
                  <br />
                  Excellence
                </figcaption>
              </figure>
              <hr className="w-8 mx-auto pb-4" />
              <p>By capitalizing on the women and men of Provepharm</p>
            </div>
          </div>

          <div className="">
            <h4 className="text-3xl text-secondary text-center mb-4">
              From drug discovery – to marketplace
            </h4>

            <p className="text-center">
              Scientific experience combined with healthcare business savvy
              enables Provepharm to add
              <br />
              value to all levels of the product lifecycle, from ground-breaking
              discovery, to successfully bringing therapy and diagnostics to the
              appropriate patient
            </p>
          </div>
        </Container>
      </div>

      <BannerThirdWay />

      <Container padding="py-0 px-10" margin="mb-20" size="sm">
        <div className="md:flex justify-between text-xl text-primary">
          <div className="md:w-1/2 mr-8">
            <p className="mb-8">
              At Provepharm, we innovate in order to understand each molecule's
              full potential, to provide treatments that help patients.
              Provepharm is an international private company with a global
              presence in over 30 countries worldwide.
            </p>

            <p className="mb-8">
              The company operates with integrity, as our goal is to have a
              positive, significant and sustainable impact on our planet’s
              ecosystem. As a responsible pharmaceutical company, we are
              committed to adhering to the US legislation and regulations that
              apply to our company's business. We act with honesty, transparency
              and sincerity in a spirit of mutual respect.
            </p>

            <p>
              Efficiency is at the heart of our development model, notably by
              reducing time to market and broadening the accessibility of new
              treatments.
            </p>
          </div>

          <div className="md:w-1/2">
            <p className="mb-8">
              And, commitment is also demonstrated through the group’s social
              initiatives, the ultimate expression of our values and our sense
              of sharing.
            </p>

            <p className="mb-8">
              The members of Provepharm are true trailblazers unafraid to
              venture into new areas in order to define new standards of
              innovation based on the development of the potential of existing
              molecules. We demonstrate the definition of cutting edge every day
              – as we strive to reinvent the model of pharmaceutical innovation
              and contribute to the improvement of the hospital practices and
              specialty care for the benefit of our customers and patients.
            </p>

            <p>
              These values reflect our identity, our goals and embody our
              corporate culture. They characterize every Provepharm employee and
              are expressed through the daily actions of all our teams.
            </p>
          </div>
        </div>
      </Container>

      <BannerPeopleLives />

      <Timeline />

      <BannerBludigo />

      <Footer />
    </>
  );
}

Component.query = gql`
  query Home {
    page(id: "/home/", idType: URI) {
      seo {
        title
        metaDesc
      }
    }
  }
`;
