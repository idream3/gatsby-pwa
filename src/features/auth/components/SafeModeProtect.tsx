import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppStore } from "~/shared/providers/appStoreProvider";

export const SafeModeProtect = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const safeModeEnabled = useAppStore((state) => state.safeModeEnabled);
  const router = useRouter();

  useEffect(() => {
    if (safeModeEnabled) {
      router.replace("/scan");
    }
  }, [safeModeEnabled]);

  return <>{children}</>;
};
