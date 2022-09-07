import { ReactNode, useRef } from "react";

type LinkNavProps = {
  children: ReactNode;
  href: string;
};

export const LinkNav = ({ href, children }: LinkNavProps) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={anchorRef}
      href={href}
      className="z-10 font-bold transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-shadow-link"
    >
      {children}
    </a>
  );
};
