import Link from "next/link";
import { usePathname } from "next/navigation";

const IconLink = ({ icon: Icon, href }: any) => {
  const path = usePathname();

  return (
    <Link href={href} className={path === href ? "active" : ""}>
      <button className="text-3xl h-5 w-5">
        <Icon />
      </button>
    </Link>
  );
};

export default IconLink;
