import ProviderButton from "./provider-button";
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";

const ProvidersContainer = () => (
  <>
    <div className="flex items-center w-full my-4">
      <hr className="w-full" />
      <p className="px-3 font-thin text-base-content">O</p>
      <hr className="w-full" />
    </div>
    <div className="my-6 space-y-2">
      <ProviderButton icon={BiLogoGoogle} text="Google" />
      <ProviderButton icon={BiLogoGithub} text="GitHub" />
    </div>
  </>
);

export default ProvidersContainer;
