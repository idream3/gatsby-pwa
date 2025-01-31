import * as React from "react"
import { Text } from "~/shared/components/ui/Text";
import { Scan } from "@phosphor-icons/react";
import { Stack } from "~/shared/components/ui/layout/Stack";

export const MainHeader = () => {
  return (
    <Stack direction="horizontal" gap={2} alignItems="center">
      <Scan color="white" size={48} weight="thin" />
      <Text variant="header.M" color="white">
        Exhibitor Scanner
      </Text>
    </Stack>
  );
};
