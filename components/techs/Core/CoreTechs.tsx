import { useAnimation, motion } from "framer-motion";
import { useState, useCallback } from "react";
import {
  Nest,
  Next,
  TS,
  JS,
  Docker,
  Git,
  ChakraUI,
  React,
  ReactQuery,
  Vite,
  Prisma,
  VSCode,
} from "../";

export const techies = [
  {
    name: "Next",
    component: Next,
  },
  {
    name: "Nest",
    component: Nest,
  },
  {
    name: "TS",
    component: TS,
  },
  {
    name: "JS",
    component: JS,
  },
  {
    name: "Docker",
    component: Docker,
  },
  {
    name: "Git",
    component: Git,
  },
  {
    name: "ChakraUI",
    component: ChakraUI,
  },
  {
    name: "React",
    component: React,
  },
  {
    name: "ReactQuery",
    component: ReactQuery,
  },
  {
    name: "Vite",
    component: Vite,
  },
  {
    name: "Prisma",
    component: Prisma,
  },
  {
    name: "VSCode",
    component: VSCode,
  },
];

type CoreTechsProps = {
  initialTech: {
    name: string;
    component: React.FC;
  };
};

export const getRandomTechie = () => {
  const random = Math.floor(Math.random() * techies.length);
  return techies[random];
};

export const CoreTechs = ({ initialTech }: CoreTechsProps) => {
  const [techs, setTechs] = useState([initialTech]);

  const setRandomTech = () => {
    setTechs([getRandomTechie()]);
  };

  const renderTechs = useCallback(() => {
    return techs.map((tech, index) => {
      const Component = tech.component;
      const control = useAnimation();
      control.start({
        opacity: [0, 0.6, 0],
        translateX: [0, Math.floor(Math.random() * 220)],
        translateY: [0, Math.floor(Math.random() * 220)],
      });
      return (
        <motion.div
          key={index}
          className={`text-4xl absolute overflow-hidden`}
          style={{
            top: `${Math.floor(Math.random() * 10)}vh`,
            left: `${Math.floor(Math.random() * 100)}%`,
          }}
          animate={control}
          transition={{
            duration: Math.floor(3 + Math.random() * (10 - 3 + 1)),
          }}
          onAnimationComplete={() => {
            setRandomTech();
          }}
        >
          <Component />
        </motion.div>
      );
    });
  }, [techs]);
  return <>{renderTechs()}</>;
};
