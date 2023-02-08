import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";
import styles from "./terms.module.scss";
import Link from "next/link";

export default function TermsAndConditions() {
  const { loading, error, data } = useQuery(TermsAndConditions.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Container>
        <div className={`${styles.termsDiv} text-zinc-700 text-xl`}>
          <h2 className="text-3xl font-bold text-center mb-4">
            Website Terms of Use
          </h2>

          <p>Last Modified: 07/05/2022</p>

          <p>
            <strong>
              <u>Acceptance of the Terms of Use</u>
            </strong>
          </p>

          <p>
            These terms of use are entered into by and between You and
            Provepharm Inc. The following terms and conditions govern your
            access to and use of provepharmusa.com, including any content,
            functionality, and services offered on or through provepharmusa.com.
          </p>

          <p>
            Please read the Terms of Use carefully before you start to use the
            Website. By using the Website, you accept and agree to be bound and
            abide by these Terms of Use and our Privacy Policy, found at
            <Link href="/privacy">provepharmusa.com/privacy</Link>. If you do
            not want to agree to these Terms of Use or the Privacy Policy, you
            must not access or use the Website.
          </p>

          <p>
            This Website is offered and available to users who are 18 years of
            age or older and reside in the United States. By using this Website,
            you represent and warrant that you meet all the foregoing
            eligibility requirements. If you do not meet all these requirements,
            you must not access or use the Website.
          </p>

          <p>
            <strong>
              <u>Changes to the Terms of Use</u>
            </strong>
          </p>

          <p>
            We may revise and update these Terms of Use from time to time at our
            sole discretion. All changes are effective immediately when we post
            them. However, any changes to the dispute resolution provisions set
            out in <em>Governing Law and Jurisdiction</em> will not apply to any
            disputes for which the parties have actual notice before the date
            the change is posted on the Website.
          </p>

          <p>
            Your continued use of the Website following the posting of the
            revised Terms of Use means that you accept and agree to the changes.
            You are expected to check this page from time to time so you are
            aware of any changes, as they are binding on you.
          </p>

          <p>
            <strong>
              <u>Accessing the Website and Account Security</u>
            </strong>
          </p>

          <p>
            We reserve the right to withdraw or amend this Website, and any
            service or material we provide on the Website, in our sole
            discretion without notice. We will not be liable if for any reason
            all or any part of the Website is unavailable at any time or for any
            period. From time to time, we may restrict access to some parts of
            the Website, or the entire Website, to users, including registered
            users.
          </p>

          <p>You are responsible for both:</p>

          <ul>
            <li>
              Making all arrangements necessary for you to have access to the
              Website.
            </li>
            <li>
              Ensuring that all persons who access the Website through your
              internet connection are aware of these Terms of Use and comply
              with them.
            </li>
          </ul>

          <p>
            To access the Website or some of the resources it offers, you may be
            asked to provide certain information. It is a condition of your use
            of the Website that all the information you provide on the Website
            is correct, current, and complete. You agree that all information
            you provide to this Website or otherwise, including, but not limited
            to, using any interactive features on the Website, is governed by
            our <em>Privacy Policy.</em> Please go to{" "}
            <Link href="/privacy">provepharmusa.com/privacy</Link>, and consent
            to all actions we take with respect to your information consistent
            with our Privacy Policy.
          </p>

          <p>
            <strong>
              <u>Intellectual Property Rights</u>
            </strong>
          </p>

          <p>
            The Website and its entire contents, features, and functionality
            (including but not limited to all information, software, text,
            displays, images, video, and audio, and the design, selection, and
            arrangement thereof) are owned by the Company, its licensors, or
            other providers of such material and are protected by the United
            States and international copyright, trademark, patent, trade secret,
            and other intellectual property or proprietary rights laws.
          </p>

          <p>
            These Terms of Use permit you to use the Website for your personal,
            non-commercial use only. You must not reproduce, distribute, modify,
            create derivative works of, publicly display, publicly perform,
            republish, download, store, or transmit any of the material on our
            website, except as follows:
          </p>

          <ul>
            <li>
              Your computer may temporarily store copies of such materials in
              RAM incidental to your accessing and viewing those materials.
            </li>
            <li>
              You may store files that are automatically cached by your Web
              browser for display enhancement purposes.
            </li>
            <li>
              You may print or download one copy of a reasonable number of pages
              of the Website for your own personal, non-commercial use and not
              for further reproduction, publication, or distribution.
            </li>
            <li>
              If we provide desktop, mobile, or other applications for download,
              you may download a single copy to your computer or mobile device
              solely for your own personal, non-commercial use, provided you
              agree to be bound by our end user license agreement for such
              applications.
            </li>
            <li>
              If we provide social media features on provepharmusa.com with
              certain content, you may take such actions as are enabled by such
              features.
            </li>
          </ul>

          <p>You must not:</p>

          <ul>
            <li>Modify copies of any materials from this site.</li>
            <li>
              Use any illustrations, photographs, video or audio sequences, or
              any graphics separately from the accompanying text.
            </li>
            <li>
              Delete or alter any copyright, trademark, or other proprietary
              rights notices from copies of materials from this site.
            </li>
          </ul>

          <p>
            You must not access or use for any commercial purposes any part of
            the Website or any services or materials available through the
            Website.
          </p>

          <p>
            Any use of the Website not expressly permitted by these Terms of Use
            is a breach of these Terms of Use and may violate copyright,
            trademark, and other laws.
          </p>

          <p>
            <strong>
              <u>Trademarks</u>
            </strong>
          </p>

          <p>
            The Company name, the terms and all related names, logos, product
            and service names, designs, and slogans are trademarks of the
            Company or its affiliates or licensors. You must not use such marks
            without the prior written permission of the Company. All other
            names, logos, product and service names, designs, and slogans on
            this Website are the trademarks of their respective owners.
          </p>

          <p>
            <strong>
              <u>Prohibited Uses</u>
            </strong>
          </p>

          <p>
            You may use the Website only for lawful purposes and in accordance
            with these Terms of Use. You agree not to use the Website:
          </p>

          <ul>
            <li>
              In any way that violates any applicable federal, state, local, or
              international law or regulation (including, without limitation,
              any laws regarding the export of data or software to and from the
              US or other countries).
            </li>
            <li>
              For the purpose of exploiting, harming, or attempting to exploit
              or harm minors in any way by exposing them to inappropriate
              content, asking for personally identifiable information, or
              otherwise.
            </li>
            <li>
              To impersonate or attempt to impersonate the Company, a Company
              employee, another user, or any other person or entity (including,
              without limitation, by using email addresses or screen names
              associated with any of the foregoing).
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits anyone's
              use or enjoyment of the Website, or which, as determined by us,
              may harm the Company or users of the Website, or expose them to
              liability.
            </li>
          </ul>

          <p>
            <strong>Additionally, you agree not to:</strong>
          </p>

          <ul>
            <li>
              Use the Website in any manner that could disable, overburden,
              damage, or impair the site or interfere with any other party's use
              of the Website, including their ability to engage in real-time
              activities through the Website.
            </li>
            <li>
              Use any robot, spider, or other automatic devices, process, or
              means to access the Website for any purpose, including monitoring
              or copying any of the material on the Website.
            </li>
            <li>
              Use any manual process to monitor or copy any of the material on
              the Website, or for any other purpose not expressly authorized in
              these Terms of Use, without our prior written consent.
            </li>
            <li>
              Use any device, software, or routine that interferes with the
              proper working of the Website.
            </li>
            <li>
              Introduce any viruses, Trojan horses, worms, logic bombs, or other
              material that is malicious or technologically harmful.
            </li>
            <li>
              Attempt to gain unauthorized access to, interfere with, damage, or
              disrupt any parts of the Website, the server on which the Website
              is stored, or any server, computer, or database connected to the
              Website.
            </li>
            <li>
              Attack the Website via a denial-of-service attack or a distributed
              denial-of-service attack.
            </li>
            <li>
              Otherwise attempt to interfere with the proper working of the
              Website.
            </li>
          </ul>

          <p>
            <strong>
              <u>Reliance on Information Posted</u>
            </strong>
          </p>

          <p>
            The information presented on or through the Website is made
            available solely for general information purposes. We do not warrant
            the accuracy, completeness, or usefulness of this information. Any
            reliance you place on such information is strictly at your own risk.
            We disclaim all liability and responsibility arising from any
            reliance placed on such materials by you or any other visitor to the
            Website, or by anyone who may be informed of any of its contents.
          </p>

          <p>
            This Website may include content provided by third parties,
            including materials provided by other users, bloggers, third-party
            licensors, syndicators, aggregators, and/or reporting services. All
            statements and/or opinions expressed in these materials, and all
            articles and responses to questions and other content, other than
            the content provided by the Company, are solely the opinions and the
            responsibility of the person or entity providing those materials.
            These materials do not necessarily reflect the opinion of the
            Company. We are not responsible, or liable to you or any third
            party, for the content or accuracy of any materials provided by any
            third parties.
          </p>

          <p>
            <strong>
              <u>Medical Information</u>
            </strong>
          </p>

          <p>
            This Website site may contain general information relating to
            various medical conditions and their treatment. Such information is
            provided for informational purposes only and is not meant to be a
            substitute for advice provided by a doctor or other qualified health
            care professional. Patients should not use the information contained
            herein for diagnosing a health or fitness problem or disease.
            Patients should always consult with a doctor or other health care
            professional for medical advice or information about diagnosis and
            treatment.
          </p>

          <p>
            <strong>
              <u>Changes to the Website</u>
            </strong>
          </p>

          <p>
            We may update the content on this Website from time to time, but its
            content is not necessarily complete or up to date. Any of the
            material on the Website may be out of date at any given time, and we
            are under no obligation to update such material.
          </p>

          <p>
            {" "}
            <strong>
              <u>Adverse Event Reporting</u>
            </strong>{" "}
          </p>

          <p>
            If you believe that you have experienced any side effects or adverse
            events from any of our products, you should promptly consult your
            doctor for medical advice.
          </p>

          <p>
            Health care professionals and consumers may report side effects or
            adverse reactions to the U.S. Food and Drug Administration (FDA).
            The FDA has established a reporting service known as MedWatch where
            both health care professionals and consumers can report side effects
            they suspect to be associated with the drugs they have prescribed,
            dispensed, or used. To report, please visit MedWatch or call
            1-800-FDA-1088.
          </p>

          <p>
            <strong>
              <u>Links from the Website</u>
            </strong>
          </p>

          <p>
            If the Website contains links to other sites and resources provided
            by third parties, these links are provided for your convenience
            only. This includes links contained in advertisements, including
            banner advertisements and sponsored links. We have no control over
            the contents of those sites or resources and accept no
            responsibility for them or for any loss or damage that may arise
            from your use of them. If you decide to access any of the
            third-party websites linked to this Website, you do so entirely at
            your own risk and subject to the terms and conditions of use for
            such websites.
          </p>

          <p>
            <strong>
              <u>Geographic Restrictions</u>
            </strong>
          </p>

          <p>
            We provide this Website for use only by persons located in the
            United States. We make no claims that the Website or any of its
            content is accessible or appropriate outside of the United States.
            Access to the Website may not be legal by certain persons or in
            certain countries. If you access the Website from outside the United
            States, you do so on your own initiative and are responsible for
            compliance with local laws.
          </p>

          <p>
            <strong>
              <u>Disclaimer of Warranties</u>
            </strong>
          </p>

          <p>
            YOU UNDERSTAND THAT WE CANNOT AND DO NOT GUARANTEE OR WARRANT THOSE
            FILES AVAILABLE FOR DOWNLOADING FROM THE INTERNET OR THAT THE
            WEBSITE WILL BE FREE OF VIRUSES OR OTHER DESTRUCTIVE CODE. YOU ARE
            RESPONSIBLE FOR IMPLEMENTING SUFFICIENT PROCEDURES AND CHECKPOINTS
            TO SATISFY YOUR REQUIREMENTS FOR ANTI-VIRUS PROTECTION AND ACCURACY
            OF DATA INPUT AND OUTPUT, AND FOR MAINTAINING A MEANS EXTERNAL TO
            OUR SITE FOR ANY RECONSTRUCTION OF ANY LOST DATA. TO THE FULLEST
            EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE
            CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER
            TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER
            EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL
            DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED
            THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON
            IT, OR ON ANY WEBSITE LINKED TO IT.
          </p>

          <p>
            YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS
            OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS
            CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE
            PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE
            COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY
            WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
            SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
            WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR
            ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE
            WEBSITE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED,
            AND THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT
            MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS,
            OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
          </p>

          <p>
            TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY DISCLAIMS
            ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY,
            OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
            MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR
            PURPOSE.
          </p>

          <p>
            THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CAN NOT BE
            EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
          </p>

          <p>
            <strong>
              <u>Limitation on Liability</u>
            </strong>
          </p>

          <p>
            TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY,
            ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES,
            AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND,
            UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR
            USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT,
            ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY
            DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND
            SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS,
            LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF
            GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING
            NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
          </p>

          <p>
            <strong>
              <u>Indemnification</u>
            </strong>
          </p>

          <p>
            You agree to defend, indemnify, and hold harmless the Company, its
            affiliates, licensors, and service providers, and its and their
            respective officers, directors, employees, contractors, agents,
            licensors, suppliers, successors, and assigns from and against any
            claims, liabilities, damages, judgments, awards, losses, costs,
            expenses, or fees (including reasonable attorneys' fees) arising out
            of or relating to your violation of these Terms of Use or your use
            of the Website, including, but not limited to, your User
            Contributions, any use of the Website's content, services, and
            products other than as expressly authorized in these Terms of Use,
            or your use of any information obtained from the Website.
          </p>

          <p>
            <strong>
              <u>Governing Law and Jurisdiction</u>
            </strong>
          </p>

          <p>
            <a>
              All matters relating to the Website and these Terms of Use, and
              any dispute or claim arising therefrom or related thereto (in each
              case, including non-contractual disputes or claims), shall be
              governed by and construed in accordance with the internal laws of
              the State of Pennsylvania
            </a>{" "}
            without giving effect to any choice or conflict of law provision or
            rule.
          </p>

          <p>
            Any legal suit, action, or proceeding arising out of, or related to,
            these Terms of Use or the Website shall be instituted exclusively in
            the federal courts of the United States or the courts of the State
            of Pennsylvania in each case located in the City of Collegeville and
            County of Montgomery. You waive all objections to the exercise of
            jurisdiction over you by such courts and to venue in such courts.
          </p>

          <p>
            <strong>
              <u>Limitation on Time to File Claims</u>
            </strong>
          </p>

          <p>
            ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING
            TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN ONE
            (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF
            ACTION OR CLAIM IS PERMANENTLY BARRED.
          </p>

          <p>
            <strong>
              <u>Waiver and Severability</u>
            </strong>
          </p>

          <p>
            No waiver by the Company of any term or condition set out in these
            Terms of Use shall be deemed a further or continuing waiver of such
            term or condition or a waiver of any other term or condition, and
            any failure of the Company to assert a right or provision under
            these Terms of Use shall not constitute a waiver of such right or
            provision.
          </p>

          <p>
            If any provision of these Terms of Use is held by a court or other
            tribunal of competent jurisdiction to be invalid, illegal, or
            unenforceable for any reason, such provision shall be eliminated or
            limited to the minimum extent such that the remaining provisions of
            the Terms of Use will continue in full force and effect.
          </p>

          <p>
            <strong>
              <u>Entire Agreement</u>
            </strong>
          </p>

          <p>
            The Terms of Use and our Privacy Policy constitute the sole and
            entire agreement between you and Provepharm Inc. regarding the
            Website and supersede all prior and contemporaneous understandings,
            agreements, representations, and warranties, both written and oral,
            regarding the Website.
          </p>

          <p>
            <strong>
              <u>Your Comments and Concerns</u>
            </strong>
          </p>

          <p>
            This website is operated by Provepharm Inc. at 100 Springhouse
            Drive, Suite 105, Collegeville, PA 19426, United States of America.
          </p>

          <p>
            All feedback, comments, requests for technical support, and other
            communications relating to the Website should be directed to:{" "}
            <a href="mailto:us-info@provepharm.com">us-info@provepharm.com</a>.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

TermsAndConditions.query = gql`
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
    Page: TermsAndConditions,
    revalidate: 1,
  });
}
