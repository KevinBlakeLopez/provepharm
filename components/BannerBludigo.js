import Image from "next/image";
import Link from "next/link";
import bludigoProduct from "../public/bludigo-packaging.png";
import Container from "./Container";

export default function BannerBludigo() {
  return (
    <div className="w-full min-h-[400px] bg-white text-white md:flex justify-center items-center my-40">
      <div className="w-full md:max-h-[275px] md:p-6 bg-gradient-to-b from-[#4E157D] to-[#230A2F] text-white md:flex justify-center items-center">
        <Container size="md">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:mx-20">
              <figure>
                <Image src={bludigoProduct} />
              </figure>
            </div>
            <div className="md:w-1/2 px-2 py-10">
              <p className="text-2xl mb-12 md:mb-8">
                is a diagnostic dye indicated for use as a visualization aid in
                the cystoscopic assessment of the integrity of the ureters in
                adults.
              </p>
              <Link href="/bludigo">
                <button className="bg-[#7200A8] px-6 py-[11px] rounded-lg text-xl">
                  Explore the benefits
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
