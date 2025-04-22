import React, { createContext, useContext, useState, ReactNode } from "react";

export type ThemeTokens = {
  color: Record<string, any>;
  shadow: Record<string, string>;
};

const ThemeContext = createContext<
  | {
      tokens: ThemeTokens;
      setTokens: (tokens: ThemeTokens) => void;
    }
  | undefined
>(undefined);

export const ThemeProvider = ({
  children,
  initialTokens,
}: {
  children: ReactNode;
  initialTokens: ThemeTokens;
}) => {
  const [tokens, setTokens] = useState(initialTokens);

  return (
    <ThemeContext.Provider value={{ tokens, setTokens }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
