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
        <Container>
          {/* <Hero title={"Provepharm"} /> */}
          <div class="bg-blue-900 text-white mb-12">
            <figure class="size-full" id="ban-image">
              <img
                src=""
                alt=""
                class="wp-image-48"
                data-entity-type="file"
                data-image-style="original"
              />
            </figure>

            <div className="text-7xl">
              CONNECTING <br />
              HEALTHCARE
              <br /> PROVIDERS <br />
              WITH PATIENTS TO <br />
              IMPROVE LIVES
            </div>
          </div>

          <>
            <div className="flex mb-16">
              <div class="w-1/2">
                <h3 className="text-6xl mb-4">OUR MISSION</h3>

                <p className="text-xl">
                  Provepharm is driven to improve the lives of our patients,
                  employees, and the ecosystem. We focus our resources on two
                  main areas of development:
                </p>
              </div>

              <div className="w-1/2">
                <img
                  alt=""
                  src="/sites/default/files/inline-images/image5_1.jpg"
                  data-object-fit="cover"
                  data-entity-type="file"
                  data-entity-uuid="01ba18a1-7156-436e-ba4e-bb4d69f9d13f"
                  data-image-style="original"
                />
                <div>
                  <div className="bg-blue-900 p-6">
                    <h4 className="text-3xl text-blue-300 mb-4">
                      Main Areas of Development
                    </h4>

                    <ul className="text-xl text-white">
                      <li className="mb-6">
                        <strong>Molecule Vitalization</strong> to fully optimize
                        the molecule’s potential
                      </li>
                      <li className="mb-6">
                        Innovation of New Treatments for niche markets with
                        unmet therapeutic or diagnostic need
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <figure>
                <img
                  src="/sites/default/files/styles/large/public/inline-images/top-3rd-way.png?itok=Wfn-AFDS"
                  alt=""
                  class="wp-image-10"
                  data-entity-type="file"
                  data-entity-uuid="dd41f566-b6f2-4d64-b5d6-cfc863194cfc"
                  data-image-style="original"
                />
              </figure>

              <figure>
                <img
                  src="/sites/default/files/styles/large/public/inline-images/bottom-3rd-way.png?itok=EjpeK693"
                  alt=""
                  class="wp-image-11"
                  data-entity-type="file"
                  data-entity-uuid="641f3fb8-f8b4-4bcf-9a89-efed2cb8a7cb"
                  data-image-style="original"
                />
              </figure>

              <div className="text-center bg-slate-800">
                <p className="text-5xl text-white leading-[4rem]">
                  PROVEPHARM IS AN INTERNATIONAL, PRIVATE, PHARMACEUTICAL <br />{" "}
                  COMPANY WITH A GLOBAL PRESENCE IN OVER 30 COUNTRIES WORLDWIDE.
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-12 text-xl">
              <div className="w-1/2 mr-8">
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

              <div className="w-1/2">
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

            <div>
              <img
                alt=""
                src="/sites/default/files/inline-images/image5_1.jpg"
                data-object-fit="cover"
                data-entity-type="file"
                data-entity-uuid="01ba18a1-7156-436e-ba4e-bb4d69f9d13f"
                data-image-style="original"
              />
              <div>
                <p></p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-blue-400 text-white w-1/2 py-20">
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
              </div>
              <div className="w-1/2 bg-slate-900"></div>
            </div>

            <div className="flex">
              <div className="w-1/2">
                <div>
                  <h3 className="text-6xl">OUR HISTORY</h3>

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
                  <figure>
                    <img
                      src="/sites/default/files/inline-images/image22_0.jpg"
                      alt=""
                      data-entity-type="file"
                      data-entity-uuid="c9ba2285-5c78-4881-bc1a-abba4b780bab"
                      data-image-style="original"
                    />
                  </figure>

                  <p>
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

                <div>
                  <figure class="aligncenter size-large">
                    <img
                      src="/sites/default/files/styles/large/public/inline-images/MF_portrait.jpg?itok=Cnjqtijx"
                      alt=""
                      data-entity-type="file"
                      data-entity-uuid="96463d1e-d8d1-4ce5-a2a5-a8063c754916"
                      data-image-style="original"
                    />
                    <figcaption>Michel Feraud, Founder CEO</figcaption>
                  </figure>

                  <p>
                    Provepharm, acquires a company specialized in the chemical
                    synthesis of peptides and proteins for therapeutic use. This
                    is the first merger and acquisition operation opening a new
                    development direction for the company in the field of
                    biological pharmaceutical products.
                  </p>
                </div>

                <div class="alignwide container line-box in-box">
                  <div class="alignwide container line-box-content">
                    <p>
                      Provepharm Life Solutions launches its new brand identity
                      with the addition of multiple healthcare professionals
                      joining the management team and executive board.{" "}
                    </p>
                  </div>
                </div>

                <div class="alignwide container line-box in-box">
                  <figure class="wp-block-image size-full line-box-image">
                    <img
                      src="/sites/default/files/inline-images/image27.jpg"
                      alt=""
                      data-entity-type="file"
                      data-entity-uuid="19800249-6754-4525-b1dd-ac91e416ebc6"
                      data-image-style="original"
                    />
                  </figure>

                  <p>
                    Provepharm Life Solutions acquires{" "}
                    <strong>Apollo Pharmaceuticals USA</strong>, a company
                    specializing in <strong>sterile injectable products</strong>
                    , in the United States, as part of its diversification plan.
                  </p>
                </div>
              </div>

              <div className="w-1/2">
                <figure class="wp-block-image size-full line-box-image">
                  <img
                    src="/sites/default/files/inline-images/image21_0.jpg"
                    alt=""
                    data-entity-type="file"
                    data-entity-uuid="061cb33d-efd2-4f0e-b73b-82d5abc950fb"
                    data-image-style="original"
                  />
                </figure>

                <div class="alignwide container line-box-content">
                  <p>
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
                  <p>
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
                  <figure class="wp-block-image size-full line-box-image">
                    <img
                      src="/sites/default/files/inline-images/image24.jpg"
                      alt=""
                      class="wp-image-17"
                      data-entity-type="file"
                      data-entity-uuid="d22154c9-c515-4424-958f-82166735c6c9"
                      data-image-style="original"
                    />
                  </figure>

                  <p>
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
                  <figure class="wp-block-image size-full line-box-image">
                    <img
                      src="/sites/default/files/inline-images/image26_0.jpg"
                      alt=""
                      class="wp-image-53"
                      data-entity-type="file"
                      data-entity-uuid="dd1ccbba-0368-453e-ab5c-990f0e1c2372"
                      data-image-style="original"
                    />
                  </figure>

                  <p>
                    Provepharm Life Solutions joins forces with{" "}
                    <strong>
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
          </>
        </Container>
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
