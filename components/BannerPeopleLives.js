import aboutMainBG from "../public/aboutMainBG.webp";
import Image from "next/image";

export default function BannerPeopleLives() {
  return (
    <div id="people-lives-banner" className="md:flex mb-44">
      <div
        id="people-lives-image"
        className="md:bg-[url('/aboutMainBG.webp')] md:bg-cover h-auto md:h-full md:order-2 md:w-1/2"
      >
        <figure className="md:hidden">
          <div className="block">
            <Image
              fill="true"
              src={aboutMainBG}
              style={{
                width: "100%",
                objectFit: "cover",
                maxWidth: "100%",
              }}
              alt="a man in a hospital bed"
            />
          </div>
        </figure>
      </div>
      <div className="bg-secondary text-white font-light md:order-1 md:w-1/2">
        <section className="md:max-w-[543px] md:float-right md:py-20 py-14 px-14 md:pl-0 -mt-2">
          <h3 className="text-3xl md:text-[3.3rem] tracking-wide leading-extra-tight mb-6">
            PRODUCTS <br className="hidden md:block" />
            THAT MAKE A <br className="hidden md:block" />
            DIFFERENCE IN <br className="hidden md:block" />
            PEOPLE'S LIVES
          </h3>

          <p className="text-xl">
            At Provepharm, we innovate to unlock each molecule's full potential,
            to provide treatments that help improve patients' lives. Our
            portfolio of products meets the highest pharmaceutical quality
            standards, in the following areas: antidotes, diagnostics,
            injectable vitamins, metabolism, and neuroscience.
          </p>
        </section>
      </div>
    </div>
  );
}
