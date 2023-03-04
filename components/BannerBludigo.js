import Image from "next/image";
import Link from "next/link";
import bludigoProduct from "../public/bludigo-packaging.png";
import Container from "./Container";

export default function BannerBludigo() {
  return (
    <div className="w-full min-h-[400px] bg-white text-white md:flex justify-center items-center my-40">
      <div className="w-full lg:max-h-[275px] md:p-6 bg-gradient-to-l from-[#31023d] to-primary text-white md:flex justify-center items-center">
        <Container size="md">
          <div className="flex flex-col gap-3 md:flex-row items-center justify-center">
            <div className="md:w-[400px] px-2 py-10">
              <p className="text-2xl mb-12 md:mb-8">
                The first and only FDA-approved injectable indigo carmine
                diagnostic dye.
              </p>
              <Link href="/bludigo">
                <button className="border-2 border-white px-6 py-[11px] rounded-lg text-xl w-full lg:w-[80%]">
                  Explore the benefits.
                </button>
              </Link>
            </div>
            <div className="md:max-w-[475px] md:ml-20">
              <figure>
                <Image
                  src={bludigoProduct}
                  quality="100"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </figure>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
