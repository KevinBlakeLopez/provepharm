import { useState } from "react";
import { getNextStaticProps } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import { Header, Footer, NavigationMenu } from "../../components";
import * as MENUS from "../../constants/menus";

export default function ContactUs() {
  const { data, loading } = useQuery(ContactUs.query);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({});
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName) {
      formErrors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      formErrors.lastName = "Last Name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    fetch("https://submit-form.com/VpUaj2uX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        message: "Hello, World",
      }),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });

    const mailtoLink = `mailto:kevinblakelopez@gmail.com?subject=${formData.subject}&body=Name: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    setFormSubmitted(true);
  };

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Header menuItems={data.headerMenuItems} />
      <Banner>Contact Us</Banner>
      <Container size="xl">
        <div className="lg:flex justify-between mt-16">
          <section className="mr-24">
            <h3 className="text-2xl text-primary mb-4">GENERAL INQUIRIES</h3>
            <form onSubmit={handleSubmit}>
              {" "}
              {formSubmitted ? (
                <p>Thanks for your message!</p>
              ) : (
                <>
                  <div className="md:flex justify-between mb-5">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="text-xl py-1.5 pl-2 border-2 md:mr-8 mb-5 lg:mb-0"
                        required="required"
                        aria-required="true"
                      />
                      {errors.firstName && <p>{errors.firstName}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="text-xl py-1.5 pl-2 border-2 md:mr-8 mb-5 lg:mb-0"
                        required="required"
                        aria-required="true"
                      />
                      {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      id="edit-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="text-xl py-1 pl-2 border-2 w-full mb-5"
                      required="required"
                      aria-required="true"
                    />

                    {errors.email && <p>{errors.email}</p>}
                  </div>
                  <div>
                    {" "}
                    <select
                      id="edit-topic"
                      name="topic"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mb-5 border-2 text-xl py-1 pl-2 w-full"
                    >
                      <option value="">Topic</option>
                      <option value="Medical Information">
                        Medical Information
                      </option>
                      <option value="Adverse Events">Adverse Events</option>
                      <option value="General Inquiries">
                        General Inquiries
                      </option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Inquiry"
                      className="text-xl py-1 pl-2 mb-5 border-2 w-full h-12"
                      value={formData.message}
                      onChange={handleChange}
                      required="required"
                      aria-required="true"
                    ></textarea>
                    {errors.message && <p>{errors.message}</p>}
                  </div>

                  <section className="md:flex justify-between">
                    <div className="mb-8 bg-primary md:w-48" id="edit-actions">
                      <input
                        className="text-lg py-2 pl-7 text-white"
                        type="submit"
                        id="edit-actions-submit"
                        name="submit"
                        value="SEND MESSAGE"
                      />
                    </div>
                    <div className="mb-8 bg-primary md:w-48" id="edit-actions">
                      <input
                        className="text-lg py-2 pl-7 text-white"
                        type="reset"
                        id="reset"
                        name="reset"
                        value="CLEAR FORM"
                      />
                    </div>
                  </section>
                </>
              )}
            </form>
            <div className="mb-10">
              <p className="mb-5">
                <a
                  className="text-xl underline text-secondary"
                  href="mailto:safety-us@provepharm.com"
                >
                  REQUEST FOR MEDICAL INFORMATION
                </a>{" "}
              </p>
              <p>
                <a
                  className="text-xl underline text-secondary"
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
                    className="underline text-secondary"
                    href="tel:1-833-727-6556"
                  >
                    1-833-727-6556
                  </a>
                </p>
                <p>
                  E:{" "}
                  <a
                    className="underline text-secondary"
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
                    className="underline text-secondary"
                    href="tel:1-833-727-6556"
                  >
                    1-833-727-6556
                  </a>
                </p>
                <p>
                  E:{" "}
                  <a
                    className="underline text-secondary"
                    href="mailto:safety-us@provepharm.com"
                  >
                    safety-us@provepharm.com
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium">Product Quality Complaints</h4>
                <p>
                  P:{" "}
                  <a
                    className="underline text-secondary"
                    href="tel:1-833-727-6556"
                  >
                    1-833-727-6556
                  </a>
                </p>
                <p>
                  E:{" "}
                  <a
                    className="underline text-secondary"
                    href="mailto:quality@provepharm.com"
                  >
                    quality@provepharm.com
                  </a>
                </p>
              </div>
              <div className="mb-5">
                <h4>General Inquiries or Customer Service</h4>
                <p>
                  E:{" "}
                  <a
                    className="underline text-secondary"
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
