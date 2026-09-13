"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PreloaderContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const PreloaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
