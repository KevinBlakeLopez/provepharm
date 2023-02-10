import React, { useState, useEffect } from "react";

const Modal = ({ text, externalLink, open, classes }) => {
  console.log(4, open);
  const [isOpen, setIsOpen] = useState(open ? true : false);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={isOpen ? "modal-open" : ""}>
      <button className={isOpen ? "hidden" : classes} onClick={openModal}>
        {text}
      </button>
      {isOpen && (
        <div className="fixed top-[5%] sm:left-[12%] lg:left-[33%] md:max-w-[75%] lg:max-w-[35%] max-h-80 ">
          {/* <div className={isOpen ? "modal-open" : ""} /> */}
          <div className="bg-primary p-4 rounded-md">
            <div className="">
              <button
                onClick={closeModal}
                className="text-4xl cursor-pointer float-right"
              >
                &times;
              </button>
            </div>

            <p className="my-6 px-2 text-[1.25rem] text-white">
              You are now leaving provepharmusa.com. Provepharm is not
              responsible for the content on any third-party website.
            </p>
            <section className="flex justify-end my-4">
              <a
                className="mr-4 py-2 px-3 bg-secondary text-white text-lg font-semibold tracking-wider"
                href={externalLink}
              >
                CONTINUE
              </a>
              <button
                className="py-2 px-3 bg-white text-primary text-lg font-semibold tracking-wider"
                onClick={closeModal}
              >
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
