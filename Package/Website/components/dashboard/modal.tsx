import useModal from "@/hooks/useModal";
import React from "react";

type Props = {
  children: React.ReactNode;
  state: boolean;
  setState: () => void;
};

const Modal = ({ children, state, setState }: Props) => {
  const { showModal, toggleModal } = useModal();
  return (
    <div
      className={`modal modal-bottom sm:modal-middle ${
        state ? "modal-open" : ""
      }`}
    >
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
