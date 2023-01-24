import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";

export default function ContactUs() {
  const { data, loading } = useQuery(ContactUs.query);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Contact Us</Banner>
      <Container size="xl">
        <div className="md:flex md:justify-between mt-16">
          <section className="mr-24">
            <h3 className="text-2xl text-blue-900 mb-4">GENERAL INQUIRIES</h3>
            <form
              action="/contact-us"
              method="post"
              id=""
              accept-charset="UTF-8"
              className="max-w-xl"
            >
              <div class="flex mb-5">
                <fieldset class="border-2 mr-8">
                  <input
                    type="text"
                    id="edit-name"
                    name="name"
                    value=""
                    placeholder="First Name"
                    className="text-xl py-1.5 pl-2"
                    required="required"
                    aria-required="true"
                  />
                </fieldset>
                <fieldset class="border-2">
                  <input
                    type="text"
                    id="edit-last-name"
                    name="last_name"
                    value=""
                    placeholder="Last Name"
                    className="text-xl py-1 pl-2"
                    required="required"
                    aria-required="true"
                  />
                </fieldset>
              </div>

              <fieldset className="mb-5 border-2">
                <input
                  type="email"
                  id="edit-email"
                  name="email"
                  value=""
                  placeholder="Email"
                  className="text-xl py-1 pl-2"
                  required="required"
                  aria-required="true"
                />
              </fieldset>
              <fieldset className="mb-5 border-2 text-xl py-1 pl-2">
                <select
                  id="edit-topic"
                  name="topic"
                  class="form-select required"
                  required="required"
                  aria-required="true"
                >
                  <option value="" selected="selected">
                    Topic
                  </option>
                  <option value="Medical Information">
                    Medical Information
                  </option>
                  <option value="Adverse Events">Adverse Events</option>
                  <option value="General Inquiries">General Inquiries</option>
                </select>
              </fieldset>
              <fieldset class="mb-5 border-2">
                <div class="form-textarea-wrapper">
                  <textarea
                    id="edit-message"
                    name="message"
                    placeholder="Your Inquiry"
                    className="text-xl py-1 pl-2"
                    required="required"
                    aria-required="true"
                  ></textarea>
                </div>
              </fieldset>
              <div class="mb-8 bg-blue-900 md:w-48" id="edit-actions">
                <input
                  className="text-lg py-2 pl-7 text-white"
                  type="submit"
                  id="edit-actions-submit"
                  name="op"
                  value="SEND MESSAGE"
                />
              </div>
              <input
                autocomplete="off"
                type="hidden"
                name="form_build_id"
                value=""
                class=""
              />
              <input type="hidden" name="form_id" value="" class="" />
            </form>
            <div>
              <p className="mb-5">
                <a
                  className="text-xl underline text-blue-400"
                  href="mailto:safety-us@provepharm.com"
                >
                  REQUEST FOR MEDICAL INFORMATION
                </a>{" "}
              </p>
              <p>
                <a
                  className="text-xl underline text-blue-400"
                  href="mailto:safety-us@provepharm.com"
                >
                  ADVERSE EVENT REPORTING
                </a>
              </p>
            </div>
          </section>
          <section>
            <div className="text-lg">
              <div className="mb-4">
                <h4 className="font-medium">Pharmacovigilance:</h4>
                <p>
                  P:{" "}
                  <a
                    className="underline text-blue-400"
                    href="tel:1-833-727-6556"
                  >
                    1-833-727-6556
                  </a>
                </p>
                <p>
                  E:{" "}
                  <a
                    className="underline text-blue-400"
                    href="mailto:safety-us@provepharm.com"
                  >
                    safety-us@provepharm.com
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium">Medical Information</h4>
                <p>
                  P:{" "}
                  <a
                    className="underline text-blue-400"
                    href="tel:1-833-727-6556"
                  >
                    1-833-727-6556
                  </a>
                </p>
                <p>
                  E:{" "}
                  <a
                    className="underline text-blue-400"
                    href="mailto:safety-us@provepharm.com"
                  >
                    safety-us@provepharm.com
                  </a>
                </p>
              </div>
              <div class="mb-4">
                <h4 className="font-medium">Product Quality Complaints</h4>
                <p>
                  P:{" "}
                  <a
                    className="underline text-blue-400"
                    href="tel:1-833-727-6556"
                  >
                    1-833-727-6556
                  </a>
                </p>
                <p>
                  E:{" "}
                  <a
                    className="underline text-blue-400"
                    href="mailto:quality@provepharm.com"
                  >
                    quality@provepharm.com
                  </a>
                </p>
              </div>
              <div class="mb-5">
                <h4>General Inquiries or Customer Service</h4>
                <p>
                  E:{" "}
                  <a
                    className="underline text-blue-400"
                    href="mailto:us-info@provepharm.com"
                  >
                    us-info@provepharm.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </>
  );
}

ContactUs.query = gql`
  ${NavigationMenu.fragments.entry}
  query Posts($headerLocation: MenuLocationEnum) {
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

ContactUs.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
  };
};

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page: ContactUs,
    revalidate: 1,
  });
}
