import { HiOutlineDotsVertical, HiTrash, HiShare } from "react-icons/hi";
import Modal from "./modal";
import { useState } from "react";

const Dropdown = ({ onClick }: { onClick: () => void }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dropdown absolute right-4 top-4">
      <HiOutlineDotsVertical tabIndex={0} />
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li onClick={onClick}>
          <a className="text-error">
            <HiTrash /> Borrar
          </a>
        </li>
        <li onClick={() => setShowModal((state) => !state)}>
          <a>
            <HiShare /> Compartir
          </a>
        </li>
      </ul>
      <Modal
        setState={() => {
          setShowModal((state) => !state);
        }}
        state={showModal}
      >
        <p>Comparte el aula</p>
      </Modal>
    </div>
  );
};
export default Dropdown;
