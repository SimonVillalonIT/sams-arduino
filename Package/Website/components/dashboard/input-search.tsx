import useUserSearchStore from "@/store/usersSearchStore";
import React, { PropsWithChildren } from "react";
import { HiX } from "react-icons/hi";

interface InputSearchInterface {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputSearch = ({
  value,
  children,
  handleInputChange,
}: PropsWithChildren<InputSearchInterface>) => {
  const { invitedUsers, filterInvitedUser } = useUserSearchStore();
  return (
    <div className="relative max-w-md mx-auto flex flex-col items-center">
      <div className="flex justify-start w-full flex-wrap">
        {invitedUsers?.map(
          (invitedUser: Database["public"]["Tables"]["users"]["Row"]) => (
            <div className="flex ml-1 mb-1 items-center self-start text-sm rounded-xl bg-secondary text-secondary-content p-1">
              {invitedUser.email?.split("@")[0]}{" "}
              <HiX
                className="text-md"
                onClick={() => filterInvitedUser(invitedUser.id)}
              />
            </div>
          ),
        )}
      </div>
      <div className="relative flex text-primary-content mt-2 items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
        <input
          className="peer h-full w-full bg-neutral/5 outline-none text-sm pl-2"
          type="text"
          value={value}
          onChange={handleInputChange}
          id="search"
          placeholder="Busca un usuario para añadir..."
        />
      </div>
      {children}
      <button className="btn btn-primary">Confirmar</button>
    </div>
  );
};

export default InputSearch;
