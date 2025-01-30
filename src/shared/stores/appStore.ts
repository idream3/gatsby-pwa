import { createStore } from "zustand/vanilla";
import { type ExhibitorContextQuery } from "../graphql/sdk";

type ExhibitorContext = ExhibitorContextQuery["exhibitorContext"];
export type ExhibitorEvent = ExhibitorContext["event"];
export type ExhibitorProfile = ExhibitorContext["profile"];
export type ExhibitorOrganization = ExhibitorContext["organization"];

export type AppState = {
  user: ExhibitorProfile | undefined;
  event: ExhibitorEvent | undefined;
  safeModeEnabled: boolean;
  organization: ExhibitorOrganization | undefined;
  loginError: string;
  isOnline: boolean;
  lastSyncedAt?: Date;
  isSyncing: boolean;
};

export type AppActions = {
  setExhibitorContext: (context: ExhibitorContext) => void;
  setLoginError: (error: AppState["loginError"]) => void;
  setLastSyncedAt: (lastSyncedAt: Date) => void;
  setIsOnline: (isOnline: boolean) => void;
  setSafeModeEnabled: (enabled: boolean) => void;
  setScannerName: (scannerName: string) => void;
  resetState: () => void;
  setSyncing: (isSyncing: boolean) => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  user: undefined,
  event: undefined,
  organization: undefined,
  safeModeEnabled: false,
  loginError: "",
  isOnline: true,
  lastSyncedAt: undefined,
  isSyncing: false,
};

export const initAppStore = (state: Partial<AppState> = {}): AppState => {
  return {
    ...defaultInitState,
    ...state,
  };
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setExhibitorContext: (context) =>
      set((state) => ({
        ...state,
        user: context.profile,
        event: context.event,
        organization: context.organization,
        safeModeEnabled: context.profile.safeModeEnabled,
      })),
    setLoginError: (error) => set((state) => ({ ...state, loginError: error })),
    setLastSyncedAt: (lastSyncedAt) =>
      set((state) => ({ ...state, lastSyncedAt })),
    setIsOnline: (isOnline) => set((state) => ({ ...state, isOnline })),
    setSafeModeEnabled: (enabled) =>
      set((state) => ({ ...state, safeModeEnabled: enabled })),
    setScannerName: (scannerName) =>
      set((state) => ({
        ...state,
        user: state.user
          ? {
            ...state.user,
            scannerName,
          }
          : undefined,
      })),
    setSyncing: (isSyncing) => set((state) => ({ ...state, isSyncing })),
    resetState: () => set(defaultInitState),
  }));
};
