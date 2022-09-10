import { Logo } from "../svgs/Logo";
import { motion, useAnimation } from "framer-motion";
import { LinkNav } from "../LinkNav";
import dynamic from "next/dynamic";
import { TechMachine } from "../techs/Core";

const menus = [
  {
    title: "Contacto",
    link: "#contact",
  },
  {
    title: "Proyectos",
    link: "#projects",
  },
  {
    title: "Habilidades",
    link: "#skills",
  },
];
const Header = () => {
  return (
    <header
      id="header"
      className="w-full flex flex-col bg-gradient-to-r from-cyan-400 to-blue-700"
    >
      <div className="w-full h-[190px] md:h-[260px] absolute overflow-hidden">
        <TechMachine amount={20} />
      </div>
      <div className="flex self-center">
        <div className="w-24 sm:w-36 mt-8 animate-bounce-in-top">
          <a href="/">
            <Logo color="#fff" />
          </a>
        </div>
      </div>
      <div className="flex max-w-md self-center gap-4 mt-2 text-xl text-white">
        {menus.map(({ link, title }) => (
          <LinkNav key={link} href={link}>
            {title}
          </LinkNav>
        ))}
      </div>
      <div className="z-10">
        <svg viewBox="0 0 900 50">
          <path
            fill="white"
            d="M0 14L37.5 16.3C75 18.7 150 23.3 225 28.7C300 34 375 40 450 36C525 32 600 18 675 13.5C750 9 825 14 862.5 16.5L900 19L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z"
            style={{
              transform: "matrix(-1, 0, 0, -1, 900.000, 50.000)",
            }}
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
