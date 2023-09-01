import useUserSearchStore from "@/store/usersSearchStore";
import React from "react";

type Props = {
  children: React.ReactNode;
  state: boolean;
  setState: () => void;
};

const Modal = ({ children, state, setState }: Props) => {
  const { setResults } = useUserSearchStore();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`modal modal-bottom sm:modal-middle ${
        state ? "modal-open" : ""
      }`}
    >
      <div className="modal-box ">
        <a
          onClick={() => {
            setState();
            setResults([]);
          }}
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
