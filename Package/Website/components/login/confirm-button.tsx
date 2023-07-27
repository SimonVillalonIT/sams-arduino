"use client";
interface ConfirmButtonProps {
  text: string;
  disabled?: boolean;
}

const ConfirmButton = ({ text, disabled }: ConfirmButtonProps) => (
  <button
    type="submit"
    className="btn btn-accent mt-4 w-full mb-2"
    disabled={disabled}
  >
    {text}
  </button>
);

export default ConfirmButton;
