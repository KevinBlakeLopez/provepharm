import Image from "next/image";
import Link from "next/link";
import bludigoProduct from "../public/bludigo_product_image.png";

export default function BannerBludigo() {
  return (
    <div className="w-full min-h-[400px] p-20 bg-gradient-to-b from-[#4E157D] to-[#230A2F] text-white md:flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-1/2">
          <figure>
            <Image src={bludigoProduct} />
          </figure>
        </div>
        <div className="w-1/2 px-20 py-10">
          <p className="text-3xl mb-8">
            Bludigo™ is a Solution for Surgical Visualization. Explore the
            benefits of our pharmaceutical surgical dye.
          </p>
          <Link href="/bludigo">
            <button className="bg-[#7200A8] p-3 text-2xl">Find out more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
