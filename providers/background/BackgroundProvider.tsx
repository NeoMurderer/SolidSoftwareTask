import { randomIntFromInterval } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import BackgroundContext from "./BackgroundContext";
import { STORAGE_KEY } from "@/constants/storage";
import StorageService from "@/services/StorageService";

type BackgroundProviderType = { children: React.ReactNode };

const storageService = new StorageService(STORAGE_KEY);

export const BackgroundProvider = ({ children }: BackgroundProviderType) => {
  const [color, setColor] = useState<string>("white");

  const setRandomColor = useCallback((): string => {
    const r = randomIntFromInterval(0, 255);
    const g = randomIntFromInterval(0, 255);
    const b = randomIntFromInterval(0, 255);

    const randomColor = `rgb(${r}, ${g}, ${b})`;
    setColor(randomColor);

    return randomColor;
  }, []);

  useEffect(() => {
    storageService
      .getItem()
      .then((color: string | null) => color && setColor(color))
      .catch((error: any) => {
        console.error("BackgroundProvider. Unable to get color from storage", error);
      });
  }, []);

  const updateStorage = useCallback(() => {
    storageService.setItem(color);
  }, [color]);

  useEffect(updateStorage, [color]);

  return (
    <BackgroundContext.Provider value={{ color, setColor, setRandomColor }}>{children}</BackgroundContext.Provider>
  );
};
