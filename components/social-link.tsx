import Link from "next/link";

type SocialLinkProps = {
  href: string;
  icon: JSX.Element;
};

export default function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="text-2xl text-slate-11 hover:text-slate-12"
      target="_blank"
    >
      {icon}
    </Link>
  );
}
