import Link from "next/link";
import { IconType } from "react-icons";

interface DropDownInterface {
  text: string;
  onClick?: () => void;
  icon?: IconType;
  className?: string;
  href?: string;
}

const DropdownItem = ({
  className,
  text,
  href,
  icon: Icon,
  onClick,
}: DropDownInterface) => (
  <li className={className} onClick={onClick}>
    {href ? (
      <Link href={href}>
        {Icon ? <Icon /> : null}
        {text}
      </Link>
    ) : (
      <a>
        {Icon ? <Icon /> : null}
        {text}
      </a>
    )}
  </li>
);

export default DropdownItem;
