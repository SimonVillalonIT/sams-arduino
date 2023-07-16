import "styles/arrow.css";
import { AiOutlineArrowDown } from "react-icons/ai";

function Arrow() {
  return (
    <a
      href="#features"
      id="arrow-movement"
      className="absolute bottom-32 text-xl font-bold text-primary-content "
    >
      <AiOutlineArrowDown />
    </a>
  );
}

export default Arrow;
