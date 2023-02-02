import { useQuery, gql } from "@apollo/client";
import * as MENUS from "../../constants/menus";
import { BlogInfoFragment } from "../../fragments/GeneralSettings";
import Modal from "../../components/Modal";
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
        <div className="bg-[url('/about-hero.jpeg')] bg-cover bg-center bg-slate-700 bg-blend-soft-light h-[400px] md:h-[80vh] text-white mb-10 flex items-center">
          <h2 className="pl-8 md:pl-64 text-2xl md:text-7xl font-semibold md:font-extralight tracking-wider">
            CONNECTING <br />
            HEALTHCARE
            <br /> PROVIDERS <br />
            WITH PATIENTS TO <br />
            IMPROVE LIVES
          </h2>
        </div>

        <>
          <Container size="sm">
            <div className="md:flex mb-10">
              <div class="mb-10 md:mb-0 md:w-1/2 md:flex md:flex-col md:justify-center md:pr-[60px] ">
                <h3 className="text-6xl tracking-wider text-secondary font-extralight mb-8">
                  OUR MISSION
                </h3>

                <p className="text-lg text-primary">
                  Provepharm is driven to improve the lives of our patients,
                  employees, and the ecosystem. We focus our resources on two
                  main areas of development:
                </p>
              </div>

              <div className="md:w-1/2">
                <div>
                  <div className="bg-[#0c132a] bg-blend-soft-light bg-[url('/aboutMainBG.jpeg')] bg-cover opacity-[90] px-12 py-12 max-w-[630px]">
                    <h4 className="text-3xl text-tertiary mb-4">
                      Main Areas of Development
                    </h4>

                    <ul className="text-xl text-white">
                      <li
                        style={{
                          background: "url('/arrow.png') no-repeat left 5px",
                        }}
                        className="mb-6 pl-[30px]"
                      >
                        <p>
                          <strong>Molecule Vitalization</strong> to fully
                          optimize the molecule’s potential
                        </p>
                      </li>
                      <li
                        style={{
                          background: "url('/arrow.png') no-repeat left 5px",
                        }}
                        className="mb-6 pl-[30px]"
                      >
                        <p>
                          Innovation of New Treatments for niche markets with
                          unmet therapeutic or diagnostic need
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <div id="third-way-banner" className="mb-16 overflow-hidden">
            <div
              className="
                relative bg-black flex justify-center items-center min-h-[500px]
                before:bg-[url('/aboutBannerWoman.jpeg')] before:bg-cover before:bg-center before:absolute before:right-0 before:left-0 before:top-0 before:bottom-0 before:content-[''] before:z-0 text-center before:opacity-50"
            >
              <div className="absolute w-[388px] z-20 left-0 top-0 bottom-0">
                <figure className="hidden md:block absolute top-[-20%]">
                  <img src="/frontPage-V.png" />
                </figure>
                <figure className="hidden md:block absolute bottom-[5%]">
                  <img src="/frontPage-A.png" />
                </figure>
              </div>
              <p className="z-10 text-3xl lg:text-[3.5rem] font-light leading-tight text-white tracking-wider py-16 px-8">
                PROVEPHARM IS AN INTERNATIONAL,
                <br /> PRIVATE, PHARMACEUTICAL
                <br /> COMPANY WITH A GLOBAL PRESENCE
                <br /> IN OVER 30 COUNTRIES WORLDWIDE.
              </p>
            </div>
          </div>

          <Container padding="py-0 px-10" margin="mb-16" size="sm">
            <div className="md:flex justify-between text-lg text-primary">
              <div className="md:w-1/2 md:mr-8">
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

          <div id="people-lives-banner" className="md:flex mb-10">
            <div id="people-lives-image" className=" md:order-2 md:w-1/2">
              <figure className="">
                <div className="block">
                  <Image fill="true" src={aboutMainBG} />
                </div>
              </figure>
            </div>
            <div className="bg-secondary text-white font-light md:order-1 md:w-1/2">
              <section className="md:max-w-[543px] md:float-right md:py-20 py-14 px-14 md:pl-0 -mt-2">
                <h3 className="text-3xl md:text-[3.3rem] tracking-wide leading-extra-tight mb-6">
                  PRODUCTS <br className="hidden md:block" />
                  THAT MAKE A <br className="hidden md:block" />
                  DIFFERENCE IN <br className="hidden md:block" />
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
          </div>

          <Container size="md">
            <div className="md:flex justify-between text-lg text-primary">
              <div
                className="dot-left timeline-graphic md:w-1/2 relative 
                before:absolute before:content-[''] before:top-0 before:bottom-0 before:right-0 before:w-[2px]"
              >
                <div className="py-14 pr-14 in-box">
                  <h3 className="text-6xl mb-6 tracking-wider text-secondary font-extralight">
                    OUR HISTORY
                  </h3>

                  <p>
                    Driven by an entrepreneurial spirit, privately-owned,
                    Provepharm Life Solutions has more than two decades of
                    continuous innovation and growth in the healthcare market.
                    Here are a few highlights of the organization’s past,
                    present, and future, where Provepharm will continue to
                    develop healthcare solutions that improve patients’ lives.
                  </p>
                </div>

                <div className="in-box">
                  <figure className="mb-6">
                    <Image src={blueDye} />
                  </figure>

                  <p className="mb-8">
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

                <div className="in-box">
                  <figure className="mb-8">
                    <Image src={MF} />
                    <figcaption className="text-base text-center">
                      Michel Feraud, Founder CEO
                    </figcaption>
                  </figure>

                  <p className="mb-8">
                    Provepharm, acquires a company specialized in the chemical
                    synthesis of peptides and proteins for therapeutic use. This
                    is the first merger and acquisition operation opening a new
                    development direction for the company in the field of
                    biological pharmaceutical products.
                  </p>
                </div>
                <div className="in-box">
                  <p className="mb-8">
                    Provepharm Life Solutions launches its new brand identity
                    with the addition of multiple healthcare professionals
                    joining the management team and executive board.{" "}
                  </p>
                  <figure className="mb-6">
                    <Image src={allEmployees} />
                  </figure>
                </div>

                <div className="in-box">
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
              <div className="dot-right md:w-1/2 relative">
                <div className="in-box">
                  <figure className="mb-8">
                    <Image src={microscope} />
                  </figure>

                  <div>
                    <p>
                      The early years: Michel Feraud, president, and founder,
                      initially launched the company as “Provence Technologies”,
                      a research and development chemistry laboratory, together
                      with co-founder and friend Christophe Baralotto. The
                      company operated as a contract research organization for
                      international pharmaceutical, cosmetic, and agrochemical
                      groups. Provence Technologies built its reputation by
                      designing innovative molecule synthesis pathways and
                      precise analytical methods, characterizing such products.
                    </p>
                  </div>
                </div>
                <div className="in-box">
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
                <div className="in-box">
                  <figure className="mb-8">
                    <Image src={provayblue} />
                  </figure>

                  <p>
                    Provepharm obtained FDA approval to commercialize{" "}
                    <Modal
                      text="ProvayBlue®, (injectable methylene blue)."
                      externalLink="https://americanregent.com/our-products/provayblue-methylene-blue-injection-usp-05/"
                    />
                  </p>
                </div>
                <div className="in-box">
                  <figure className="mb-8">
                    <Image src={lab2} />
                  </figure>

                  <p>
                    Provepharm Life Solutions joins forces with{" "}
                    <strong className="font-bold">
                      new strategic minority partners, Téthys Invest and
                      ArchiMed
                    </strong>
                    .
                  </p>
                </div>
                <div className="in-box">
                  <p>
                    Thanks to its solid financial structure, Provepharm Life
                    Solutions continues to diligently develop and seek out unmet
                    needs in the therapeutics and diagnostics area within the
                    healthcare market to improve the quality of life for each
                    patient it serves worldwide.
                  </p>
                </div>
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
