import * as React from "react";
import { navigate } from 'gatsby' 
// import { useLocation } from "@reach/router";
import { useEffect } from "react";
import { exhibitorContext } from "~/shared/graphql/queries";
import { useExhibitorContext } from "~/shared/hooks/useExhibitorContext.hook";
import { useAppStore } from "~/shared/providers/appStoreProvider";
import { handlePromise } from "../../../shared/graphql/queries";
import { toast } from "sonner";

type Whitelist = "/login";

export default function AuthProtect({
  children,
  whitelist = [],
}: {
  children: React.ReactNode;
  whitelist?: Whitelist[];
}) {
  
  const pathname = "/login";//useLocation().pathname;
  const loginError = useAppStore((state) => state.loginError);
  const isOnline = useAppStore((state) => state.isOnline);
  const { setExhibitorContext, user } = useExhibitorContext();

  useEffect(() => {
    async function getExhibitorContext() {
      toast.loading("Authenticating...");
      const [error, contextResult] = await handlePromise(() =>
        exhibitorContext(),
      );

      if (error && isOnline) {
        navigate("/login", { replace: true });
        return;
      }

      if (contextResult) {
        setExhibitorContext(contextResult);
      }
    }

    if (!user && !(pathname in whitelist)) {
      void getExhibitorContext();
    }
  }, [user, loginError, pathname, setExhibitorContext, whitelist]);

  if (pathname === "/login") {
    return <>{children}</>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
