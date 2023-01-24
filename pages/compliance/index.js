import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";

export default function Compliance() {
  const { loading, error, data } = useQuery(Compliance.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>California Compliance Declaration</Banner>
      <Container>
        <div>
          <p>
            For purposes of compliance with the requirements of California
            Health and Safety Code, §§ 119400-119402, Provepharm Inc.
            (“Provepharm”) has established, as part of its Comprehensive
            Compliance Program, an annual dollar limit concerning appropriate
            items covered by California law (“Covered Items”) that are provided
            to individual California medical and healthcare professionals
            (“HCPs”) as part of Provepharm’s interactions with these
            professionals. “Medical or health professional” means any of the
            following:
          </p>

          <ul>
            <li>
              A person licensed by state law to prescribe drugs for human
              patients.
            </li>
            <li>A medical student.</li>
            <li>A member of a drug formulary committee.</li>
          </ul>

          <p>
            Provepharm has established an annual dollar limit of $2,000 for
            promotional materials, or other transfers of value, including items
            or activities that Provepharm employees may give or otherwise provide
            to an individual HCP licensed by the State of California in
            accordance withCalifornia Health and Safety Code, §§
            119400-119402.This limit represents an annual spending cap and not
            an average or target. In most instances, the amount spent per HCP
            will be substantially less than this annual limit.&nbsp; Provepharm
            Inc. reserves the right to change this limit at any time.
          </p>

          <p>The annual limit in the aggregate does not include:</p>

          <ul>
            <li>Drug samples intended for free distribution to patients</li>
            <li>Financial support of continuing medical education forums</li>
            <li>Financial support for health education scholarships</li>
            <li>
              Fair market value compensation for bona fide professional
              services, and any meals or other expenses related to the provision
              of such services
            </li>
          </ul>

          <h5>2022 Declaration of Compliance</h5>

          <p>
            Annually Provepharm set an annual aggregate limit on promotional
            expenditures provided at $2,000 per California licensed HCP. Based
            upon our current internal monitoring process, to the best of our
            knowledge and belief, and based on a good faith understanding of
            California Health &amp; Safety Code §§ 119400-402,
            Provepharm declares it is in compliance with all material respects
            with the requirements described inCalifornia Health &amp; Safety
            Code §§ 119400-402 Provepharm will continually evaluate and update its
            Compliance Program as necessary and appropriate given the changing
            environment and needs.
          </p>

          <p>
            Provepharm makes this declaration available on this website and a
            copy of this document. 
          </p>

          <h4>Comprehensive Compliance Program Overview:</h4>

          <h5>Introduction</h5>

          <p>
            The following is an overview of Provepharm’s comprehensive
            compliance program which is reviewed and updated periodically to
            meet changing legal and compliance requirements.
          </p>

          <p>
            Provepharm’s Corporate U.S. Code of Conduct (“Code of Conduct”)
            reflects our commitment to conducting business with high standards
            of ethical behavior. The Code of Conduct is applicable to all
            employees of Provepharm. All directors, officers and employees and
            agents of the company are expected to act with integrity and to make
            ethical decisions consistent with the Code of Conduct.
          </p>

          <p>
            It is Provepharm’s policy to comply with all applicable state and
            federal laws and regulations, including, but not limited to, those
            related to Medicare, Medicaid, transparency reporting, and all other
            State and Federal health care program requirements including CMS and
            Food and Drug Administration regulation, laws and requirements. In
            addition to the Code of Conduct, Provepharm has implemented a
            Compliance Program that is designed to reduce legal and regulatory
            risks that Provepharm faces and provide a roadmap for appropriate
            business conduct that complies with all applicable laws and
            regulations in Provepharm’s United States business
          </p>

          <p>
            Employees are responsible for understanding what is expected of
            them, as outlined in Provepharm’s Code of Conduct and the Compliance
            Program. Provepharm Employees must always exercise good judgement
            and, when they are unsure of the proper course of conduct, must ask.
            Knowing the channels for asking questions, raising concerns, and
            identifying the resources and materials necessary to make the right
            decisions is a necessary component of every employee’s role at
            Provepharm.
          </p>

          <h5>Compliance Program Oversight</h5>

          <p>
            Provepharm has a Chief Compliance Officer who is responsible for
            leading, developing, operating, and monitoring the compliance
            program.
          </p>

          <h5>Written Standards</h5>

          <p>
            In addition to the Code of Conduct, Provepharm has developed and
            implemented compliance policies and procedures to help ensure
            compliance with applicable laws and to support ethical
            decision-making. The Compliance Program verbalizes the company’s
            commitment to compliance (e.g., by including adherence to the
            compliance program as an element in evaluating management and
            employees) and addresses specific areas of potential fraud and
            abuse, such as the reporting of pricing and rebate information to
            the federal health care programs, and sales and marketing practices.
          </p>

          <h5>Education and Training</h5>

          <p>
            All Provepharm employees in the U.S. receive appropriate compliance
            training (upon hire and updated on at least an annual basis) which
            includes education on the OIG Guidance, the PhRMA Code,
            anti-kickback and anti-corruption laws, the federal False Claims
            Act, and requirements related to product promotion, privacy,
            conflicts of interest, and other applicable federal, state, and
            industry rules and guidelines.
          </p>

          <h5>Compliance Reporting</h5>

          <p>
            Provepharm’s Compliance Officer and Compliance Department ensure
            that all Provepharm employees, vendors and contractors are able to
            report a potential compliance issue, either directly or anonymously,
            and records, investigates and reports all reported matters as
            appropriate.
          </p>

          <h5>Auditing and Monitoring</h5>

          <p>
            Provepharm’s Compliance Program includes auditing and monitoring to
            assess the effectiveness of individual policies and the Compliance
            Program as a whole. Auditing and monitoring results are utilized to
            continually improve the Compliance Program.
          </p>

          <h5>Investigating / Responding to Potential Violations</h5>

          <p>
            Provepharm’s Compliance Program requires that potential violations
            be investigated. If a violation is uncovered, Provepharm shall take
            appropriate remedial and disciplinary actions, which may include
            corrective actions and/or disciplinary actions (up to an including
            possible termination of employment or contract).
          </p>

          <p>
            Provepharm will assess its compliance program at least annually, for
            the purpose of declaring compliance with California Health and
            Safety Code §§ 119400-119402.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

Compliance.query = gql`
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
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

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Compliance,
    revalidate: 1,
  });
}
