"use client";
import { Provider } from "@supabase/supabase-js";
import { IconType } from "react-icons";
import useAuth from "hooks/useAuth";

interface ProviderButtonProps {
  text: string;
  icon: IconType;
  provider: Provider;
}

const ProviderButton = ({
  provider,
  text,
  icon: Icon,
}: ProviderButtonProps) => {
  const { signInWithProvider } = useAuth();
  return (
    <button
      aria-label={text}
      onClick={() => {
        signInWithProvider(provider);
      }}
      type="button"
      className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
    >
      <Icon className="mr-2 text-2xl" />
      {text}
    </button>
  );
};

export default ProviderButton;
