import { useQuery, gql } from "@apollo/client";
import * as MENUS from "../../constants/menus";
import { BlogInfoFragment } from "../../fragments/GeneralSettings";
import Image from "next/image";
import {
  Header,
  Footer,
  Main,
  NavigationMenu,
  Hero,
  SEO,
} from "../../components";
import bludigoProduct from "../../public/bludigo_product_image.png";
import videoThumbnail from "../../public/video_thumbnail.png";
import doctorsStock from "../../public/bludigo_doctors_stock.jpeg";
import Container from "../../components/Container";
import chart from "../../public/chart_icon_2x.png";
import clock from "../../public/clock_icon_2x.png";
import target from "../../public/target_icon_2x.png";
import table from "../../public/table_2x.png";

export default function Bludigo() {
  const { data, loading } = useQuery(Bludigo.query, {
    variables: Bludigo.variables(),
  });

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Header />
      <Main>
        <section
          id="hero"
          className="bg-primary h-[400px] md:h-[80vh] text-white md:flex items-center"
        >
          <div className="md:px-32">
            <p className="text-3xl lg:text-8xl pb-6">See the difference.</p>
            <h1 className="text-xl">
              Bludigo™ <br /> (indigotindisulfonate sodium injection, USP)
            </h1>
          </div>
          <figure>
            <Image src={bludigoProduct} />
          </figure>
        </section>
        <Container>
          <section id="video-section" className="text-primary md:my-20">
            <h2 className="text-3xl md:pb-12">
              Introducing Bludigo™ (indigotindisulfonate sodium injection, USP)
              the first and only FDA-approved injectable indigo carmine
              diagnostic dye.
            </h2>
            <figure>
              <Image src={videoThumbnail} />
            </figure>
          </section>
        </Container>
        <section className="md:flex mb-20">
          <div className="bg-primary md:w-5/12 text-white md:px-32 md:py-28">
            <h3 className="text-6xl pb-12">Not just any blue dye.</h3>
            <p className="text-2xl">
              Bludigo™ is a diagnostic dye indicated for use as a visualization
              aid in the cystoscopic assessment of the integrity of the ureters
              in adults following urological and gynecological open, robotic, or
              endoscopic surgical procedures.{" "}
            </p>
          </div>
          <figure className="md:w-7/12">
            <Image src={doctorsStock} />
          </figure>
        </section>
        <Container size="lg">
          <section className="mb-20">
            <p className="text-3xl md:text-5xl text-primary md:w-2/3 pb-16">
              Bludigo has a deep blue color that significantly aids
              visualization when assessing ureter patency.
            </p>
            <div className="md:w-2/3 md:mx-auto">
              <figure className="md:flex">
                <Image src={chart} />
                <figcaption className="text-2xl pl-6">
                  83% of the ureter patency assessments in the Bludigo™ clinical
                  trial were reported as visualizing good or striking color
                  contrast in the ureter jet stream.
                </figcaption>
              </figure>
              <figure className="md:flex">
                <Image src={target} />
                <div className="flex-col">
                  <figcaption className="text-2xl pl-6">
                    In 90% of urologic and gynecologic surgical procedures
                    (N=49) in the Bludigo™ clinical trial, physicians agreed
                    that their ability to assess ureteral patency was improved
                    following the use of Bludigo™ compared to saline.
                  </figcaption>
                  <p className="pl-6">
                    Data on file PVP-19ICO1 clinical study report.
                  </p>
                </div>
              </figure>
            </div>
          </section>
          <figure className="mb-20">
            <Image src={table} />
          </figure>

          <section className="mb-8 md:mb-36 bg-secondary">
            <h3 className="text-3xl md:text-5xl text-primary mb-16 md:w-3/5">
              Fast detection. Bludigo is excreted in the urine quickly.
            </h3>
            <figure className="md:flex md:w-2/3 md:mx-auto">
              <Image src={clock} />
              <figcaption className="text-3xl md:ml-8">
                After injection, the blue color at the ureteral orifices is
                detectable within 4–9 minutes.
              </figcaption>
            </figure>
          </section>
          <hr className="mb-16" />
          <section className="mb-16">
            <p className="text-primary text-center mb-8 text-3xl font-bold">
              Read the full prescribing information
            </p>
            <button className="bg-primary py-4 px-10 text-white text-xl">
              LEARN MORE
            </button>
          </section>
          <section className="md:flex justify-evenly">
            <div className="bg-white p-8">
              <h5 className="text-3xl text-primary mb-4">
                Indications and Usage
              </h5>
              <a className="underline text-lg text-primary">
                Click to read more
              </a>
            </div>
            <div className="bg-white p-8">
              <h5 className="text-3xl text-primary mb-4">
                Product Information
              </h5>
              <a className="underline text-lg text-primary">
                Click to read more
              </a>
            </div>
          </section>
          <section className="bg-primary md:flex p-10">
            <p className="text-white text-4xl">
              Learn more about Bludigo (indigotindisulfonate sodium injection,
              USP){" "}
            </p>
            <button className="bg-white text-primary text-xl py-4 px-8">
              CONTACT US
            </button>
          </section>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

Bludigo.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Bludigo.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
