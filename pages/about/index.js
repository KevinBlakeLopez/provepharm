import { useRouter } from "next/router";
import { getNextStaticProps } from "@faustwp/core";
import { gql } from "@apollo/client";

import { Main } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Timeline from "../../components/Timeline";
import BannerPeopleLives from "../../components/BannerPeopleLives";
import BannerThirdWay from "../../components/BannerThirdWay";

export default function AboutUs() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);
  console.log(`/${slug}/`);

  // const { data } = useQuery(AboutUs.query, {
  //   variables: { uri: `/${slug}/` },
  // });

  return (
    <>
      {/* <SEO title={data.seo.title} description={data.seo.title} /> */}
      <Header />
      <Main>
        <div className="bg-[url('/about-hero.jpeg')] bg-cover bg-center bg-slate-700 bg-blend-soft-light h-[400px] md:h-[700px] text-white mb-10 flex items-center">
          <h2 className="pl-8 md:pl-64 text-2xl md:text-7xl font-semibold md:font-extralight tracking-wide">
            CONNECTING <br />
            HEALTHCARE
            <br /> PROVIDERS <br />
            WITH PATIENTS TO <br />
            IMPROVE LIVES
          </h2>
        </div>
        <Container size="sm">
          <div className="md:flex mb-10">
            <div className="mb-10 md:mb-0 md:w-1/2 md:flex md:flex-col md:justify-center md:pr-[60px] ">
              <h3 className="text-6xl tracking-wider text-secondary font-extralight mb-8">
                OUR MISSION
              </h3>

              <p className="text-lg text-primary">
                Provepharm is driven to improve the lives of our patients,
                employees, and the ecosystem. We focus our resources on two main
                areas of development:
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
                        <strong>Molecule Vitalization</strong> to fully optimize
                        the molecule’s potential
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
        <BannerThirdWay />
        <Container padding="py-0 px-10" margin="mb-16" size="sm">
          <div className="md:flex justify-between text-lg text-primary">
            <div className="md:w-1/2 md:mr-8">
              <p className="mb-8">
                At Provepharm, we innovate in order to understand each
                molecule's full potential, to provide treatments that help
                patients. Provepharm is an international private company with a
                global presence in over 30 countries worldwide.
              </p>

              <p className="mb-8">
                The company operates with integrity, as our goal is to have a
                positive, significant and sustainable impact on our planet’s
                ecosystem. As a responsible pharmaceutical company, we are
                committed to adhering to the US legislation and regulations that
                apply to our company's business. We act with honesty,
                transparency and sincerity in a spirit of mutual respect.
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
                molecules. We demonstrate the definition of cutting edge every
                day – as we strive to reinvent the model of pharmaceutical
                innovation and contribute to the improvement of the hospital
                practices and specialty care for the benefit of our customers
                and patients.
              </p>

              <p>
                These values reflect our identity, our goals and embody our
                corporate culture. They characterize every Provepharm employee
                and are expressed through the daily actions of all our teams.
              </p>
            </div>
          </div>
        </Container>
        <BannerPeopleLives />
        <Timeline />
      </Main>
      <Footer />
    </>
  );
}

// AboutUs.query = gql`
//   query About($uri: ID!) {
//     pageBy(uri: $uri) {
//       seo {
//         title
//         metaDesc
//       }
//     }
//   }
// `;

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: AboutUs,
    revalidate: 10,
  });
}
