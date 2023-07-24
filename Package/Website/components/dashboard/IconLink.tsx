import Link from "next/link";
import { usePathname } from "next/navigation";

const IconLink = ({ icon: Icon, href }: any) => {
  const path = usePathname();

  return (
    <Link href={href} className="text-3xl">
      <Icon className={path === href ? "text-red-700" : ""} />
    </Link>
  );
};

export default IconLink;
