import Link from "next/link";

import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import SinglePostTemplate from "../../components/SinglePostTemplate";

export default function Privacy() {
  const { data } = useQuery(Privacy.query);

  return (
    <>
      <SEO title={data.page.seo.title} description={data.page.seo.metaDesc} />
      <Header />
      <Container>
        {/* <SinglePostTemplate data={data.page} /> */}
        <div className="text-xl text-zinc-700">
          <h2 className="text-3xl text-center font-bold mb-4">
            Website Privacy Policy
          </h2>
          <p className="mb-4">
            Last modified:{" "}
            <strong>
              <span>07/05/2022</span>
            </strong>
          </p>
          <p className="mb-4">
            <u>
              <strong>Introduction</strong>
            </u>
          </p>
          <p className="mb-4">
            Provepharm Inc. We respect your privacy and are committed to
            protecting it through our compliance with this policy.
          </p>
          <p className="mb-4">
            This policy describes the types of information we may collect from
            you or that you may provide when you visit the website
            provepharmusa.com and our practices for collecting, using,
            maintaining, protecting, and disclosing that information.
          </p>
          <p className="mb-4">This policy applies to information we collect:</p>
          <ul className="pl-12 mb-4">
            <li>On this Website.</li>
            <li>
              In email, text, and other electronic messages between you and this
              Website.
            </li>
          </ul>
          <p className="mb-4">It does not apply to information collected by:</p>
          <ul className="pl-12 mb-4">
            <li>
              Us offline or through any other means, including on any other
              website operated by <a>PROVEPHARM</a> or its affiliates and
              subsidiaries or any third party.
            </li>
            <li>
              Any PROVEPHARM or its affiliate or subsidiaries or third-party
              websites/content/services, including through any application or
              content (including advertising) that may link to or be accessible
              from the Website.
            </li>
          </ul>
          <p className="mb-4">
            The Company is not responsible for how third-party sources operate
            or treat your personal information and data.
          </p>
          <p className="mb-4">
            This Website is controlled and operated by Provepharm Inc. from the
            United States and is not intended to subject us to the laws or
            jurisdictions of any state, country, or territory other than the
            United States. For residents outside of the United States, please
            see provepharm.com. Any information you provide to Provepharm Inc.
            using this website may be stored and processed, transferred between,
            and accessed from the United States and other countries which may
            not guarantee the same level of protection of personal information
            as the one in which you reside. However, Provepharm Inc. will handle
            your personal information in accordance with this Privacy Policy
            regardless of where your personal information is stored/accessed.
          </p>
          <p className="mb-4">
            Please read this policy carefully to understand our policies and
            practices regarding your information and how we will treat it. If
            you do not agree with our policies and practices, your choice is not
            to use our website. By accessing or using this website, you agree to
            this privacy policy. This policy may change from time to time (see
            Changes to Our Policy). Your continued use of this Website after we
            make changes is deemed to be acceptance of those changes, so please
            check the policy periodically for updates.
          </p>
          <p className="mb-4">
            <u>
              <strong>Children Under the Age of 18</strong>
            </u>
          </p>
          <p className="mb-4">
            Our Website is available to users who are 18 years of age or older
            and it is not intended for children under 18 years of age. No one
            under age 18 may provide any information to the Website. We do not
            knowingly collect personal information from children under 18. If
            you are under 18, do not use or provide any information on this
            Website, through any of its features, or provide any information
            about yourself to us, including your name, address, telephone
            number, or email address. If we learn we have collected or received
            personal information from a child under 18 without verification of
            parental consent, we will delete that information. If you believe we
            might have any information from or about a child under 18, please
            contact us at{" "}
            <a>
              <strong>
                <span>us-info@provepharm.com</span>
              </strong>
            </a>
            <strong>&nbsp;&nbsp;&nbsp;</strong>
          </p>
          <p className="mb-4">
            California residents under 18 years of age may have additional
            rights regarding the collection and sale of their personal
            information.
          </p>
          <p className="mb-4">
            <u>
              <strong>
                Information We Collect About You and How We Collect It
              </strong>
            </u>
          </p>
          <p className="mb-4">
            We collect several types of information from and about users of our
            website, including information:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              By which you may be personally identified, such as name, postal
              address, email address, telephone number, professional title or
              affiliation,and any other identifier by which you may be contacted
              online or offline ("personal information").
            </li>
            <li>
              About your internet connection, the equipment you use to access
              our website, and usage details.
            </li>
            <li>
              That is about you but individually does not identify you, such as
              information you provide about your history or product usage.
            </li>
          </ul>
          <p className="mb-4">We collect this information:</p>
          <ul className="pl-12 mb-4">
            <li>Directly from you when you provide it to us.</li>
            <li>
              Automatically as you navigate through the site. Information
              collected automatically may include usage details, IP addresses,
              and information collected through cookies
            </li>
          </ul>
          <p>
            <a>
              <strong>
                <em>Information You Provide to Us</em>
              </strong>
            </a>
          </p>
          <p className="mb-4">
            We collect personal information and other data that you choose to
            provide to us through our website. The information we collect on or
            through our website may include:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              Information that you provide on or through our website by entering
              the forms or data fields (e.g., Contact Us inquiries
              registrations, and other submissions through the Website). We may
              also ask you for information when you report a problem with our
              website or any of our products. Healthcare professionals may also
              provide information relating to their professional credentials,
              including specialties and professional affiliations and certain
              information related to our product(s).
            </li>
            <li>
              Records and copies of your correspondence (including email
              addresses) if you contact us.
            </li>
          </ul>
          <p className="mb-4">
            If you submit any personal information relating to other people to
            us, you represent that you have the authority to do so and to permit
            us to use the information in accordance with this Privacy Policy.
          </p>
          <p className="mb-4">
            <em>
              <strong>
                Information We Collect Through Automatic Data Collection
                Technologies
              </strong>
            </em>
          </p>
          <p className="mb-4">
            As you navigate through and interact with our website, we may use
            automatic data collection technologies to collect certain
            information about your equipment, browsing actions, and patterns,
            including:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              Details of your visits to our website, including traffic data,
              location data, logs,and other communication data, and the
              resources that you access and use on the Website.
            </li>
            <li>
              Information about your computer and internet connection, including
              your IP address, operating system, and browser type.
            </li>
          </ul>
          <p className="mb-4">
            The information we collect may include personal information, but we
            may maintain it or associate it with personal information we collect
            in other ways or receive from third parties. It helps us to improve
            our website and to deliver better and more personalized service,
            including by enabling us to:
          </p>
          <ul className="pl-12 mb-4">
            <li>Estimate our audience size and usage patterns.</li>
            <li>
              Store information about your preferences, allowing us to customize
              our Website according to your individual interests.
            </li>
            <li>Speed up your searches.</li>
            <li>Recognize you when you return to our Website</li>
          </ul>
          <p className="mb-4">
            The technologies we use for this automatic data collection may
            include:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              <strong>Cookies (or browser cookies).</strong> A cookie is a small
              file placed on the hard drive of your computer. You may refuse to
              accept browser Cookies by activating the appropriate setting on
              your browser. However, if you select this setting, you may be
              unable to access certain parts of our website. Unless you have
              adjusted your browser setting so that it will refuse cookies, our
              system will issue cookies when you direct your browser to our
              website.
            </li>
            <li>
              <strong>Web Beacons.</strong> Pages of our Website [and our
              emails] may contain small electronic files known as web beacons
              (also referred to as clear gifs, pixel tags, and single-pixel
              gifs) that permit the Company, for example, to count users who
              have visited those pages or [opened an email] and for other
              related website statistics (for example, recording the popularity
              of certain website content and verifying system and server
              integrity).
            </li>
            <li>
              <strong>Flash Cookies</strong>. Certain features of our website
              may use local stored objects (or Flash cookies) to collect and
              store information about your preferences and navigation to, from,
              and on our website. Flash cookies are not managed by the same
              browser settings as are used for browser cookies. For information
              about managing your privacy and security settings for Flash
              cookies, see Choices About How We Use and Disclosure Your
              Information
            </li>
          </ul>
          <p className="mb-4">
            <u>
              <strong>How We Use Your Information</strong>
            </u>
          </p>
          <p className="mb-4">
            We use information that we collect about you or that you provide to
            us, including any personal information:
          </p>
          <ul className="pl-12 mb-4">
            <li>To present our website and its contents to you.</li>
            <li>
              To provide you with information, products, or services that you
              request from us
            </li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>
              To carry out our obligations and enforce our rights arising from
              any contracts entered into between you and us, including for
              billing and collection.
            </li>
            <li>
              To notify you about changes to our website or any products or
              services we offer or provide through it.
            </li>
            <li>As required by applicable law or regulation.</li>
            <li>
              In any other way we may describe when you provide the information.
            </li>
            <li>For any other purpose with your consent.</li>
          </ul>
          <p className="mb-4">
            We may also use your information to contact you about our own goods
            and services that may be of interest to you. If you do not want us
            to use your information in this way, please check the relevant box
            located on the form on which we collect your data (the registration
            form). For more information, see Choices About How We Use and
            Disclose Your Information.
          </p>
          <p className="mb-4">
            <u>
              <strong>Disclosure of Your Information</strong>
            </u>
          </p>
          <p className="mb-4">
            We may disclose aggregated information about our users, and
            information that does not identify any individual, without
            restriction.{" "}
          </p>
          <p className="mb-4">
            We may disclose personal information that we collect, or you provide
            as described in this privacy policy:
          </p>
          <ul className="pl-12 mb-4">
            <li>To our subsidiaries and affiliates.</li>
            <li>
              To contractors, service providers, and other third parties we use
              to support our website or our business operations.
            </li>
            <li>
              To a buyer or other successor in the event of a merger,
              divestiture, restructuring, reorganization, dissolution, or other
              sale or transfer of some or all Provepharm Inc.'s assets, whether
              as a going concern or as part of bankruptcy, liquidation, or
              similar proceeding, in which personal information held by
              Provepharm Inc. about our Website users is among the assets
              transferred.
            </li>
            <li>To fulfill the purpose for which you provide it.</li>
            <li>
              For any other purpose disclosed by us when you provide the
              information.
            </li>
            <li>With your consent.</li>
          </ul>
          <p className="mb-4">
            We may also disclose your personal information:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              To comply with any court order, law, or legal process, including
              responding to any government or regulatory request or in
              connection with any legal or regulatory obligation we may have.
            </li>
            <li>
              To enforce or apply our terms of use and other agreements,
              including for billing and collection purposes please go to
              <Link href="/terms">provepharmusa.com/terms</Link>.
            </li>
            <li>
              If we believe disclosure is necessary or appropriate to protect
              the rights, property, or safety of Provepharm Inc., our customers,
              or others.
            </li>
          </ul>
          <p className="mb-4">
            <u>
              <strong>
                Choices About How We Use and Disclose Your Information
              </strong>
            </u>
          </p>
          <p className="mb-4">
            We strive to provide you with choices regarding the personal
            information you provide to us. We have created mechanisms to provide
            you with the following control over your information:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              <strong>Tracking Technologies and Advertising</strong>. You can
              set your browser to refuse all or some browser cookies or to alert
              you when cookies are being sent. If you disable or refuse cookies,
              please note that some parts of this site may then be inaccessible
              or not function properly.
            </li>
            <li>
              <strong>Promotional Offers from the Company</strong>. If you do
              not wish to have your email address or other contact information
              used by the Company to promote our products or services, you can
              opt-out by checking the relevant box located on the form on which
              we collect your data at any other time by sending us an email
              stating your request to{" "}
              <a href="mailto:us-info@provepharm.com">
                <span>us-info@provepharm.com</span>
              </a>
              . If we have sent you a promotional email, you may send us a
              return email asking to be omitted from future email distributions
              or utilize the unsubscribe links provided in the email.
            </li>
          </ul>
          <p className="mb-4">
            We do not control third parties’ collection or use of your
            information to serve interest-based advertising. However, these
            third parties may provide you with ways to choose not to have your
            information collected or used in this way. You can opt-out of
            receiving targeted ads from members of the Network Advertising
            Initiative ("<strong>NAI</strong>") on the NAI's website at{" "}
            <a href="https://thenai.org/opt-out/">
              <span>https://thenai.org/opt-out/ </span>
            </a>
            Residents of certain states, such as California, Nevada, Colorado,
            Virginia, and Utah may have additional personal information rights
            and choices.
          </p>
          <p className="mb-4">
            <strong>
              <u>Accessing and Correcting Your Information</u>
            </strong>
          </p>
          <p className="mb-4">
            You may send us an email at{" "}
            <a href="mailto:us-info@provepharm.com">
              <span>us-info@provepharm.com</span>
            </a>
            &nbsp;to request access to, correct or delete any personal
            information that you have provided to us. We may not accommodate a
            request to change information if we believe the change would violate
            any law or legal requirement or cause the information to be
            incorrect.
          </p>
          <p className="mb-4">
            Residents of certain states, such as California, Nevada, Colorado,
            Virginia, and Utah may have additional personal information rights
            and choices.
          </p>
          <p className="mb-4">
            <strong>
              <u>Your State Privacy Rights</u>
            </strong>
          </p>
          <p className="mb-4">
            If you are a California, Nevada, Colorado, Virginia, or Utah
            resident, your state's laws may provide you with additional rights
            regarding our use of your personal information.
          </p>
          <p className="mb-4">
            <strong>California :</strong>
          </p>
          <p className="mb-4">
            We may use or disclose information collected pursuant to the terms
            of this Privacy Policy.&nbsp; As required by California law, our
            website has collected:
          </p>
          <figure className="mb-4">
            <table className="border-2 border-black">
              <tbody className="border-2 border-black">
                <tr className="border-2 border-black">
                  <td className="border-2 border-black text-center py-2">
                    <strong>Category</strong>
                  </td>
                  <td className="border-2 border-black text-center">
                    <strong>Examples</strong>
                  </td>
                  <td className="border-2 border-black text-center">
                    <strong>Collected</strong>
                  </td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black px-2">
                    A. Identifiers.
                  </td>
                  <td className="border-2 border-black p-2">
                    A real name, alias, postal address, unique personal
                    identifier, online identifier, Internet Protocol address,
                    email address, account name, Social Security number,
                    driver's license number, passport number, or other similar
                    identifiers.
                  </td>
                  <td className="border-2 border-black px-2">YES</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    B. Personal information categories are listed in the
                    California Customer Records statute (Cal. Civ. Code §
                    1798.80(e)).
                  </td>
                  <td className="border-2 border-black p-2">
                    A name, signature, Social Security number, physical
                    characteristics or description, address, telephone number,
                    passport number, driver's license or state identification
                    card number, insurance policy number, education, employment,
                    employment history, bank account number, credit card number,
                    debit card number, or any other financial information,
                    medical information, or health insurance information.
                    <br />
                    Some personal information included in this category may
                    overlap with other categories.
                  </td>
                  <td className="border-2 border-black p-2">YES</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    C. Protected classification characteristics under California
                    or federal law.
                  </td>
                  <td className="border-2 border-black p-2">
                    Age (40 years or older), race, color, ancestry, national
                    origin, citizenship, religion or creed, marital status,
                    medical condition, physical or mental disability, sex
                    (including gender, gender identity, gender expression,
                    pregnancy or childbirth and related medical conditions),
                    sexual orientation, veteran or military status, genetic
                    information (including familial genetic information).
                  </td>
                  <td className="border-2 border-black p-2">YES</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    D. Commercial information.
                  </td>
                  <td className="border-2 border-black p-2">
                    Records of personal property, products or services
                    purchased, obtained, or considered, or other purchasing or
                    consuming histories or tendencies.
                  </td>
                  <td className="border-2 border-black p-2">YES</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    E. Biometric information.
                  </td>
                  <td className="border-2 border-black p-2">
                    Genetic, physiological, behavioral, and biological
                    characteristics, or activity patterns used to extract a
                    template or other identifier or identifying information,
                    such as, fingerprints, faceprints, and voiceprints, iris or
                    retina scans, keystroke, gait, or other physical patterns,
                    and sleep, health, or exercise data.
                  </td>
                  <td className="border-2 border-black p-2">NO</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    F. Internet or other similar network activity.
                  </td>
                  <td className="border-2 border-black p-2">
                    Browsing history, search history, information on a
                    consumer's interaction with a website, application, or
                    advertisement.
                  </td>
                  <td className="border-2 border-black p-2">YES</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    G. Geolocation data.
                  </td>
                  <td className="border-2 border-black p-2">
                    Physical location or movements.
                  </td>
                  <td className="border-2 border-black p-2">YES</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    H. Sensory data.
                  </td>
                  <td className="border-2 border-black p-2">
                    Audio, electronic, visual, thermal, olfactory, or similar
                    information.
                  </td>
                  <td className="border-2 border-black p-2">NO</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    I. Professional or employment-related information.
                  </td>
                  <td className="border-2 border-black p-2">
                    Current or past job history or performance evaluations.
                  </td>
                  <td className="border-2 border-black p-2">NO</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    J. Non-public education information (per the Family
                    Educational Rights and Privacy Act (20 U.S.C. Section 1232g,
                    34 C.F.R. Part 99)).
                  </td>
                  <td className="border-2 border-black p-2">
                    Education records directly related to a student maintained
                    by an educational institution or party acting on its behalf,
                    such as grades, transcripts, class lists, student schedules,
                    student identification codes, student financial information,
                    or student disciplinary records.
                  </td>
                  <td className="border-2 border-black p-2">NO</td>
                </tr>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black p-2">
                    K. Inferences are drawn from other personal information.
                  </td>
                  <td className="border-2 border-black p-2">
                    The profile reflects a person's preferences,
                    characteristics, psychological trends, predispositions,
                    behavior, attitudes, intelligence, abilities, and aptitudes.
                  </td>
                  <td className="border-2 border-black p-2">NO</td>
                </tr>
              </tbody>
            </table>
          </figure>
          <p className="mb-4">
            California law provides California residents with specific rights
            regarding their personal information. This section describes and
            explains how to exercise those rights.
          </p>
          <p className="mb-4">
            <em>
              <strong>Right to Know and Data Portability</strong>
            </em>
          </p>
          <p className="mb-4">
            You have the right to request that we disclose certain information
            to you about our collection and use of your personal information
            over the past 12 months (the "right to know"). Once we receive your
            request and confirm your identity, we will disclose to you:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              The categories of personal information we collected about you.
            </li>
            <li>
              The categories of sources for the personal information we
              collected about you.
            </li>
            <li>
              Our business or commercial purpose for collecting or selling that
              personal information.
            </li>
            <li>
              The categories of third parties with whom we share that personal
              information.
            </li>
            <li>
              If we sold or disclosed your personal information for a business
              purpose, two separate lists disclosing:
              <ul>
                <li>
                  sales identifying the personal information categories that
                  each category of recipient purchased.
                </li>
                <li>
                  disclosures for a business purpose, identifying the personal
                  information categories that each category of recipient
                  obtained.
                </li>
              </ul>
            </li>
            <li>
              The specific pieces of personal information we collected about you
              (also called a data portability request).
            </li>
          </ul>
          <p className="mb-4">
            <strong>
              <em>Right to Delete</em>
            </strong>
          </p>
          <p className="mb-4">
            You have the right to request that we delete any of your personal
            information that we collected from you and retained, subject to
            certain exceptions (the "right to delete"). Once we receive your
            request and confirm your identity, we will review your request to
            see if an exception allowing us to retain the information applies.
            We may deny your deletion request if retaining the information is
            necessary for us or our service provider(s) to:
          </p>
          <ol className="pl-12 mb-4">
            <li>
              Complete the transaction for which we collected the personal
              information, provide a good or service that you requested, take
              actions reasonably anticipated within the context of our ongoing
              business relationship with you, and fulfill the terms of a written
              warranty or product recall conducted in accordance with federal
              law, or otherwise perform our contract with you.
            </li>
            <li>
              Detect security incidents, protect against malicious, deceptive,
              fraudulent, or illegal activity, or prosecute those responsible
              for such activities.
            </li>
            <li>
              Debug products to identify and repair errors that impair existing
              intended functionality.
            </li>
            <li>
              Exercise free speech, ensure the right of another consumer to
              exercise their free speech rights, or exercise another right
              provided for by law.
            </li>
            <li>
              Comply with the California Electronic Communications Privacy Act
              (Cal. Penal Code § 1546 et. seq.).
            </li>
            <li>
              Engage in public or peer-reviewed scientific, historical, or
              statistical research in the public interest that adheres to all
              other applicable ethics and privacy laws, when the information's
              deletion may likely render impossible or seriously impair the
              research's achievement if you previously provided informed
              consent.
            </li>
            <li>
              Enable solely internal uses that are reasonably aligned with
              consumer expectations based on your relationship with us.
            </li>
            <li>Comply with a legal obligation.</li>
            <li>
              Make other internal and lawful uses of that information that are
              compatible with the context in which you provided it.
            </li>
          </ol>
          <p className="mb-4">
            We will delete or deidentify personal information not subject to one
            of these exceptions from our records and will direct our service
            providers to take similar action.
          </p>
          <p className="mb-4">
            <strong>
              <em>Exercising Your Rights to Know or Delete</em>
            </strong>
          </p>
          <p className="mb-4">
            To exercise your rights to know or delete described above, please
            submit a request by:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              Emailing us at{" "}
              <a href="mailto:us-info@provepharm.com">
                <span>
                  <strong>us-info@provepharm.com</strong>
                </span>
              </a>
              .
            </li>
          </ul>
          <p className="mb-4">
            Only you, or someone legally authorized to act on your behalf, may
            make a request to know or delete related to your personal
            information.
          </p>
          <p className="mb-4">
            You may only submit a request to know twice within a 12-month
            period.{" "}
          </p>
          <p className="mb-4">
            We cannot respond to your request or provide you with personal
            information if we cannot verify your identity or authority to make
            the request and confirm the personal information relates to
            you.&nbsp; We will only use personal information provided in the
            request to verify the requestor's identity or authority to make it.
          </p>
          <p className="mb-4">
            California's "Shine the Light" law (Civil Code Section § 1798.83)
            permits users of our Website that are California residents to
            request certain information regarding our disclosure of personal
            information to third parties for their direct marketing purposes. To
            make such a request, please send an email to
            <span> </span>
            <a href="mailto:us-info@provepharm.com">
              <span>
                <strong>us-info@provepharm.com</strong>
              </span>
            </a>
            .
          </p>
          <p className="mb-4">
            <strong>
              <u>Other State Rights</u>
            </strong>
          </p>
          <p className="mb-4">
            Colorado, Virginia, and Utah each provide their state residents with
            rights to:
          </p>
          <ul className="pl-12 mb-4">
            <li>Confirm whether we process their personal information.</li>
            <li>Access and delete certain personal information.</li>
            <li>Data portability.</li>
            <li>
              Opt-out of personal data processing for targeted advertising and
              sales.
            </li>
          </ul>
          <p className="mb-4">
            Colorado and Virginia also provide their state residents with rights
            to:
          </p>
          <ul className="pl-12 mb-4">
            <li>
              Correct inaccuracies in their personal information, considering
              the information's nature and processing purpose.
            </li>
            <li>
              Opt-out of profiling in furtherance of decisions that produce
              legal or similarly significant effects.
            </li>
          </ul>

          <p className="mb-4">
            To exercise any of these rights please email us at:{" "}
            <a href="mailto:us-info@provepharm.com">
              <span>
                <strong>us-info@provepharm.com</strong>
              </span>
            </a>
          </p>

          <p className="mb-4">
            <u>
              <strong>Data Security</strong>
            </u>
          </p>

          <p className="mb-4">
            Unfortunately, the transmission of information via the internet is
            not completely secure. Although we do our best to protect your
            personal information, we cannot guarantee the security of your
            personal information transmitted to our website. Any transmission of
            personal information is at your own risk. We are not responsible for
            circumvention of any privacy settings or security measures contained
            on the Website.
          </p>

          <p className="mb-4">
            <strong>
              <u>Changes to Our Privacy Policy</u>
            </strong>
          </p>

          <p className="mb-4">
            It is our policy to post any changes we make to our privacy policy
            on this page. If we make material changes to how we treat our users'
            personal information, we will notify you by placing an update on the
            Website. The date the privacy policy was last revised is identified
            at the top of the page. You are responsible for ensuring we have an
            up-to-date active and deliverable email address for you, and for
            periodically visiting our website and this privacy policy to check
            for any changes.
          </p>

          <p className="mb-4">
            <u>
              <strong>Contact Information</strong>
            </u>
          </p>

          <p className="mb-4">
            To ask questions or comment about this privacy policy and our
            privacy practices, contact us at:
          </p>

          <p className="mb-4">
            <a href="mailto:us-info@provepharm.com">
              <span>
                <strong>us-info@provepharm.com</strong>
              </span>
            </a>
          </p>

          <p className="mb-4">
            To register a complaint or concern, please contact us at{" "}
            <a href="mailto:us-info@provepharm.com">
              <span>
                <strong>us-info@provepharm.com</strong>
              </span>
            </a>
          </p>

          <p className="mb-4">
            For pharmacovigilance and medical information inquiries, please
            contact us at 1-833-727-6556 or e-mail us at{" "}
            <a href="mailto:safety-us@provepharm.com">
              <span>
                <strong>safety-us@provepharm.com</strong>
              </span>
            </a>
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

Privacy.query = gql`
  query PrivacyPage {
    page(id: "/privacy/", idType: URI) {
      seo {
        title
        metaDesc
      }
      content
    }
  }
`;

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: Privacy,
    revalidate: 10,
  });
}
