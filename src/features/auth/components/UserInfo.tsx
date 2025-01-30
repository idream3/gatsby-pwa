"use client";

import { Stack } from "~/shared/components/ui/layout";
import { Text } from "~/shared/components/ui/Text";
import { useExhibitorContext } from "../../../shared/hooks/useExhibitorContext.hook";
import { Callout } from "~/shared/components/ui/Callout";

export default function UserInfo() {
  const { user, event, organization } = useExhibitorContext();

  return (
    <Callout>
      <Stack gap={0} direction="vertical">
        {!user && <Text variant="regular">No user logged in</Text>}

        {user && (
          <>
            <Text variant="regular">Exhibitor name: {user?.exhibitorName}</Text>
            <Text variant="regular">Scanner name: {user?.scannerName}</Text>
            <Text>Email: {user?.email}</Text>
          </>
        )}

        {event && (
          <>
            <Text variant="regular">Event title: {event.title}</Text>
            <Text variant="regular">Event ID: {event.id}</Text>
          </>
        )}

        {organization && (
          <Text variant="regular">Organization: {organization.name}</Text>
        )}
      </Stack>
    </Callout>
  );
}
