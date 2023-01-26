import { useState } from "react";

export default function ISI({ importantsafetyinformation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className={`bg-slate-400 px-2 fixed ${
        expanded ? "top-[75px]" : ""
      } bottom-[-128px] md:bottom-[-45px] left-0 right-0 w-full z-50 transition-transform-[top 1s ease-in-out]`}
    >
      <div className="flex justify-between">
        <button
          className="text-center text-xl font-bold py-4 px-2"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Close" : "Expand"}
        </button>
        <button
          className="text-center text-xl font-bold py-4 px-2"
          onClick={() => window.print()}
          //   https://www.npmjs.com/package/react-to-print
        >
          Print
        </button>
      </div>
      <h5 className="text-center text-xl font-bold pb-6">
        Important Safety Information
      </h5>
      <div className="flex justify-center">
        <div
          style={{ height: expanded ? "calc(100vh - 220px)" : "200px" }}
          className={`isi mb-20 md:mb-0 max-w-[1400px] overflow-auto md:pr-6`}
          dangerouslySetInnerHTML={{
            __html: importantsafetyinformation,
          }}
        />
        <div className="h-20"></div>
      </div>
    </section>
  );
}
