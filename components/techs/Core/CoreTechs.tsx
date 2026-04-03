import { motion } from "framer-motion";
import { useState, type ComponentType } from "react";
import { techies } from "./techies";

type CoreTechsProps = {
  initialTech: {
    name: string;
    component: ComponentType;
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

  return (
    <>
      {techs.map((tech, index) => {
        const Component = tech.component;

        return (
          <motion.div
            key={`${tech.name}-${index}`}
            className="text-4xl absolute"
            style={{
              top: `${Math.floor(Math.random() * 10)}vh`,
              left: `${Math.floor(Math.random() * 100)}%`,
            }}
            initial={{ opacity: 0, translateX: 0, translateY: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              translateX: [0, Math.floor(Math.random() * 220)],
              translateY: [0, Math.floor(Math.random() * 220)],
            }}
            transition={{
              duration: Math.floor(3 + Math.random() * (10 - 3 + 1)),
            }}
            onAnimationComplete={setRandomTech}
          >
            <Component />
          </motion.div>
        );
      })}
    </>
  );
};
