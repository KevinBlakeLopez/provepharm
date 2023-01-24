import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";
import Image from "next/image";
// import Link from "next/link";

export default function PressReleases() {
  const { loading, error, data } = useQuery(PressReleases.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Press Releases</Banner>
      <Container size="sm">
        {data.pressReleases.nodes.map(
          ({ id, title, excerpt, date, featuredImage }) => (
            <div className="md:flex md:items-center mb-10" key={id}>
              {featuredImage ? (
                <div className="max-w-[400px] mr-16">
                  <Image
                    width="600"
                    height="600"
                    src={featuredImage.node.mediaItemUrl}
                  />
                </div>
              ) : null}
              <section>
                <p className="mb-2 text-sm">
                  {new Date(date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="text-xl mb-3 font-semibold">{title}</h2>
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
                <p className="mb-10 text-blue-500 underline cursor-pointer">
                  Read more
                </p>
                <div class="w-full h-[1px] bg-[#ebebeb]"></div>
              </section>
            </div>
          )
        )}
        <div className="h-36" />
      </Container>
      <section className="bg-slate-400 sticky bottom-0 w-full">
        <h5 className="text-center text-2xl font-bold mt-2">
          Important Safety Information
        </h5>
        <div className="flex justify-center">
          {" "}
          <div className="isi mb-4 max-w-[1000px] h-44 overflow-auto">
            <div class="content">
              <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                <p>
                  <b>BLUDIGO™ (indigotindisulfonate sodium injection) </b>
                </p>

                <p>
                  <b>INDICATION AND USAGE</b>
                </p>

                <p>
                  BLUDIGO™is a diagnostic dye indicated for use as a
                  visualization aid in the cystoscopic assessment of the
                  integrity of the ureters in adults following urological and
                  gynecological open, robotic, or endoscopic surgical
                  procedures.
                </p>

                <p> </p>

                <p>
                  <b>CONTRAINDICATIONS</b>
                </p>

                <p>
                  BLUDIGO™ is contraindicated in patients with known
                  hypersensitivity to indigotindisulfonate or any of its
                  components.
                </p>

                <p> </p>

                <p>
                  <b>WARNINGS AND PRECAUTIONS</b>
                </p>

                <p>
                  <u>Cardiovascular Reactions</u>: Severe or life-threatening
                  cardiovascular reactions including cardiac arrest, arrhythmia,
                  asystole, atrioventricular block second degree, hypotension,
                  elevation in blood pressure, bradycardia, and tachycardia have
                  been reported. Closely monitor blood pressure and cardiac
                  rhythm during and following the BLUDIGO™ injection. Interrupt
                  administration if reactions are observed.
                </p>

                <p>
                  <u>Hypersensitivity Reactions</u>: Serious anaphylactic
                  reactions with hypotension, dyspnea, bronchospasm, urticaria,
                  or erythema have been reported. Monitor patients for
                  anaphylactic reactions and have emergency equipment and
                  trained personnel readily available.
                </p>

                <p>
                  <u>Interference with Oximetry Measurements</u>:
                  Anesthesiologists should be aware of the potential for
                  artifactual reduction in SpO<sub>2</sub> when anesthetized
                  patients are administered BLUDIGO™.
                </p>

                <p>
                  <b>USE IN SPECIFIC POPULATIONS</b>
                </p>

                <p>
                  <i>Renal Impairment</i>: BLUDIGO™ is not recommended for use
                  in patients with eGFR&lt;30 mL/min.
                </p>

                <p>
                  <i>Pediatric Use:</i> The safety and effectiveness of BLUDIGO™
                  have not been established in pediatric patients.
                </p>

                <p>
                  <i>Pregnancy and Lactation:</i> Please consult the Full
                  Prescribing Information before using BLUDIGO™ in a patient
                  that is lactating, pregnant, or may be pregnant.
                </p>

                <p>
                  <b>RECOMMENDED DOSAGE</b>
                </p>

                <p>
                  The recommended dose for BLUDIGO™ is 5 mL given intravenously
                  over 1 minute.
                </p>

                <p>
                  <b>IMPORTANT ADMINISTRATION INSTRUCTIONS</b>
                </p>

                <ul>
                  <li>
                    Monitor blood pressure and cardiac rhythm during and
                    following the injection.
                  </li>
                  <li>Use immediately after opening ampoule.</li>
                  <li>
                    <a name="_Hlk106005505" id="_Hlk106005505">
                      Withdraw the contents of the ampoule through a 5 micron or
                      smaller filter straw/filter needle to ensure that the
                      withdrawn solution contains no particulates.{" "}
                    </a>
                    The withdrawn solution should be inspected visually for
                    particulate matter and discoloration prior to
                    administration.{" "}
                  </li>
                  <li>
                    Do not administer with infusion assemblies used with other
                    diluents or drugs.
                  </li>
                  <li>Discardanyunused portion.</li>
                </ul>

                <p>
                  <b>ADVERSE REACTIONS</b>
                </p>

                <p>
                  <u>Clinical Trial Experience:</u> The most common adverse
                  reactions (≥ 1%) associated with BLUDIGO™ in clinical trials
                  were: constipation, nausea, vomiting, abdominal pain, pyrexia,
                  ALT increase, and dysuria.
                </p>

                <p>
                  <u>Postmarketing Experience: </u>The following adverse
                  reactions have been identified following the use of
                  indigotindisulfonate sodium injection products:
                </p>

                <ul>
                  <li>
                    <i>Cardiovascular disorders</i>: cardiac arrest, arrhythmia,
                    asystole, atrioventricular block second degree, hypotension,
                    elevation in blood pressure, bradycardia, tachycardia{" "}
                  </li>
                  <li>
                    <i>General disorders and administration site conditions</i>:
                    injection site discoloration
                  </li>
                  <li>
                    <i>Immune system disorders: </i>anaphylactic reactions with
                    hypotension, dyspnea, bronchospasm, urticaria, erythema
                  </li>
                </ul>

                <p>
                  Please see the full <b>Prescribing Information </b>for
                  additional important safety information.
                </p>

                <p>
                  <b>
                    To report SUSPECTED ADVERSE REACTIONS, contact PROVEPHARM
                    Inc. at 1–833-727-6556 or FDA at 1-800-FDA-1088 or{" "}
                  </b>
                  <a href="http://www.fda.gov/medwatch">
                    <b>www.fda.gov/medwatch.</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

PressReleases.query = gql`
  ${NavigationMenu.fragments.entry}
  query AllPressReleases($headerLocation: MenuLocationEnum) {
    pressReleases(first: 200) {
      nodes {
        slug
        id
        title
        excerpt
        date
        dateGmt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

PressReleases.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: PressReleases,
    revalidate: 1,
  });
}
