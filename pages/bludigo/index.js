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
import clock from "../../public/clock_icon_2x.png";
import target from "../../public/target_icon_2x.png";

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
        <section className="md:flex">
          <div className="bg-primary md:w-5/12 text-white px-32 py-28">
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
          <section>
            <p className="text-3xl md:text-5xl text-primary">
              Bludigo has a deep blue color that significantly aids
              visualization when assessing ureter patency.
            </p>
            <figure className="md:flex">
              <Image src={clock} />
              <figcaption className="text-2xl pl-6">
                83% of the ureter patency assessments in the Bludigo™ clinical
                trial were reported as visualizing good or striking color
                contrast in the ureter jet stream.
              </figcaption>
            </figure>
            <figure className="md:flex">
              <Image src={target} />
              <div className="flex-col">
                <figcaption className="text-2xl">
                  In 90% of urologic and gynecologic surgical procedures (N=49)
                  in the Bludigo™ clinical trial, physicians agreed that their
                  ability to assess ureteral patency was improved following the
                  use of Bludigo™ compared to saline.
                </figcaption>
                <p>Data on file PVP-19ICO1 clinical study report.</p>
              </div>
            </figure>
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
