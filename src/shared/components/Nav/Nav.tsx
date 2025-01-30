

import { List, Lock } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Box, Flex, Stack } from "~/shared/components/ui/layout";
import { useExhibitorContext } from "~/shared/hooks/useExhibitorContext.hook";
import { getImageSrc } from "~/shared/lib/getImageSource";
import { useAppStore } from "~/shared/providers/appStoreProvider";
import Icon from "../ui/Icon";
import styled from "styled-components";
import Sidebar from "./Sidebar";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const StyledNav = styled(Flex)`
  inset: 0 0 auto 0;
  z-index: 11;
  background-color: white;
  border-bottom: 1px solid ${(p) => p.theme.colors.N200};

  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

export default function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { organization, user } = useExhibitorContext();
  const safeModeEnabled = useAppStore((state) => state.safeModeEnabled);

  return (
    <>
      <Sidebar
        isOpen={showSidebar}
        onClose={(isOpen) => setShowSidebar(isOpen)}
      />
      <StyledNav px={2}>
        <Box>
          <Link href="/">
            <Image
              src={getImageSrc(
                organization?.branding?.logo ?? "/flicket-logo.svg",
              )}
              alt={"Logo"}
              width={60}
              height={40}
            />
          </Link>
        </Box>
        <Stack alignItems="center" gap={2}>
          {safeModeEnabled && (
            <Icon color="N800">
              <Lock size={20} weight="regular" />
            </Icon>
          )}
          {user && (
            <Icon color="N800">
              <List
                size={24}
                weight="bold"
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </Icon>
          )}
        </Stack>
      </StyledNav>
    </>
  );
}
