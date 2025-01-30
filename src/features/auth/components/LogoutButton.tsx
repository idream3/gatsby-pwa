import { SignOut } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sdk } from "~/shared/graphql/client";
import { useAppStore } from "~/shared/providers/appStoreProvider";
import { LogoutModeModal } from "./LogoutModal";
import { ListItem } from "~/shared/components/Nav/Sidebar.List";

export const LogoutButton = ({ onLogout }: { onLogout?: () => void }) => {
  const resetState = useAppStore((state) => state.resetState);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: () => sdk().exhibitorLogout(),
    onSuccess: async () => {
      resetState();
      router.replace("/login");
    },
  });

  return (
    <>
      <ListItem
        label="Log out"
        icon={<SignOut size={24} weight="light" />}
        onClick={() => setModalOpen(true)}
      />
      <LogoutModeModal
        isOpen={modalOpen}
        onCancel={() => setModalOpen(false)}
        onLogout={() => {
          logoutMutation.mutate();
          setModalOpen(false);
          onLogout?.();
        }}
      />
    </>
  );
};
