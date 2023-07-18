import { IconType } from "react-icons";

interface ProviderButtonProps {
  text: string;
  icon: IconType;
}

const ProviderButton = ({ text, icon: Icon }: ProviderButtonProps) => (
  <button
    aria-label="Login with Google"
    type="button"
    className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
  >
    <Icon className="mr-2 text-2xl" />
    {text}
  </button>
);

export default ProviderButton;
