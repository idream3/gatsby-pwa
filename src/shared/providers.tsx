
import { ThemeProvider } from "styled-components";

import React from "react";
import { theme } from "flicket-ui";
import GlobalCSS from "./styles/globals";
import { AppStoreProvider } from "./providers/appStoreProvider";
import { getQueryClient } from "./lib/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";


export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider
    client={queryClient}
    // 
  >
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <AppStoreProvider>
        {children}
        </AppStoreProvider>
      </ThemeProvider>
     </QueryClientProvider>
  );
}
