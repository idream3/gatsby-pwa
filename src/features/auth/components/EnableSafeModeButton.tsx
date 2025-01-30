"use client";

import { EyeSlash } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Stack } from "~/shared/components/ui/layout/Stack";
import { Text } from "~/shared/components/ui/Text";
import { sdk } from "~/shared/graphql/client";
import { useAppStore } from "~/shared/providers/appStoreProvider";
import { EnableSafeModeModal } from "./EnableSafeModeModal";
import { toast } from "sonner";
import { useTheme } from "styled-components";
import { Lock } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { ListItem } from "~/shared/components/Nav/Sidebar.List";

export const EnableSafeModeButton = ({
  onEnable,
}: {
  onEnable?: () => void;
}) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const setSafeModeEnabled = useAppStore((state) => state.setSafeModeEnabled);
  const isOnline = useAppStore((state) => state.isOnline);

  const enableSafeModeMutation = useMutation({
    mutationFn: () => sdk().enableSafeMode(),
    onSuccess: () => {
      afterEnabled();
    },
  });

  function afterEnabled() {
    setSafeModeEnabled(true);
    toast.success("Safe mode enabled", {
      icon: <Lock />,
    });

    router.push("/scan");
  }

  return (
    <>
      <ListItem
        label="Enter safe mode"
        icon={<EyeSlash size={24} weight="light" />}
        onClick={() => setModalOpen(true)}
      />
      <EnableSafeModeModal
        isOpen={modalOpen}
        onCancel={() => setModalOpen(false)}
        onEnable={() => {
          if (isOnline) {
            enableSafeModeMutation.mutate();
          } else {
            afterEnabled();
          }
          setModalOpen(false);
          onEnable?.();
        }}
      />
    </>
  );
};
