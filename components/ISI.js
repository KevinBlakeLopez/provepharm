import { useState } from "react";

export default function ISI({ importantsafetyinformation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className={`bg-gray-400 fixed ${
        expanded ? "top-[75px]" : ""
      } bottom-[-128px] md:bottom-[-45px] left-0 right-0 w-full z-50 transition-transform-[top 1s ease-in-out]`}
    >
      <div className="bg-gray-600 text-zinc-100 flex justify-end">
        <button
          className="text-xl py-4 pr-24"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Minimize Important Safety Information"
            : "Read Important Safety Information"}
        </button>
        {/* <h5 className="text-center text-xl font-bold py-4">
          Important Safety Information
        </h5> */}
        {/* <button
          className="text-center text-xl font-bold py-4 px-2"
          onClick={() => window.print()}
          //   https://www.npmjs.com/package/react-to-print
        >
          Print
        </button> */}
      </div>

      <div className="flex justify-center">
        <div
          style={{ height: expanded ? "calc(100vh - 220px)" : "200px" }}
          className={`isi mt-10 mb-20 md:mb-0 max-w-[1400px] overflow-auto md:pr-6`}
          dangerouslySetInnerHTML={{
            __html: importantsafetyinformation,
          }}
        />
        <div className="h-20"></div>
      </div>
    </section>
  );
}
