import React, { useState } from "react";

const Modal = ({ text, externalLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="underline text-orange-500" onClick={openModal}>
        {text}
      </button>
      {isOpen && (
        <div className="fixed top-[10%] left-[35%] w-1/3 h-52">
          <div className="bg-slate-400 p-4">
            <p>
              You are now leaving provepharmusa.com. Provepharm is not
              responsible for the content on any third-party website.
            </p>
            <section className="flex justify-end">
              <a className="p-2 bg-blue-500" href={externalLink}>
                CONTINUE
              </a>
              <button className="p-2 bg-zinc-50" onClick={closeModal}>
                CANCEL
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
