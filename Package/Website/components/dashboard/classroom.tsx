import useModal from "@/hooks/useModal";
import useclassroomStore from "@/store/classroomStore";
import { Classroom } from "hooks/useClassrooms";
import { BiHappyAlt, BiConfused, BiDizzy } from "react-icons/bi";
import Dropdown from "./dropdown";
import DropdownItem from "./dropdown-item";
import { HiShare, HiTrash } from "react-icons/hi";
import Modal from "./modal";
import React, { useState } from "react";
import InputSearch from "./input-search";
import useUsersSearch from "@/hooks/useUsersSearch";

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
  const [name, setName] = useState<string>("");
  const { deleteClassroom } = useclassroomStore();
  const { toggleModal, showModal } = useModal();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  useUsersSearch(name, id);
  return (
    <div
      className={`h-72 relative w-64 border border-transparent hover:border-secondary ${
        1 == 1
          ? "shadow-black/10 shadow-xl bg-neutral/5"
          : "shadow-black/5 shadow-lg"
      } flex flex-col items-center justify-around`}
    >
      {active ? (
        <>
          <p className="text-2xl">{highest}</p>
          {highest > 90 ? (
            <BiDizzy className="text-6xl text-red-800" />
          ) : highest < 90 && highest > 40 ? (
            <BiConfused className="text-6xl text-yellow-800" />
          ) : (
            <BiHappyAlt className="text-6xl text-green-800" />
          )}
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
        <InputSearch
          classroomId={id}
          value={name}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </div>
  );
};

export default Classroom;
