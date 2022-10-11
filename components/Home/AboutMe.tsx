import { useBreakpoint } from "../../hooks/useBreakpoints";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import photo from "../../public/images/avatar.jpeg";
import Image from "next/image";
import LinkedinIcon from "../svgs/Linkedin";
import GithubIcon from "../svgs/Github";
import TwitterIcon from "../svgs/Twitter";

const AboutMe = () => {
  const [collapsed, setCollapsed] = useState(true);
  const control = useAnimation();
  const { isTouchDevice } = useBreakpoint();

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    control.start({
      height: collapsed ? "auto" : 120,
      transition: {
        duration: 0.5,
      },
    });
  };
  return (
    <section className="flex flex-col items-center md:flex-row md:justify-center md:items-start md:gap-4">
      <svg
        height={0}
        width={0}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="blob">
          <path
            fill="#FF0066"
            d="M37.7,-27.8C54.2,-21.2,76.6,-10.6,80.2,3.6C83.9,17.8,68.7,35.6,52.2,52.3C35.6,68.9,17.8,84.3,-1.2,85.5C-20.2,86.7,-40.4,73.6,-53.9,57C-67.3,40.4,-74,20.2,-72.7,1.3C-71.4,-17.6,-62.1,-35.2,-48.6,-41.8C-35.2,-48.5,-17.6,-44.2,-3.5,-40.7C10.6,-37.2,21.2,-34.5,37.7,-27.8Z"
            transform="translate(119 77) scale(1.38 1.8) rotate(-15)"
          />
        </clipPath>
      </svg>
      <motion.img
        animate={{
          opacity: [0, 1],
        }}
        width={240}
        height={240}
        src="/images/avatar.png"
        alt="Dani Ballesteros"
        className="image-organic"
      />

      <div className="mt-2 md:mt-8 md:text-start p-4 relative">
        <div className="text-center md:text-start">
          <p className="text-xl">Hola, soy Dani</p>
          <p className="mb-2 font-bold text-md">Fullstack Web Developer</p>
        </div>
        <motion.div
          animate={control}
          className={`${collapsed && "h-[120px]"} overflow-y-hidden ${
            !isTouchDevice
              ? "hover:bg-blue-50 cursor-help"
              : "active:bg-blue-50"
          } px-4 -mx-4 overflow-x-clip`}
          onClick={handleCollapse}
        >
          <div className="flex flex-col gap-5 mt-2">
            {collapsed && (
              <div className="w-[100%] h-14 absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-white" />
            )}
            <p>
              Soy desarrollador web con más de 3 años de experiencia,
              especializado en Javascript/Typescript. Tengo experiencia
              profesional trabajando tanto en el frontend (React, Next.js), como
              en el backend (Node, Nest.js, graphQL, PostgreSQL, mongoDB). Desde
              el diseño UX, como el proceso de QA, testing y despliegue.
            </p>
            <p>
              He realizado proyectos para grandes compañias, como Universia
              Santander, ESIC, Melia, LaLiga, también para startups y
              emprendedores.
            </p>
            <p>
              Si tienes algún proyecto interesante que desarrollar, o
              simplemente quieres preguntarme o pedir un consejo, escríbeme y
              podremos organizar una reunión.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(AboutMe), { ssr: false });
