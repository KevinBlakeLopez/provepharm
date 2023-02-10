import Image from "next/image";

import Container from "./Container";
import Modal from "./Modal";

import blueDye from "../public/history-bluedye.jpeg";
import allEmployees from "../public/history-allEmployees.jpeg";
import lab2 from "../public/history-lab2.jpeg";
import MF from "../public/history-MF.jpeg";
import microscope from "../public/history-microscopeLab.jpeg";
import provayblue from "../public/history-provayblue.jpeg";

export default function Timeline() {
  return (
    <Container size="md">
      <div className="md:flex justify-between text-lg text-primary">
        <div
          className="dot-left timeline-graphic md:w-1/2 relative 
            before:absolute before:content-[''] before:top-[-80px] before:bottom-0 before:right-0 before:w-[2px]"
        >
          <div className="pb-14 pr-14">
            <h3 className="text-6xl mb-6 tracking-wide text-secondary font-extralight">
              OUR HISTORY
            </h3>

            <p>
              Driven by an entrepreneurial spirit, privately-owned, Provepharm
              Life Solutions has more than two decades of continuous innovation
              and growth in the healthcare market. Here are a few highlights of
              the organization’s past, present, and future, where Provepharm
              will continue to develop healthcare solutions that improve
              patients’ lives.
            </p>
          </div>

          <div className="in-box">
            <figure className="mb-8">
              <Image src={blueDye} />
            </figure>

            <p className="mb-8">
              Provence Technologies launched several internal research programs,
              including a process patented in 2006, by co-inventors Michel
              Feraud and Babak Sayah, for the manufacture of methylene blue,
              compliant with current international quality and regulatory
              requirements. A year later, Provepharm developed and
              commercialized healthcare products from these patented processes
              utilizing a highly pure, pharmaceutical - grade methylene blue.
            </p>
          </div>

          <div className="in-box md:mt-[-4rem]">
            <figure className="mb-8">
              <Image src={MF} />
              <figcaption className="text-base text-center">
                Michel Feraud, Founder CEO
              </figcaption>
            </figure>

            <p className="mb-8">
              Provepharm, acquires a company specialized in the chemical
              synthesis of peptides and proteins for therapeutic use. This is
              the first merger and acquisition operation opening a new
              development direction for the company in the field of biological
              pharmaceutical products.
            </p>
          </div>
          <div className="in-box">
            <p className="mb-8">
              Provepharm Life Solutions launches its new brand identity with the
              addition of multiple healthcare professionals joining the
              management team and executive board.{" "}
            </p>
            <figure className="">
              <Image src={allEmployees} />
            </figure>
          </div>

          <div className="in-box">
            <p>
              Provepharm Life Solutions acquires{" "}
              <strong className="font-bold">Apollo Pharmaceuticals USA</strong>,
              a company specializing in{" "}
              <strong className="font-bold">sterile injectable products</strong>
              , in the United States, as part of its diversification plan.
            </p>
          </div>
        </div>
        <div className="dot-right md:w-1/2 relative">
          <div className="in-box">
            <figure className="mb-8">
              <Image src={microscope} />
            </figure>

            <div>
              <p>
                The early years: Michel Feraud, president, and founder,
                initially launched the company as “Provence Technologies”, a
                research and development chemistry laboratory, together with
                co-founder and friend Christophe Baralotto. The company operated
                as a contract research organization for international
                pharmaceutical, cosmetic, and agrochemical groups. Provence
                Technologies built its reputation by designing innovative
                molecule synthesis pathways and precise analytical methods,
                characterizing such products.
              </p>
            </div>
          </div>
          <div className="in-box">
            <p className="mb-8">
              Provepharm obtained a centralized marketing authorization from EMA
              paving the way for the{" "}
              <strong>commercialization of injectable methylene blue</strong>{" "}
              with the brand name <strong>ProveBlue®</strong> in the 30
              countries of the enlarged European Union.
            </p>
          </div>
          <div className="in-box">
            <figure className="mb-8">
              <Image src={provayblue} />
            </figure>

            <p>
              Provepharm obtained FDA approval to commercialize{" "}
              <Modal
                text="ProvayBlue®, (injectable methylene blue)."
                externalLink="https://americanregent.com/our-products/provayblue-methylene-blue-injection-usp-05/"
                classes="text-prescribingAnchor underline"
              />
            </p>
          </div>
          <div className="in-box">
            <figure className="mb-8">
              <Image src={lab2} />
            </figure>

            <p>
              Provepharm Life Solutions joins forces with{" "}
              <strong className="font-bold">
                new strategic minority partners, Téthys Invest and ArchiMed
              </strong>
              .
            </p>
          </div>
          <div className="in-box">
            <p>
              Thanks to its solid financial structure, Provepharm Life Solutions
              continues to diligently develop and seek out unmet needs in the
              therapeutics and diagnostics area within the healthcare market to
              improve the quality of life for each patient it serves worldwide.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
