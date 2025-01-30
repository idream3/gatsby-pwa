"use client";

import { useEffect, type ReactNode } from "react";

import { useOnlineStatus } from "flicket-ui";
import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "~/shared/providers/appStoreProvider";
import { hasOfflineData, sync } from "../sync";

export interface OnlineProviderProps {
  children: ReactNode;
}

const delay = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const OnlineProvider = ({ children }: OnlineProviderProps) => {
  const setIsOnline = useAppStore(useShallow((state) => state.setIsOnline));
  const isOnline = useOnlineStatus();
  const setSyncing = useAppStore(useShallow((state) => state.setSyncing));
  const setLastSyncedAt = useAppStore(
    useShallow((state) => state.setLastSyncedAt),
  );

  useEffect(() => {
    setIsOnline(isOnline);

    if (isOnline) {
      async function doSync() {
        const data = await hasOfflineData();

        if (!data) return;
        console.log("Start sync");
        setSyncing(true);

        await Promise.allSettled([sync(), delay(3000)]);

        setSyncing(false);
        setLastSyncedAt(new Date());
        console.log("Finish sync");
      }

      void doSync();
    }
  }, [isOnline, setIsOnline]);

  return <>{children}</>;
};
