import { createContext, useContext } from "react";

type BackgroundContextInterface  = {
  color: string;
  setColor: (value: string) => void;
  setRandomColor: () => string;
}

const BackgroundContext = createContext<BackgroundContextInterface | undefined>(undefined);

export const useBackgroundContext = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackgroundContext must be used within a BackgroundProvider");
  }
  return context;
};
export default BackgroundContext;
