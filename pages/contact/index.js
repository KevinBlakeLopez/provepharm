import { useState } from "react";
import Script from "next/script";

import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import sanitizeHtml from "sanitize-html";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
    _honeypot: false,
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

    const formSet = {
      "General Inquiries": "hbCocYHR",
      "Medical Information": "a3Ndy2UR",
      "Product Quality": "CbWevMvn",
      "Adverse Events": "VpUaj2uX",
    };

    const value = formSet[formData.topic];

    const formSubmission = {
      Topic: formData.topic,
      Name: `${formData.firstName} ${" "} ${formData.lastName}`,
      Email: formData.email,
      Message: sanitizeHtml(formData.message),
    };

    if (formData["_honeypot"] === true) {
      formSubmission["_honeypot"] = formData["_honeypot"];
    }

    fetch(`https://submit-form.com/${value}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formSubmission),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    setFormSubmitted(true);
  };

  return (
    <>
      <Script
        src="https://unpkg.com/@botpoison/browser"
        strategy="afterInteractive"
      />
      <Header />
      <Banner>Contact Us</Banner>
      <Container size="md">
        <div className="lg:flex md:gap-12 justify-between md:mt-12">
          <section className="md:w-[600px]">
            {/* <h3 className="text-2xl text-primary mb-8">GENERAL INQUIRIES</h3> */}
            {formSubmitted ? (
              <div>
                <p className="text-xl">Thanks for your message!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="checkbox"
                  name="_honeypot"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      _honeypot: !formData["_honeypot"],
                    })
                  }
                  value={formData["_honeypot"]}
                />
                <input
                  type="hidden"
                  name="_email.subject"
                  value={`Contact Form ${formData.topic} Submission`}
                />

                <div className="md:flex md:gap-4 justify-between mb-5">
                  <div className="md:w-1/2">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="text-xl py-1.5 pl-2 border-2 w-full mb-5 md:mr-8 md:mb-0 lg:mb-0 "
                      required="required"
                      aria-required="true"
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                  </div>

                  <div className="md:w-1/2">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="text-xl py-1.5 pl-2 border-2 lg:mb-0 w-full"
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
                    className="text-xl py-1.5 pl-2 border-2 w-full mb-5"
                    required="required"
                    aria-required="true"
                  />

                  {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                  <select
                    id="edit-topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="text-xl mb-5 border-2 py-1.5 pl-2 w-full text-r-900"
                  >
                    <option value="">Topic</option>
                    <option value="General Inquiries">General Inquiries</option>
                    <option value="Medical Information">
                      Medical Information
                    </option>
                    <option value="Product Quality">Product Quality</option>
                    <option value="Adverse Events">Adverse Events</option>
                  </select>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Inquiry"
                    className="text-xl py-1.5 pl-2 mb-5 border-2 w-full h-36"
                    value={formData.message}
                    onChange={handleChange}
                    required="required"
                    aria-required="true"
                  ></textarea>
                  {errors.message && <p>{errors.message}</p>}
                </div>

                <section className="md:flex justify-between">
                  <div
                    className="mb-8 bg-primary md:w-48 cursor-pointer"
                    id="edit-actions"
                  >
                    <input
                      className="text-lg py-2 pl-7 text-white"
                      type="submit"
                      id="edit-actions-submit"
                      name="submit"
                      value="SEND MESSAGE"
                    />
                  </div>
                </section>
              </form>
            )}
          </section>
          <section>
            <div className="text-lg lg:float-right">
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
                <p className="text-base md:text-lg">
                  E:{" "}
                  <a
                    className="underline text-secondary"
                    href="mailto:provepharm@medicalinformation.center"
                  >
                    provepharm@medicalinformation.center
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
                <h4 className="font-medium">
                  General Inquiries or Customer Service
                </h4>
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
      <Container size="md" padding="px-5 pb-10">
        <div className="md:w-[600px]">
          <p>
            * The information you submit will be governed by our{" "}
            <span className="underline text-secondary">
              <Link href="/privacy">Privacy Policy</Link>
            </span>
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}
