

import { useAppStore } from "~/shared/providers/appStoreProvider";
import { useShallow } from "zustand/react/shallow";

export function useExhibitorContext() {
  return useAppStore(
    useShallow(
      ({ event, organization, user, setExhibitorContext, setScannerName }) => ({
        event,
        user,
        organization,
        setExhibitorContext,
        setScannerName,
      }),
    ),
  );
}
