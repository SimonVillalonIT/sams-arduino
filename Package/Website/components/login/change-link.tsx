import Link from "next/link";

interface ChangeLinkProps {
  href: string;
  text: string;
  linkText: string;
}

const ChangeLink = ({ href, text, linkText }: ChangeLinkProps) => (
  <span>
    {text}
    <Link href={href} className="ml-2 text-secondary  hover:underline">
      {linkText}
    </Link>
  </span>
);

export default ChangeLink;
