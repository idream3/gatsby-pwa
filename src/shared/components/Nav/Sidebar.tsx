import * as React from "react";

import {
  Gear,
  ListDashes,
  Lock,
  Scan,
  UserCircle,
} from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
// import { EnableSafeModeButton } from "~/features/auth/components/EnableSafeModeButton";
// import { LogoutButton } from "~/features/auth/components/LogoutButton";
import { Text } from "~/shared/components/ui/Text";
import { Box, Stack } from "~/shared/components/ui/layout";
import { useAppStore } from "~/shared/providers/appStoreProvider";
import { Callout } from "../ui/Callout";
import { Li, Ul } from "./Sidebar.styles";
import { pjson } from "~/shared/lib/pjson";
import { MotionSidebar } from "./Sidebar.styles";
import { ListItem, List } from "./Sidebar.List";
import Icon from "../ui/Icon";
import { Divider } from "flicket-ui";

export default function Sidebar({
  isOpen = false,
  onClose,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}) {
  const safeModeEnabled = useAppStore((state) => state.safeModeEnabled);

  return (
    <AnimatePresence>
      {/* TODO handle nav items when not logged in */}
      {isOpen && (
        <MotionSidebar
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          exit={{ x: "-100vw" }}
          transition={{ duration: 0.2, delay: 0, ease: "circOut" }}
          p={2}
        >
          <Stack
            direction="vertical"
            flex={1}
            justifyContent="space-between"
            height="100%"
          >
            <Stack gap={4} direction="vertical">
              {/* TODO make it look nicer */}
              {safeModeEnabled && (
                <Callout>
                  <Stack gap={1} direction="horizontal" alignItems="center">
                    <Icon color="N800">
                      <Lock />
                    </Icon>
                    <Text variant="regular">Safe mode enabled</Text>
                  </Stack>
                </Callout>
              )}
              <List title="Menu">
                <Ul>
                  <ListItem
                    href="/scan"
                    label="Scan attendees"
                    icon={<Scan size={24} weight="light" />}
                    onClick={() => onClose(false)}
                  />

                  <ListItem
                    href="/attendee?attendeeId=new"
                    label="Register lead manually"
                    icon={<ListDashes size={24} weight="light" />}
                    onClick={() => onClose(false)}
                  />

                  <ListItem
                    href="/registrations"
                    label="Registrations"
                    icon={<UserCircle size={24} weight="light" />}
                    onClick={() => onClose(false)}
                    hide={safeModeEnabled}
                  />

                  {/* Should we still allow viewing details of the people the user has captured? */}
                  <ListItem
                    href="/exhibitor-fields"
                    label="Attendee details"
                    icon={<Gear size={24} weight="light" />}
                    onClick={() => onClose(false)}
                    hide={safeModeEnabled}
                  />
                </Ul>

                <Divider mt={2} />
              </List>

              <List title="Account">
                <Ul>
                  {/* {!safeModeEnabled && (
                    <EnableSafeModeButton onEnable={() => onClose(false)} />
                  )} */}

                  {/* <LogoutButton onLogout={() => onClose(false)} /> */}
                </Ul>
              </List>
            </Stack>
            <Stack direction="vertical">
              <Text variant="regular">Version: {pjson.version}</Text>
              <OnlineStatusBadge />
            </Stack>
          </Stack>
        </MotionSidebar>
      )}
    </AnimatePresence>
  );
}

function OnlineStatusBadge() {
  const isOnline = useAppStore((state) => state.isOnline);

  return (
    <Stack alignItems="center" gap={1}>
      <Box
        display="inline-block"
        backgroundColor={isOnline ? "greenyellow" : "tomato"}
        width="10px"
        height="10px"
        borderRadius="full"
        transition="backgroundColor 0.2s"
      />
      <Text variant="regular">{isOnline ? "Online" : "Offline"}</Text>
    </Stack>
  );
}
