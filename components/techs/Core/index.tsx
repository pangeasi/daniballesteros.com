import { CoreTechs, getRandomTechie } from "./CoreTechs";

type TechMachineProps = {
  amount?: number;
};

export const TechMachine = ({ amount }: TechMachineProps) => {
  return (
    <>
      {Array.from(Array(amount || 10)).map((_, index) => (
        <CoreTechs key={index} initialTech={getRandomTechie()} />
      ))}
    </>
  );
};
