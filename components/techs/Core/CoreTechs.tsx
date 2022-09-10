import { useAnimation, motion } from "framer-motion";
import { useState, useCallback } from "react";
import { techies } from "./techies";

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
          className={`text-4xl absolute`}
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
