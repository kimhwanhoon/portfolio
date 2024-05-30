"use client";

import { createTheme, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

const theme = createTheme({
  /** Your theme override here */
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider defaultColorScheme="light" theme={theme}>
      {children}
    </MantineProvider>
  );
};
