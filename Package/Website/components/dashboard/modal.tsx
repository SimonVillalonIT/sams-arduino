import React, { SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
  state: boolean;
  setState: any;
};

const Modal = ({ children, state, setState }: Props) => {
  return (
    // we add modal-bottom and modal-middle classes to make it responsive
    //add modal-open for now to test the modal
    <div
      className={`modal modal-bottom sm:modal-middle ${
        state ? "modal-open" : ""
      }`}
    >
      {/* we want any content for this modal layout so we just pass the children */}
      <div className="modal-box">
        <a
          onClick={setState}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </a>
        {children}
      </div>
    </div>
  );
};

export default Modal;
