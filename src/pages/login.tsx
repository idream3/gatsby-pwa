import * as React from "react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { navigate, type PageProps } from "gatsby";

import { useAppStore } from "~/shared/providers/appStoreProvider";
import { handlePromise, login } from "~/shared/graphql/queries";
import { Stack } from "~/shared/components/ui/layout";
import { LoginForm } from "~/features/login/components/LoginForm";
import { type LoginFormState } from "~/features/login/types/types";
import { toast } from "sonner";

const searchParamsSchema = z.object({
  eid: z.string(),
  s: z.string(),
});

type SearchParams = z.infer<typeof searchParamsSchema>;

const Login: React.FC<PageProps> = ({ location }) => { 

  const params = new URLSearchParams(location.search);

  const [loginState, setLoginState] = useState<LoginFormState>({
    state: "logged-out",
  });

  const { user, setExhibitorContext: setUser } = useAppStore((state) => state);

  const exhibitorId = params.get("eid")!;
  const secret = params.get("s")!;

  useEffect(() => {
    async function doLogin() {
      setLoginState({ state: "loading" });
      toast.loading("Logging in...");

      const [error, user] = await handlePromise(() =>
        login(exhibitorId, secret),
      );

      if (error) {
        toast.error("Invalid login details");
        setLoginState({ state: "error", error: "User login invalid" });
        return;
      }

      if (user) {
        setUser(user);
        toast.success(`Welcome ${user.profile.exhibitorName}`);
        navigate(user.profile?.scannerName ? "/" : "/session", {replace: true});
      }
    }

    if (user) {
      // Now the exhibitor has logged in we can start a new session and
      // choose a name for this session.
      navigate("/session", {replace: true});
    } else if (!exhibitorId || !secret) {
      setLoginState({ state: "logged-out" });
    } else {
      void doLogin();
    }
  }, [user, exhibitorId, secret]);

  return (
    <Stack gap="3" direction="column">
      <LoginForm setLoginFormState={setLoginState} loginState={loginState} />
    </Stack>
  );
}

export default Login;