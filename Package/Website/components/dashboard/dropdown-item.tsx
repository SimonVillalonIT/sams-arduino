import { IconType } from "react-icons";

interface DropDownInterface {
  text: string;
  onClick?: () => void;
  icon?: IconType;
  className?: string;
}

const DropdownItem = ({
  className,
  text,
  icon: Icon,
  onClick,
}: DropDownInterface) => (
  <li className={className} onClick={onClick}>
    <a>
      {Icon ? <Icon /> : null}
      {text}
    </a>
  </li>
);

export default DropdownItem;
