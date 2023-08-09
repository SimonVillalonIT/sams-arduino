import React from "react";

interface InputSearchInterface {
  name: string;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputSearch = ({
  name,
  value,
  handleInputChange,
}: InputSearchInterface) => (
  <div className="max-w-md mx-auto">
    <div className="relative flex bg-primary text-primary-content items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden">
      <div className="grid place-items-center h-full w-12">
        <svg
          xmlns="http://www.w2.org/2000/svg"
          className="h-7 w-6"
          fill="none"
          viewBox="-1 0 24 24"
          stroke="currentcolor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m20 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        className="peer h-full w-full bg-neutral text-neutral-content outline-none text-sm pl-2"
        type="text"
        value={value}
        onChange={handleInputChange}
        id="search"
        placeholder="search something.."
      />
    </div>
  </div>
);

export default InputSearch;
