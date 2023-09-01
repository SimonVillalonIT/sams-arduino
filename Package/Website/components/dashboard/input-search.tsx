import useUserSearchStore from "@/store/usersSearchStore";
import React from "react";
import { HiX } from "react-icons/hi";
import UsersSearch from "./users-search";

interface InputSearchInterface {
  value: string;
  classroomId: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputSearch = ({
  value,
  handleInputChange,
  classroomId,
}: InputSearchInterface) => {
  const { invitedUsers, filterInvitedUser, sendInvitation } =
    useUserSearchStore();
  return (
    <div className="relative max-w-md mx-auto flex flex-col items-center">
      <div className="flex justify-start w-full flex-wrap">
        {invitedUsers?.map(
          (invitedUser: Database["public"]["Tables"]["users"]["Row"]) => (
            <div
              key={invitedUser.id}
              className="flex ml-1 mb-1 items-center self-start text-sm rounded-xl bg-secondary text-secondary-content p-1"
            >
              {invitedUser.email?.split("@")[0]}&nbsp;
              <HiX
                className="text-md hover:cursor-pointer"
                onClick={() => filterInvitedUser(invitedUser.id)}
              />
            </div>
          ),
        )}
      </div>
      <div className="relative flex text-primary-content mt-2 items-center w-full h-12 rounded-lg border-neutral border-b focus-within:shadow-lg overflow-hidden">
        <input
          className="peer h-full w-full bg-neutral/5 text-base-content -content outline-none text-sm pl-2"
          type="text"
          value={value}
          onChange={handleInputChange}
          id="search"
          placeholder="Busca un usuario para añadir..."
          autoComplete="off"
        />
      </div>
      <UsersSearch />
      <button
        onClick={() => sendInvitation(invitedUsers, classroomId)}
        className="btn btn-secondary text-secondary-content"
      >
        Confirmar
      </button>
    </div>
  );
};

export default InputSearch;
