"use client";
interface ConfirmButtonProps {
  text: string;
  onClick?: () => void;
}

const ConfirmButton = ({ text, onClick }: ConfirmButtonProps) => (
  <button
    onClick={onClick ? () => onClick() : () => null}
    className="btn btn-accent mt-4 w-full mb-2"
  >
    {text}
  </button>
);

export default ConfirmButton;
