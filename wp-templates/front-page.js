import { useQuery, gql } from "@apollo/client";
import * as MENUS from "../constants/menus";
import { BlogInfoFragment } from "../fragments/GeneralSettings";
import { Header, Footer, Main, NavigationMenu, Hero, SEO } from "../components";
import Container from "../components/Container";
import BannerBludigo from "../components/BannerBludigo";
import Modal from "../components/Modal";
import Image from "next/image";
import frontPageBanner from "../public/frontPageBanner.jpeg";
import aboutMainBG from "../public/aboutMainBG.jpeg";
import blueDye from "../public/history-bluedye.jpeg";
import allEmployees from "../public/history-allEmployees.jpeg";
import lab2 from "../public/history-lab2.jpeg";
import MF from "../public/history-MF.jpeg";
import microscope from "../public/history-microscopeLab.jpeg";
import provayblue from "../public/history-provayblue.jpeg";
import award from "../public/frontPage-award.png";
import gears from "../public/frontPage-gears.png";
import hexagon from "../public/frontPage-hexagonArrows.png";
import plant from "../public/frontPage-plant.png";
import shield from "../public/frontPage-secure-shield.png";

export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        {/* <Hero title={"Provepharm"} /> */}
        <div class="bg-[url('/frontPage-hero.jpeg')] bg-cover bg-slate-700 bg-blend-soft-light text-white mb-12 md:h-[80vh] flex items-center">
          <p className="pl-8 md:pl-64 text-4xl md:text-7xl font-light">
            THERAPEUTICS AND <br /> DIAGNOSTICS THAT
            <br />
            <strong className="font-bold">
              MAKE A <br /> DIFFERENCE IN <br /> PATIENTS' LIVES
            </strong>
          </p>
        </div>

        <>
          <Container size="md">
            <div className="md:flex justify-between mb-12 text-primary">
              <section className="md:w-1/2">
                <h3 className="mb-4 md:text-6xl">ABOUT US</h3>

                <p className="text-xl">
                  With an impressive legacy of healthcare innovations and
                  solutions spanning more than 20 years, Provepharm is at the
                  forefront of developing innovative drugs from well-known
                  molecules that advance therapeutic progress for the benefits
                  of patients.
                </p>
              </section>

              <figure className="md:w-1/2">
                <Image src={frontPageBanner} />
              </figure>
            </div>
          </Container>

          <div className="bg-[url('/.jpeg')] bg-cover bg-center bg-blend-soft-light bg-primary text-white text-center text-xl">
            <Container>
              <h3 className="text-4xl text-secondary mb-4 pt-16">
                TO ACCOMPLISH THIS MISSION, <br />
                OUR STRATEGY IS BASED ON
              </h3>
              <h3 class="text-5xl text-white mb-16">5 PILLARS</h3>

              <div className="md:flex mb-12">
                <div className="md:flex-col items-center">
                  <figure>
                    <Image src={plant} width={110} height={110} />

                    <figcaption className="font-semibold pb-4">
                      External
                      <br />
                      Growth
                    </figcaption>
                  </figure>
                  <hr className="w-16 mx-auto pb-4" />
                  <p>With the acquisition of products or companies</p>
                </div>

                <div>
                  <figure>
                    <Image src={gears} width={110} height={110} />
                    <figcaption className="font-semibold pb-4">
                      Internal
                      <br />
                      Development
                    </figcaption>
                  </figure>
                  <hr className="w-8 mx-auto pb-4" />
                  <p>By diversifying our product portfolio</p>
                </div>

                <div>
                  <figure>
                    <Image src={hexagon} width={110} height={110} />
                    <figcaption className="font-semibold pb-4">
                      Commercial
                      <br />
                      Transformation
                    </figcaption>
                  </figure>
                  <hr className="w-8 mx-auto pb-4" />
                  <p>By expanding sales channels</p>
                </div>

                <div>
                  <figure>
                    <Image src={shield} width={110} height={110} />
                    <figcaption className="font-semibold pb-4">
                      Secure
                      <br />
                      Our API
                    </figcaption>
                  </figure>
                  <hr className="w-8 mx-auto pb-4" />
                  <p>By securing our supply</p>
                </div>

                <div>
                  <figure>
                    <Image src={award} width={110} height={110} />
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

              <div>
                <h4 className="text-3xl text-secondary text-center mb-4">
                  From drug discovery – to marketplace
                </h4>

                <p className="text-center">
                  Scientific experience combined with healthcare business savvy
                  enables Provepharm to add
                  <br />
                  value to all levels of the product lifecycle, from
                  ground-breaking discovery, to successfully bringing therapy
                  and diagnostics to the appropriate patient
                </p>
              </div>
            </Container>
          </div>

          <>
            <div id="third-way-banner" className="mb-12">
              <div className="relative bg-black flex justify-center items-center min-h-[500px] before:bg-[url('/aboutBannerWoman.jpeg')] before:bg-cover before:bg-center before:absolute before:right-0 before:left-0 before:top-0 before:bottom-0 before:content-[''] before:z-0 text-center before:opacity-50">
                <div className="absolute w-[388px] z-20 left-0 top-0 bottom-0">
                  <figure className="hidden md:block absolute top-[20%]">
                    <img src="/frontPage-V.png" />
                  </figure>
                  <figure className="hidden md:block absolute bottom-[5%]">
                    <img src="/frontPage-A.png" />
                  </figure>
                </div>
                <p className="z-10 text-3xl lg:text-[3.5rem] text-white font-light leading-tight tracking-wider py-16 px-8 ">
                  PROVEPHARM IS AN INTERNATIONAL,
                  <br /> PRIVATE, PHARMACEUTICAL
                  <br /> COMPANY WITH A GLOBAL PRESENCE
                  <br /> IN OVER 30 COUNTRIES WORLDWIDE.
                </p>
              </div>
            </div>

            <Container padding="py-0 px-10" margin="mb-10" size="sm">
              <div className="md:flex justify-between text-xl text-primary">
                <div className="md:w-1/2 mr-8">
                  <p className="mb-8">
                    At Provepharm, we innovate in order to understand each
                    molecule's full potential, to provide treatments that help
                    patients. Provepharm is an international private company
                    with a global presence in over 30 countries worldwide.
                  </p>

                  <p className="mb-8">
                    The company operates with integrity, as our goal is to have
                    a positive, significant and sustainable impact on our
                    planet’s ecosystem. As a responsible pharmaceutical company,
                    we are committed to adhering to the US legislation and
                    regulations that apply to our company's business. We act
                    with honesty, transparency and sincerity in a spirit of
                    mutual respect.
                  </p>

                  <p>
                    Efficiency is at the heart of our development model, notably
                    by reducing time to market and broadening the accessibility
                    of new treatments.
                  </p>
                </div>

                <div className="md:w-1/2">
                  <p className="mb-8">
                    And, commitment is also demonstrated through the group’s
                    social initiatives, the ultimate expression of our values
                    and our sense of sharing.
                  </p>

                  <p className="mb-8">
                    The members of Provepharm are true trailblazers unafraid to
                    venture into new areas in order to define new standards of
                    innovation based on the development of the potential of
                    existing molecules. We demonstrate the definition of cutting
                    edge every day – as we strive to reinvent the model of
                    pharmaceutical innovation and contribute to the improvement
                    of the hospital practices and specialty care for the benefit
                    of our customers and patients.
                  </p>

                  <p>
                    These values reflect our identity, our goals and embody our
                    corporate culture. They characterize every Provepharm
                    employee and are expressed through the daily actions of all
                    our teams.
                  </p>
                </div>
              </div>
            </Container>

            <div id="people-lives-banner" className="md:flex mb-10">
              <div id="people-lives-image" className=" md:order-2 md:w-1/2">
                <figure className="">
                  <Image style={{ position: "inherit" }} src={aboutMainBG} />
                </figure>
              </div>
              <div className="bg-secondary text-white font-light md:order-1 md:w-1/2">
                <section className="md:w-3/4 md:float-right p-10 -mt-2">
                  <h3 className="text-3xl md:text-[3.3rem] tracking-wide leading-extra-tight mb-6">
                    PRODUCTS <br className="hidden md:visible" />
                    THAT MAKE A <br className="hidden md:visible" />
                    DIFFERENCE IN <br className="hidden md:visible" />
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

            <Container>
              <div className="md:flex justify-between text-xl text-primary font-light">
                <div className="md:w-1/2 dot-left timeline-graphic relative before:absolute before:content-[''] before:top-0 before:bottom-0 before:right-0 before:w-[2px]">
                  <div className="mb-8 in-box">
                    <h3 className="text-6xl mb-6 text-secondary">
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
                      synthesis of peptides and proteins for therapeutic use.
                      This is the first merger and acquisition operation opening
                      a new development direction for the company in the field
                      of biological pharmaceutical products.
                    </p>
                  </div>
                  <div className="in-box">
                    <p className="mb-8">
                      Provepharm Life Solutions launches its new brand identity
                      with the addition of multiple healthcare professionals
                      joining the management team and executive board.{" "}
                    </p>
                  </div>

                  <div className="in-box">
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
                      , in the United States, as part of its diversification
                      plan.
                    </p>
                  </div>
                </div>
                <div className="dot-right md:w-1/2 relative">
                  <div className="in-box">
                    <figure className="mb-8">
                      <Image src={microscope} />
                    </figure>

                    <div>
                      <p className="mb-8">
                        The early years: Michel Feraud, president, and founder,
                        initially launched the company as “Provence
                        Technologies”, a research and development chemistry
                        laboratory, together with co-founder and friend
                        Christophe Baralotto. The company operated as a contract
                        research organization for international pharmaceutical,
                        cosmetic, and agrochemical groups. Provence Technologies
                        built its reputation by designing innovative molecule
                        synthesis pathways and precise analytical methods,
                        characterizing such products.
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

                    <p className="mb-8">
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

                    <p className="mb-8">
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
                      Solutions continues to diligently develop and seek out
                      unmet needs in the therapeutics and diagnostics area
                      within the healthcare market to improve the quality of
                      life for each patient it serves worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
            <BannerBludigo />
          </>
        </>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
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

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
