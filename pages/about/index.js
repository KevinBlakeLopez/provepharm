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
import Container from "../../components/Container";
import aboutMainBG from "../../public/aboutMainBG.jpeg";
import blueDye from "../../public/history-bluedye.jpeg";
import allEmployees from "../../public/history-allEmployees.jpeg";
import lab2 from "../../public/history-lab2.jpeg";
import MF from "../../public/history-MF.jpeg";
import microscope from "../../public/history-microscopeLab.jpeg";
import provayblue from "../../public/history-provayblue.jpeg";

export default function AboutUs() {
  const { data, loading } = useQuery(AboutUs.query, {
    variables: AboutUs.variables(),
  });

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Main>
        {/* <Hero title={"Provepharm"} /> */}
        <div className="bg-[url('/about-hero.jpeg')] bg-cover bg-center bg-slate-700 bg-blend-soft-light md:h-[80vh] text-white mb-12 flex items-center">
          <h2 className="pl-8 md:pl-64 md:text-7xl font-light">
            CONNECTING <br />
            HEALTHCARE
            <br /> PROVIDERS <br />
            WITH PATIENTS TO <br />
            IMPROVE LIVES
          </h2>
        </div>

        <>
          <Container size="md">
            <div className="md:flex mb-16">
              <div class="md:w-1/2 mr-8">
                <h3 className="text-6xl text-blue-400 font-light mb-4">
                  OUR MISSION
                </h3>

                <p className="text-xl">
                  Provepharm is driven to improve the lives of our patients,
                  employees, and the ecosystem. We focus our resources on two
                  main areas of development:
                </p>
              </div>

              <div className="md:w-1/2">
                <img
                  alt=""
                  src="/sites/default/files/inline-images/image5_1.jpg"
                  data-object-fit="cover"
                  data-entity-type="file"
                  data-entity-uuid="01ba18a1-7156-436e-ba4e-bb4d69f9d13f"
                  data-image-style="original"
                />

                <div className="bg-[url('/aboutMainBG.jpeg')] bg-cover bg-blend-soft-light bg-[#02029ca6] p-8">
                  <h4 className="text-3xl text-blue-300 mb-4">
                    Main Areas of Development
                  </h4>

                  <ul className="text-xl text-white">
                    <li className="mb-6">
                      <strong>Molecule Vitalization</strong> to fully optimize
                      the molecule’s potential
                    </li>
                    <li className="mb-6">
                      Innovation of New Treatments for niche markets with unmet
                      therapeutic or diagnostic need
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>

          <div className="mb-12">
            <div className="bg-[url('/aboutBannerWoman.jpeg')] bg-cover bg-center text-center bg-slate-800 md:h-[50vh] flex items-center">
              <p className="md:text-6xl text-white leading-[4rem] md:px-60 font-light">
                PROVEPHARM IS AN INTERNATIONAL, PRIVATE, PHARMACEUTICAL <br />{" "}
                COMPANY WITH A GLOBAL PRESENCE IN OVER 30 COUNTRIES WORLDWIDE.
              </p>
            </div>
          </div>

          <Container>
            <div className="md:flex justify-between items-center text-xl">
              <div className="md:w-1/2 mr-8">
                <p className="mb-8">
                  At Provepharm, we innovate in order to understand each
                  molecule's full potential, to provide treatments that help
                  patients. Provepharm is an international private company with
                  a global presence in over 30 countries worldwide.
                </p>

                <p className="mb-8">
                  The company operates with integrity, as our goal is to have a
                  positive, significant and sustainable impact on our planet’s
                  ecosystem. As a responsible pharmaceutical company, we are
                  committed to adhering to the US legislation and regulations
                  that apply to our company's business. We act with honesty,
                  transparency and sincerity in a spirit of mutual respect.
                </p>

                <p>
                  Efficiency is at the heart of our development model, notably
                  by reducing time to market and broadening the accessibility of
                  new treatments.
                </p>
              </div>

              <div className="md:w-1/2">
                <p className="mb-8">
                  And, commitment is also demonstrated through the group’s
                  social initiatives, the ultimate expression of our values and
                  our sense of sharing.
                </p>

                <p className="mb-8">
                  The members of Provepharm are true trailblazers unafraid to
                  venture into new areas in order to define new standards of
                  innovation based on the development of the potential of
                  existing molecules. We demonstrate the definition of cutting
                  edge every day – as we strive to reinvent the model of
                  pharmaceutical innovation and contribute to the improvement of
                  the hospital practices and specialty care for the benefit of
                  our customers and patients.
                </p>

                <p>
                  These values reflect our identity, our goals and embody our
                  corporate culture. They characterize every Provepharm employee
                  and are expressed through the daily actions of all our teams.
                </p>
              </div>
            </div>
          </Container>

          <div className="md:flex mb-32">
            <div className="bg-blue-400 text-white md:w-1/2 py-20">
              <section className="w-2/3">
                <h3 className="text-6xl">
                  PRODUCTS <br />
                  THAT MAKE A <br />
                  DIFFERENCE IN <br />
                  PEOPLE'S LIVES
                </h3>

                <p className="text-xl">
                  At Provepharm, we innovate to unlock each molecule's full
                  potential, to provide treatments that help improve patients'
                  lives. Our portfolio of products meets the highest
                  pharmaceutical quality standards, in the following areas:
                  antidotes, diagnostics, injectable vitamins, metabolism, and
                  neuroscience.
                </p>
              </section>
            </div>
            <figure className="md:w-1/2">
              <Image src={aboutMainBG} />
            </figure>
          </div>

          <Container>
            <div className="md:flex justify-between text-xl font-light">
              <div className="md:w-5/12">
                <div className="mb-24">
                  <h3 className="text-6xl mb-6">OUR HISTORY</h3>

                  <p>
                    Driven by an entrepreneurial spirit, privately-owned,
                    Provepharm Life Solutions has more than two decades of
                    continuous innovation and growth in the healthcare market.
                    Here are a few highlights of the organization’s past,
                    present, and future, where Provepharm will continue to
                    develop healthcare solutions that improve patients’ lives.
                  </p>
                </div>

                <div>
                  <figure className="mb-6">
                    <Image src={blueDye} />
                  </figure>

                  <p className="mb-24">
                    Provence Technologies launched several internal research
                    programs, including a process patented in 2006, by
                    co-inventors Michel Feraud and Babak Sayah, for the
                    manufacture of methylene blue, compliant with current
                    international quality and regulatory requirements. A year
                    later, Provepharm developed and commercialized healthcare
                    products from these patented processes utilizing a highly
                    pure, pharmaceutical - grade methylene blue.
                  </p>
                </div>

                <div className="">
                  <figure className="mb-10">
                    <Image src={MF} />
                    <figcaption className="text-base text-center">
                      Michel Feraud, Founder CEO
                    </figcaption>
                  </figure>

                  <p className="mb-24">
                    Provepharm, acquires a company specialized in the chemical
                    synthesis of peptides and proteins for therapeutic use. This
                    is the first merger and acquisition operation opening a new
                    development direction for the company in the field of
                    biological pharmaceutical products.
                  </p>
                </div>

                <p className="mb-10">
                  Provepharm Life Solutions launches its new brand identity with
                  the addition of multiple healthcare professionals joining the
                  management team and executive board.{" "}
                </p>

                <div class="alignwide container line-box in-box">
                  <figure className="mb-6">
                    <Image src={allEmployees} />
                  </figure>

                  <p>
                    Provepharm Life Solutions acquires{" "}
                    <strong className="font-bold">
                      Apollo Pharmaceuticals USA
                    </strong>
                    , a company specializing in{" "}
                    <strong className="font-bold">
                      sterile injectable products
                    </strong>
                    , in the United States, as part of its diversification plan.
                  </p>
                </div>
              </div>

              <div className="md:w-5/12">
                <figure className="mb-8">
                  <Image src={microscope} />
                </figure>

                <div class="alignwide container line-box-content">
                  <p className="mb-8">
                    The early years: Michel Feraud, president, and founder,
                    initially launched the company as “Provence Technologies”, a
                    research and development chemistry laboratory, together with
                    co-founder and friend Christophe Baralotto. The company
                    operated as a contract research organization for
                    international pharmaceutical, cosmetic, and agrochemical
                    groups. Provence Technologies built its reputation by
                    designing innovative molecule synthesis pathways and precise
                    analytical methods, characterizing such products.
                  </p>
                </div>

                <div class="alignwide container line-box in-box">
                  <p className="mb-8">
                    Provepharm obtained a centralized marketing authorization
                    from EMA paving the way for the{" "}
                    <strong>
                      commercialization of injectable methylene blue
                    </strong>{" "}
                    with the brand name <strong>ProveBlue®</strong> in the 30
                    countries of the enlarged European Union.
                  </p>
                </div>

                <div class="alignwide container line-box in-box">
                  <figure className="mb-8">
                    <Image src={provayblue} />
                  </figure>

                  <p className="mb-8">
                    Provepharm obtained FDA approval to commercialize{" "}
                    <a
                      href="https://americanregent.com/our-products/provayblue-methylene-blue-injection-usp-05/"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="link-warning"
                    >
                      ProvayBlue®, (injectable methylene blue).
                    </a>
                  </p>
                </div>

                <div class="alignwide container line-box in-box">
                  <figure className="mb-8">
                    <Image src={lab2} />
                  </figure>

                  <p className="mb-8">
                    Provepharm Life Solutions joins forces with{" "}
                    <strong className="font-bold">
                      new strategic minority partners, Téthys Invest and
                      ArchiMed
                    </strong>
                    .
                  </p>
                </div>

                <p>
                  Thanks to its solid financial structure, Provepharm Life
                  Solutions continues to diligently develop and seek out unmet
                  needs in the therapeutics and diagnostics area within the
                  healthcare market to improve the quality of life for each
                  patient it serves worldwide.
                </p>
              </div>
            </div>
          </Container>
        </>
      </Main>
      <Footer />
    </>
  );
}

AboutUs.query = gql`
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

AboutUs.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
