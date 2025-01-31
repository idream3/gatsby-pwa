import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import { PrimaryButton, Select } from "flicket-ui";
import { useState } from "react";
import { Stack } from "~/shared/components/ui/layout";
import { Text } from "~/shared/components/ui/Text";
import { sdk } from "~/shared/graphql/client";
import { type LoginFormState } from "../types/types";
import DarkBackground from "~/shared/components/DarkBackground";
import { MainHeader } from "~/features/home/components/MainHeader";
import { toast } from "sonner";
import { Envelope } from "@phosphor-icons/react";
import { Input } from "~/shared/components/ui/Input";

interface LoginFormProps {
  setLoginFormState: (state: LoginFormState) => void;
  loginState: LoginFormState;
}

export const LoginForm = ({
  setLoginFormState,
  loginState,
}: LoginFormProps) => {
  const [exhibitorEmail, setExhibitorEmail] = useState("");
  const [exhibitorEvent, setExhibitorEvent] = useState<
    { label: string; value: string } | undefined
  >(undefined);

  const resetState = () => {
    setExhibitorEmail("");
    setExhibitorEvent(undefined);
  };

  const resendLoginMutation = useMutation({
    mutationFn: () => {
      setLoginFormState({ state: "loading" });
      return sdk().resendExhibitorLoginEmail({
        email: exhibitorEmail,
        ...(exhibitorEvent ? { eventId: exhibitorEvent.value } : {}),
      });
    },
    onSuccess: ({ resendExhibitorLoginEmail }) => {
      switch (resendExhibitorLoginEmail.__typename) {
        case "ResendExhibitorLoginEmailNotFound": {
          resetState();
          toast.error("Email not found", {
            icon: <Envelope size={20} weight="bold" />,
          });
          return setLoginFormState({
            state: "error",
            error: "User login invalid",
          });
        }
        case "ResendExhibitorLoginEmailSuccess": {
          resetState();
          toast.success("Login email sent", {
            icon: <Envelope size={20} weight="bold" />,
          });
          return setLoginFormState({ state: "success" });
        }
        case "ResendExhibitorLoginEmailMultipleFound":
          const firstEvent = resendExhibitorLoginEmail.events[0];
          if (firstEvent) {
            setExhibitorEvent({
              label: firstEvent.name,
              value: firstEvent.id,
            });
          }

          toast.warning(
            "Multiple events found. Please select the event you are logging in for."
          );

          // Don't clear the email state here so we can send it back along with the selected event.
          return setLoginFormState({
            state: "multiple-found",
            events: resendExhibitorLoginEmail.events,
          });
      }
    },
    onError: () => {
      resetState();

      setLoginFormState({
        state: "error",
        error: "Something went wrong. Please try again.",
      });
    },
  });

  const isLoading =
    loginState.state === "loading" || resendLoginMutation.isPending;

  const multipleFound = loginState.state === "multiple-found";

  return (
    <>
      <DarkBackground />
      <MainHeader />
      <Text color="white" variant="header.S">
        Lost your login link?
      </Text>

      <Text color="white">
        {!multipleFound
          ? `Enter your email address below and we'll resend your login link to your inbox.`
          : `Select your event below.`}
      </Text>
      {!multipleFound ? (
        // TODO input validation
        <Stack direction={"vertical"}>
          <Input
            placeholder="Enter email address"
            name="email"
            label="Email"
            theme="dark"
            onChange={(event) => setExhibitorEmail(event.currentTarget.value)}
            value={exhibitorEmail}
            type="email"
          />
        </Stack>
      ) : (
        <Select
          value={exhibitorEvent}
          // @ts-expect-error to fix
          onChange={(event) =>
            setExhibitorEvent(event as { label: string; value: string })
          }
          options={loginState.events.map((event) => ({
            value: event.id,
            label: event.name,
          }))}
        />
      )}
      <PrimaryButton
        isLoading={!!isLoading}
        disabled={!exhibitorEmail}
        onClick={resendLoginMutation.mutate}
      >
        {multipleFound ? "Send login" : "Submit"}
      </PrimaryButton>
    </>
  );
};
