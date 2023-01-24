import { useQuery, gql } from "@apollo/client";
import * as MENUS from "../constants/menus";
import { BlogInfoFragment } from "../fragments/GeneralSettings";
import Image from "next/image";
import { Header, Footer, Main, NavigationMenu, Hero, SEO } from "../components";
import Container from "../components/Container";

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
        <Container>
          {/* <Hero title={"Provepharm"} /> */}
          <div class="bg-blue-900 text-white">
            <div id="upper-banner">
              <figure class="size-full" id="ban-image">
                <img
                  src=""
                  alt=""
                  class="wp-image-48"
                  data-entity-type="file"
                  data-image-style="original"
                />
              </figure>

              <div class="es">
                THERAPEUTICS AND DIAGNOSTICS THAT
                <br />
                <strong>MAKE A DIFFERENCE IN PATIENTS' LIVES</strong>
              </div>
            </div>
          </div>

          <>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <h3 class="mb-4 text-blue-900">ABOUT US</h3>

                        <p>
                          With an impressive legacy of healthcare innovations
                          and solutions spanning more than 20 years, Provepharm
                          is at the forefront of developing innovative drugs
                          from well-known molecules that advance therapeutic
                          progress for the benefits of patients.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div aria-hidden="true" className="h-[40px]"></div>
                    </div>

                    <div class="wp-block-image about-image">
                      <figure class="alignleft size-full">
                        <img
                          src="/sites/default/files/inline-images/image2_0.jpg"
                          alt=""
                          class="wp-image-49"
                          data-entity-type="file"
                          data-entity-uuid="c0e24fd0-15a1-4c51-8c7d-d7bf6edfcf2c"
                          data-image-style="original"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-900 text-white">
              <div class="">
                <h3 className="text-center text-blue-300">
                  TO ACCOMPLISH THIS MISSION, <br />
                  OUR STRATEGY IS BASED ON <span class="mt-2">5 PILLARS</span>
                </h3>

                <div className="flex">
                  <div>
                    <figure>
                      <img
                        src="/sites/default/files/inline-images/plant.png"
                        alt=""
                        data-entity-type="file"
                        data-entity-uuid="0a97b5ce-5ba9-406f-8f77-1d2f630f669a"
                        data-image-style="original"
                      />
                      <figcaption>
                        External
                        <br />
                        Growth
                      </figcaption>
                    </figure>

                    <p>With the acquisition of products or companies</p>
                  </div>

                  <div>
                    <figure>
                      <img
                        src="/sites/default/files/inline-images/settings.png"
                        alt=""
                        data-entity-type="file"
                        data-entity-uuid="07dd2a78-8f98-4d18-86fd-ad6e8ebe559f"
                        data-image-style="original"
                      />
                      <figcaption>
                        Internal
                        <br />
                        Development
                      </figcaption>
                    </figure>

                    <p>By diversifying our product portfolio</p>
                  </div>

                  <div>
                    <figure class="wp-block-image size-full pillars-top">
                      <img
                        src="/sites/default/files/inline-images/cube.png"
                        alt=""
                        class="wp-image-7"
                        data-entity-type="file"
                        data-entity-uuid="13496128-6b7f-4261-931c-574f7ecedbbf"
                        data-image-style="original"
                      />
                      <figcaption>
                        Commercial
                        <br />
                        Transformation
                      </figcaption>
                    </figure>

                    <p class="pillars-content">By expanding sales channels</p>
                  </div>

                  <div class="wp-block-column">
                    <figure class="wp-block-image size-full pillars-top">
                      <img
                        src="/sites/default/files/inline-images/secure-shield.png"
                        alt=""
                        class="wp-image-8"
                        title=""
                        data-entity-type="file"
                        data-entity-uuid="cfd501fb-6de4-4a2d-b7b1-5079a09e45f9"
                        data-image-style="original"
                      />
                      <figcaption>
                        Secure
                        <br />
                        Our API
                      </figcaption>
                    </figure>

                    <p class="pillars-content">By securing our supply</p>
                  </div>

                  <div class="wp-block-column">
                    <figure class="wp-block-image size-full pillars-top">
                      <img
                        src="/sites/default/files/inline-images/award.png"
                        alt=""
                        class="wp-image-9"
                        data-entity-type="file"
                        data-entity-uuid="a3b752d5-6374-4271-9efa-4c2d571677e8"
                        data-image-style="original"
                      />
                      <figcaption>
                        Operational
                        <br />
                        Excellence
                      </figcaption>
                    </figure>

                    <p class="pillars-content">
                      By capitalizing on the women and men of Provepharm
                    </p>
                  </div>
                </div>

                <div class="wp-block-columns pillars-discover mb-0">
                  <div class="wp-block-column">
                    <h4 className="text-blue-300 text-center">
                      From drug discovery – to marketplace
                    </h4>

                    <p className="text-center">
                      Scientific experience combined with healthcare business
                      savvy enables Provepharm to add
                      <br />
                      value to all levels of the product lifecycle, from
                      ground-breaking discovery, to successfully bringing
                      therapy and diagnostics to the appropriate patient
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
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
                      </div>

                      <div>
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
                      </div>
                    </div>

                    <div>
                      <div className="text-center bg-slate-800">
                        <p className="text-white">
                          PROVEPHARM IS AN INTERNATIONAL, PRIVATE,
                          PHARMACEUTICAL COMPANY WITH A GLOBAL PRESENCE IN OVER
                          30 COUNTRIES WORLDWIDE.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <div className="flex justify-between mt-12">
                      <div className="mr-8">
                        <p className="mb-8">
                          At Provepharm, we innovate in order to understand each
                          molecule's full potential, to provide treatments that
                          help patients. Provepharm is an international private
                          company with a global presence in over 30 countries
                          worldwide.
                        </p>

                        <p className="mb-8">
                          The company operates with integrity, as our goal is to
                          have a positive, significant and sustainable impact on
                          our planet’s ecosystem. As a responsible
                          pharmaceutical company, we are committed to adhering
                          to the US legislation and regulations that apply to
                          our company's business. We act with honesty,
                          transparency and sincerity in a spirit of mutual
                          respect.
                        </p>

                        <p>
                          Efficiency is at the heart of our development model,
                          notably by reducing time to market and broadening the
                          accessibility of new treatments.
                        </p>
                      </div>

                      <div>
                        <p>
                          And, commitment is also demonstrated through the
                          group’s social initiatives, the ultimate expression of
                          our values and our sense of sharing.
                        </p>

                        <p>
                          The members of Provepharm are true trailblazers
                          unafraid to venture into new areas in order to define
                          new standards of innovation based on the development
                          of the potential of existing molecules. We demonstrate
                          the definition of cutting edge every day – as we
                          strive to reinvent the model of pharmaceutical
                          innovation and contribute to the improvement of the
                          hospital practices and specialty care for the benefit
                          of our customers and patients.
                        </p>

                        <p>
                          These values reflect our identity, our goals and
                          embody our corporate culture. They characterize every
                          Provepharm employee and are expressed through the
                          daily actions of all our teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <div>
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
                  </div>
                </div>

                <div class="relative z-index-1 mb-0">
                  <div>
                    <div>
                      <div className="bg-blue-400">
                        <h3>
                          PRODUCTS <br />
                          THAT MAKE A <br />
                          DIFFERENCE IN <br />
                          PEOPLE'S LIVES
                        </h3>

                        <p>
                          At Provepharm, we innovate to unlock each molecule's
                          full potential, to provide treatments that help
                          improve patients' lives. Our portfolio of products
                          meets the highest pharmaceutical quality standards, in
                          the following areas: antidotes, diagnostics,
                          injectable vitamins, metabolism, and neuroscience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="wp-block-columns alignfull history-section mb-0">
              <div class="wp-block-column history-box">
                <div class="alignwide container">
                  <div className="flex">
                    <div>
                      <div>
                        <h3>OUR HISTORY</h3>

                        <p>
                          Driven by an entrepreneurial spirit, privately-owned,
                          Provepharm Life Solutions has more than two decades of
                          continuous innovation and growth in the healthcare
                          market. Here are a few highlights of the
                          organization’s past, present, and future, where
                          Provepharm will continue to develop healthcare
                          solutions that improve patients’ lives.
                        </p>
                      </div>

                      <div class="alignwide container line-box in-box">
                        <figure class="wp-block-image size-full line-box-image">
                          <img
                            src="/sites/default/files/inline-images/image22_0.jpg"
                            alt=""
                            class="wp-image-52"
                            data-entity-type="file"
                            data-entity-uuid="c9ba2285-5c78-4881-bc1a-abba4b780bab"
                            data-image-style="original"
                          />
                        </figure>

                        <div class="alignwide container line-box-content">
                          <p>
                            Provence Technologies launched several internal
                            research programs, including a process patented in
                            2006, by co-inventors Michel Feraud and Babak Sayah,
                            for the manufacture of methylene blue, compliant
                            with current international quality and regulatory
                            requirements. A year later, Provepharm developed and
                            commercialized healthcare products from these
                            patented processes utilizing a highly pure,
                            pharmaceutical - grade methylene blue.
                          </p>
                        </div>
                      </div>

                      <div class="alignwide container line-box in-box">
                        <div class="wp-block-image line-box-image">
                          <figure class="aligncenter size-large">
                            <img
                              src="/sites/default/files/styles/large/public/inline-images/MF_portrait.jpg?itok=Cnjqtijx"
                              alt=""
                              class="wp-image-75"
                              data-entity-type="file"
                              data-entity-uuid="96463d1e-d8d1-4ce5-a2a5-a8063c754916"
                              data-image-style="original"
                            />
                            <figcaption>Michel Feraud, Founder CEO</figcaption>
                          </figure>
                        </div>

                        <div class="alignwide container line-box-content">
                          <p>
                            Provepharm, acquires a company specialized in the
                            chemical synthesis of peptides and proteins for
                            therapeutic use. This is the first merger and
                            acquisition operation opening a new development
                            direction for the company in the field of biological
                            pharmaceutical products.
                          </p>
                        </div>
                      </div>

                      <div class="alignwide container line-box in-box">
                        <div class="alignwide container line-box-content">
                          <p>
                            Provepharm Life Solutions launches its new brand
                            identity with the addition of multiple healthcare
                            professionals joining the management team and
                            executive board.{" "}
                          </p>
                        </div>
                      </div>

                      <div class="alignwide container line-box in-box">
                        <figure class="wp-block-image size-full line-box-image">
                          <img
                            src="/sites/default/files/inline-images/image27.jpg"
                            alt=""
                            class="wp-image-15"
                            data-entity-type="file"
                            data-entity-uuid="19800249-6754-4525-b1dd-ac91e416ebc6"
                            data-image-style="original"
                          />
                        </figure>

                        <div class="alignwide container line-box-content">
                          <p>
                            Provepharm Life Solutions acquires{" "}
                            <strong>Apollo Pharmaceuticals USA</strong>, a
                            company specializing in{" "}
                            <strong>sterile injectable products</strong>, in the
                            United States, as part of its diversification plan.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 dot-right">
                      <div class="alignwide container line-box in-box">
                        <figure class="wp-block-image size-full line-box-image">
                          <img
                            src="/sites/default/files/inline-images/image21_0.jpg"
                            alt=""
                            class="wp-image-51"
                            data-entity-type="file"
                            data-entity-uuid="061cb33d-efd2-4f0e-b73b-82d5abc950fb"
                            data-image-style="original"
                          />
                        </figure>

                        <div class="alignwide container line-box-content">
                          <p>
                            The early years: Michel Feraud, president, and
                            founder, initially launched the company as “Provence
                            Technologies”, a research and development chemistry
                            laboratory, together with co-founder and friend
                            Christophe Baralotto. The company operated as a
                            contract research organization for international
                            pharmaceutical, cosmetic, and agrochemical groups.
                            Provence Technologies built its reputation by
                            designing innovative molecule synthesis pathways and
                            precise analytical methods, characterizing such
                            products.
                          </p>
                        </div>
                      </div>

                      <div class="alignwide container line-box in-box">
                        <div class="alignwide container line-box-content">
                          <p>
                            Provepharm obtained a centralized marketing
                            authorization from EMA paving the way for the{" "}
                            <strong>
                              commercialization of injectable methylene blue
                            </strong>{" "}
                            with the brand name <strong>ProveBlue®</strong> in
                            the 30 countries of the enlarged European Union.
                          </p>
                        </div>
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

                        <div class="alignwide container line-box-content">
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

                        <div class="alignwide container line-box-content">
                          <p>
                            Provepharm Life Solutions joins forces with{" "}
                            <strong>
                              new strategic minority partners, Téthys Invest and
                              ArchiMed
                            </strong>
                            .
                          </p>
                        </div>
                      </div>

                      <div class="alignwide container line-box in-box">
                        <div class="alignwide container line-box-content">
                          <p>
                            Thanks to its solid financial structure, Provepharm
                            Life Solutions continues to diligently develop and
                            seek out unmet needs in the therapeutics and
                            diagnostics area within the healthcare market to
                            improve the quality of life for each patient it
                            serves worldwide.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Container>
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
