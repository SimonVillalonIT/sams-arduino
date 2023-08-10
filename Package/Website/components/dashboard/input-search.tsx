import React, { PropsWithChildren } from "react";

interface InputSearchInterface {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputSearch = ({
  value,
  children,
  handleInputChange,
}: PropsWithChildren<InputSearchInterface>) => (
  <div className="max-w-md mx-auto">
    <div className="relative flex bg-primary text-primary-content items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
      <input
        className="peer h-full w-full bg-neutral text-neutral-content outline-none text-sm pl-2"
        type="text"
        value={value}
        onChange={handleInputChange}
        id="search"
        placeholder="Busca un usuario para añadir..."
      />
    </div>
    {children}
  </div>
);

export default InputSearch;
