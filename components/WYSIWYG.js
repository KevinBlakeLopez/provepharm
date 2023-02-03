import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";

const Wysiwyg = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [externalLink, setExternalLink] = useState(null);

  useEffect(() => {
    const aElements = divRef.current.querySelectorAll("a.external");
    for (const a of aElements) {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        openModal(a.href);
      });
    }

    return () => {
      for (const a of aElements) {
        a.removeEventListener("click", openModal);
      }
    };
  }, []);

  const divRef = useRef(null);

  const openModal = (externalLink) => {
    setIsOpen(true);
    setExternalLink(externalLink);
    console.log(28, isOpen);
  };

  return (
    <div className="text-[18px] leading-[36px]">
      <div
        ref={divRef}
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <Modal open={isOpen} externalLink={externalLink} />
    </div>
  );
};

export default Wysiwyg;
