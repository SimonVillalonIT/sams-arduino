"use client";
interface ConfirmButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ConfirmButton = ({ text, onClick, disabled }: ConfirmButtonProps) => (
  <button
    type="submit"
    onClick={onClick ? () => onClick() : () => null}
    className="btn btn-accent mt-4 w-full mb-2"
    disabled={disabled}
  >
    {text}
  </button>
);

export default ConfirmButton;
