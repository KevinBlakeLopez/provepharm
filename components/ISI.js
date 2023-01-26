import { useState } from "react";

export default function ISI({ importantsafetyinformation }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className={`bg-slate-400 px-2 fixed ${
        expanded ? "top-[75px]" : ""
      } bottom-[-45px] left-0 right-0 w-full z-50 transition-[top 1s ease-in-out]`}
    >
      <div className="">
        <button
          className="text-center text-xl font-bold py-4 px-2"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Close" : "Expand"}
        </button>
      </div>
      <h5 className="text-center text-xl font-bold pb-6">
        Important Safety Information
      </h5>
      <div className="flex justify-center">
        <div
          className={`isi mb-20 md:mb-0 max-w-[1400px] ${
            expanded ? "h-[83vh]" : "h-44"
          } overflow-auto md:pr-6`}
          dangerouslySetInnerHTML={{
            __html: importantsafetyinformation,
          }}
        />
      </div>
    </section>
  );
}
