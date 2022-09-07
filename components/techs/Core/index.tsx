import { CoreTechs, getRandomTechie } from "./CoreTechs";

export const TechMachine = () => {
  return (
    <>
      {Array.from(Array(15)).map((_, index) => (
        <CoreTechs key={index} initialTech={getRandomTechie()} />
      ))}
    </>
  );
};
