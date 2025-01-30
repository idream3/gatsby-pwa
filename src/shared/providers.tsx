"use client";

import { ThemeProvider } from "styled-components";

import React from "react";
import { theme } from "flicket-ui";
import GlobalCSS from "./styles/globals";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
        <ThemeProvider theme={theme}>
          <GlobalCSS />
          {children}
        </ThemeProvider>
  );
}
