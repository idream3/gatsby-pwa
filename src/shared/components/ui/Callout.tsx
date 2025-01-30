

import { type ComponentProps } from "react";
import { Box } from "./layout";
import { type SystemProps } from "flicket-ui";

export function Callout({
  children,
  ...props
}: { children: React.ReactNode } & SystemProps & ComponentProps<"div">) {
  return (
    <Box backgroundColor="N100" py={2} px={2} borderRadius="sm" {...props}>
      {children}
    </Box>
  );
}
