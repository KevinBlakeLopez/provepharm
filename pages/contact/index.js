import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { Header, NavigationMenu } from "../../components";
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
      <Container size="sm">
        <div className="flex justify-between mt-16">
          <section className="mr-16">
            <h3 className="text-2xl text-blue-900">GENERAL INQUIRIES</h3>
            <form
              action="/contact-us"
              method="post"
              id=""
              accept-charset="UTF-8"
              className="max-w-xl"
            >
              <div class="" id="edit-fullname">
                <div class="">
                  <div class="flex">
                    <fieldset class="mb-3 border-2 mr-8">
                      <input
                        type="text"
                        id="edit-name"
                        name="name"
                        value=""
                        placeholder="First Name"
                        className=""
                        required="required"
                        aria-required="true"
                      />
                    </fieldset>
                    <fieldset class="mb-3 border-2">
                      <input
                        type="text"
                        id="edit-last-name"
                        name="last_name"
                        value=""
                        placeholder="Last Name"
                        className=""
                        required="required"
                        aria-required="true"
                      />
                    </fieldset>
                  </div>
                </div>
              </div>
              <fieldset class="mb-3 border-2">
                <input
                  type="email"
                  id="edit-email"
                  name="email"
                  value=""
                  placeholder="Email"
                  class="form-email required form-control"
                  required="required"
                  aria-required="true"
                />
              </fieldset>
              <fieldset class="mb-3 border-2">
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
              <fieldset class="mb-3 border-2">
                <div class="form-textarea-wrapper">
                  <textarea
                    id="edit-message"
                    name="message"
                    rows="5"
                    cols="60"
                    placeholder="Your Inquiry"
                    class="form-textarea required form-control resize-vertical"
                    required="required"
                    aria-required="true"
                  ></textarea>
                </div>
              </fieldset>
              <div class="mb-3 bg-blue-900" id="edit-actions">
                <input
                  class=""
                  type="submit"
                  id="edit-actions-submit"
                  name="op"
                  value="Send message"
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
          </section>
          <section>
            <div class="">
              <p>
                <a href="mailto:safety-us@provepharm.com">
                  REQUEST FOR MEDICAL INFORMATION
                </a>{" "}
              </p>
              <p>
                <a href="mailto:safety-us@provepharm.com">
                  ADVERSE EVENT REPORTING
                </a>
              </p>
            </div>
            <div class="col-lg-4 offset-lg-1 mt-2">
              <div class="">
                <h4>Pharmacovigilance:</h4>
                <p>
                  P: <a href="tel:1-833-727-6556">1-833-727-6556</a>
                </p>
                <p>
                  E:{" "}
                  <a href="mailto:safety-us@provepharm.com">
                    safety-us@provepharm.com
                  </a>
                </p>
              </div>
              <div class="">
                <h4>Medical Information</h4>
                <p>
                  P: <a href="tel:1-833-727-6556">1-833-727-6556</a>
                </p>
                <p>
                  E:{" "}
                  <a href="mailto:safety-us@provepharm.com">
                    safety-us@provepharm.com
                  </a>
                </p>
              </div>
              <div class="">
                <h4>Product Quality Complaints</h4>
                <p>
                  P: <a href="tel:1-833-727-6556">1-833-727-6556</a>
                </p>
                <p>
                  E:{" "}
                  <a href="mailto:quality@provepharm.com">
                    quality@provepharm.com
                  </a>
                </p>
              </div>
              <div class="mb-5">
                <h4>General Inquiries or Customer Service</h4>
                <p>
                  E:{" "}
                  <a href="mailto:us-info@provepharm.com">
                    us-info@provepharm.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
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
