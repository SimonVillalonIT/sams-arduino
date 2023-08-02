import { HiOutlineDotsVertical, HiTrash, HiShare } from "react-icons/hi";

const Dropdown = ({ onClick }: { onClick: () => void }) => (
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
      <li>
        <a>
          <HiShare /> Compartir
        </a>
      </li>
    </ul>
  </div>
);
export default Dropdown;
