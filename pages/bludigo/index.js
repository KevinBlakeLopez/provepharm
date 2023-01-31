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
import bludigoProduct from "../../public/bludigo_product_image.jpeg";
import videoThumbnail from "../../public/video_thumbnail.png";
import doctorsStock from "../../public/bludigo_doctors_stock.jpeg";


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
          className="bg-primary h-[400px] md:h-[80vh] text-white md:flex justify- items-center"
        >
          <div className="">
            <p className="text-3xl lg:text-8xl pb-6">See the difference.</p>
            <h1 className="text-xl">
              Bludigo™ <br /> (indigotindisulfonate sodium injection, USP)
            </h1>
          </div>
          <figure>
            <Image src={bludigoProduct} />
          </figure>
        </section>
        <section id="video-section" className="text-primary">
          <h2 className="text-3xl">
            Introducing Bludigo™ (indigotindisulfonate sodium injection, USP)
            the first and only FDA-approved injectable indigo carmine diagnostic
            dye.
          </h2>
          <figure>
            <Image src={videoThumbnail}/>
          </figure>
        </section>
        <section className="md:flex">
          <div className="bg-primary md:w-2/5 text-white">
            <h3 className="text-6xl pb-8">Not just any blue dye.</h3>
            <p className="text-xl">
              Bludigo™ is a diagnostic dye indicated for use as a visualization
              aid in the cystoscopic assessment of the integrity of the ureters
              in adults following urological and gynecological open, robotic, or
              endoscopic surgical procedures.{" "}
            </p>
          </div>
          <figure className="md:w-3/5">
            <Image src={doctorsStock} />
          </figure>
        </section>
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
