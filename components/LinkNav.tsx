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
      className="z-10 md:font-bold text-base md:text-xl transition-all duration-500 ease-in-out md:hover:-translate-y-1 md:hover:scale-100 md:hover:text-shadow-link"
    >
      {children}
    </a>
  );
};
