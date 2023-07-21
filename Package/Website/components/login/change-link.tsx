interface ChangeLinkProps {
  href: string;
  text: string;
  linkText: string;
}

const ChangeLink = ({ href, text, linkText }: ChangeLinkProps) => (
  <span>
    {text}
    <a href={href} className="ml-2 text-secondary  hover:underline">
      {linkText}
    </a>
  </span>
);

export default ChangeLink;
