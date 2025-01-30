import * as React from "react"

import { Box } from "~/shared/components/ui/layout";

export default function DarkBackground() {
  return (
    <Box
      background={
        "var(--Black-BG, radial-gradient(142.12% 65.53% at 7.5% 98.52%, rgba(240, 111, 5, 0.35) 0%, rgba(255, 255, 255, 0.00) 100%), #000)"
      }
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={-1}
    />
  );
}
