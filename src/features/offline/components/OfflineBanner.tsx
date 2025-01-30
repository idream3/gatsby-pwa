"use client";

import { CloudX } from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { Stack } from "~/shared/components/ui/layout";
import { Text } from "~/shared/components/ui/Text";
import { useAppStore } from "~/shared/providers/appStoreProvider";

export default function OfflineBanner() {
  // TODO this should be set when/where we actually sync, not here.
  const { setLastSyncedAt, isSyncing, lastSyncedAt, isOnline } = useAppStore(
    useShallow((state) => ({
      lastSyncedAt: state.lastSyncedAt,
      setLastSyncedAt: state.setLastSyncedAt,
      isOnline: state.isOnline,
      isSyncing: state.isSyncing,
    })),
  );

  if (isOnline && !isSyncing) {
    return null;
  }

  const syncedTimeString = lastSyncedAt
    ? formatDistanceToNow(lastSyncedAt)
    : null;

  return (
    <Stack
      backgroundColor="N700"
      color="N300"
      width={"100%"}
      padding={"1/2"}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <CloudX size={24} />
      <Text variant="regular" color="white">
        {isSyncing && <>Saving offline data</>}
        {!isSyncing && (
          <>
            Offline
            {syncedTimeString ? ` • last synced ${syncedTimeString} ago` : ""}
          </>
        )}
      </Text>
    </Stack>
  );
}
