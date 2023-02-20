import { useState } from "react";

export default function ISI({ importantsafetyinformation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="relative z-0">
        <section
          className={`bg-gray-400 fixed ${
            expanded ? "top-[102px]" : ""
          } bottom-[-171px] md:bottom-[-107px] left-0 right-0 w-full transition-transform-[top 1s ease-in-out]`}
        >
          <div className="bg-gray-600 text-zinc-100 flex justify-center md:justify-end">
            <button
              className="text-lg py-2 md:pr-24 font-semibold"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded
                ? "Minimize Important Safety Information"
                : "Read the full Important Safety Information"}
            </button>
          </div>
          <div className="flex justify-center px-5 md:px-8 md:py-4 ">
            <div
              style={{ height: expanded ? "calc(100vh - 165px)" : "240px" }}
              className={`isi mt-4 md:mt-0 mb-20 md:mb-0 max-w-[1400px] overflow-auto md:pr-6`}
              dangerouslySetInnerHTML={{
                __html: importantsafetyinformation,
              }}
            />
            <div className="h-20"></div>
          </div>
        </section>
      </div>
      <style global jsx>{`
        .isi h5:nth-of-type(1) {
          text-align: center;
        }
        .isi h6:nth-of-type(1) {
          margin-top: 1rem;
        }
        .isi h6:nth-of-type(2) {
          margin-top: 3px;
        }
      `}</style>
    </>
  );
}
