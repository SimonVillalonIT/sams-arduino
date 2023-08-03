import useModal from "@/hooks/useModal";
import useclassNameroomStore from "@/store/classroomStore";
import { Classroom } from "hooks/useClassrooms";
import { HiThumbDown } from "react-icons/hi";
import Dropdown from "./dropdown";
import DropdownItem from "./dropdown-item";
import { HiShare, HiTrash } from "react-icons/hi";
import Modal from "./modal";

const Classroom = ({
  classroom,
  sensor1,
  sensor2,
  sensor3,
  sensor4,
  sensor5,
  sensor6,
  active,
  id,
}: Classroom) => {
  const levels = [
    sensor1 ? sensor1 : 0,
    sensor2 ? sensor2 : 0,
    sensor3 ? sensor3 : 0,
    sensor4 ? sensor4 : 0,
    sensor5 ? sensor5 : 0,
    sensor6 ? sensor6 : 0,
  ];
  const highest = Math.max(...levels);
  const { deleteClassroom } = useclassNameroomStore();
  const { toggleModal, showModal } = useModal();
  return (
    <div
      className={`h-72 relative w-64 ${
        active ? "shadow-black/10 shadow-xl" : "shadow-black/5 shadow-lg"
      } flex flex-col items-center justify-around`}
    >
      {active ? (
        <>
          <p className="text-2xl">{highest}</p>
          <HiThumbDown className="text-3xl text-red-800" />
          <h1 className="text-2xl">{classroom}</h1>
        </>
      ) : (
        <>
          <h1>Apagado</h1>
          <h1 className="text-2xl">{classroom}</h1>
        </>
      )}
      <Dropdown>
        <DropdownItem
          className="text-error"
          text="Borrar"
          icon={HiTrash}
          onClick={() => deleteClassroom(id)}
        />
        <DropdownItem text="Compartir" onClick={toggleModal} icon={HiShare} />
      </Dropdown>
      <Modal setState={toggleModal} state={showModal}>
        <p className="text-center mb-4">Comparte el aula</p>
        <div className="max-w-md mx-auto">
          <div className="relative flex bg-primary text-primary-content items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
            <div className="grid place-items-center h-full w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentcolor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer h-full w-full bg-neutral text-neutral-content outline-none text-sm pl-2"
              type="text"
              id="search"
              placeholder="search something.."
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Classroom;
