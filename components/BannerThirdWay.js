import Image from "next/image";
import vIcon from "../public/frontpage-A-icon.png";
import aIcon from "../public/frontpage-V-icon.png";

export default function BannerThirdWay() {
  return (
    <div id="third-way-banner" className="mb-16 overflow-hidden">
      <div
        className="
        relative bg-black flex justify-center items-center min-h-[500px]
        before:bg-[url('/aboutBannerWoman.webp')] before:bg-cover before:bg-center before:absolute before:right-0 before:left-0 before:top-0 before:bottom-0 before:content-[''] before:z-0 text-center before:opacity-50"
      >
        <div className="absolute w-[388px] z-20 left-0 top-0 bottom-0">
          <figure className="hidden md:block absolute top-[-20%]">
            {/* <img src="/frontPage-V-icon.png" /> */}
            {/* <Image
              src={vIcon}
              quality="100"
              style={{ maxWidth: "100%", height: "auto" }}
            /> */}
          </figure>
          <figure className="hidden md:block absolute bottom-[5%]">
            <img src="/frontpage-A-icon.png" />
            {/* <Image
              src={aIcon}
              quality="100"
              style={{ maxWidth: "100%", height: "auto" }}
            /> */}
          </figure>
        </div>
        <p className="z-10 text-3xl lg:text-[3.5rem] font-light leading-tight text-white tracking-wider py-16 px-8">
          PROVEPHARM IS AN INTERNATIONAL,
          <br /> PRIVATE, PHARMACEUTICAL
          <br /> COMPANY WITH A GLOBAL PRESENCE
          <br /> IN OVER 30 COUNTRIES WORLDWIDE.
        </p>
      </div>
    </div>
  );
}
