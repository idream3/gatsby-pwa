import { useMutation, useQuery } from "@tanstack/react-query";
import { PrimaryButton, Stack, TextInput, Text, Box } from "flicket-ui";
import { useState } from "react";
import { useTheme } from "styled-components";
import { sdk } from "~/shared/graphql/client";
import { useExhibitorContext } from "~/shared/hooks/useExhibitorContext.hook";
import { toast } from "sonner";
import { Pencil } from "@phosphor-icons/react";
import { attendeeKeys } from "~/features/attendee-form/hooks/attendees";

export const SessionNamingForm = () => {

  const [sessionName, setSessionName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { user, setScannerName, organization } = useExhibitorContext();



  const nameSessionMutation = useMutation({
    mutationFn: () =>
      sdk().nameExhibitorSession({
        name: sessionName,
      }),
    onSuccess: ({ nameExhibitorSession }) => {
      if (!nameExhibitorSession.scannerName) {
        console.error("No scanner name returned from server after mutation");
        setError("An error occurred. Please try again.");
        return;
      }

      setScannerName(nameExhibitorSession.scannerName);

      toast.success("Sales person named successfully", {
        icon: <Pencil />,
      });
    },
  });

  // const registrationListQuery = useQuery({
  //   queryKey: ["registrations"],
  //   queryFn: () => sdk().listAttendees(),
  // });


  if (!user) return null;

  return (
    <Stack gap={3} direction="column">
      <Text color="white" variant="header.S">
        {user?.exhibitorName}
      </Text>
      <Stack gap={"1/4"} direction={"vertical"}>
        <Text color="white" variant="header.XS">
          Sales person
        </Text>
        <Text color="white" fontSize={14}>
          Enter the sellers name to identify leads.
        </Text>
        <TextInput
          value={sessionName}
          name="session-name"
          placeholder="e.g. John Smith"
          onChange={(e) => setSessionName(e.currentTarget.value)}
        />
      </Stack>
      {error && <Text color="error">{error}</Text>}
      <PrimaryButton
        disabled={!sessionName}
        onClick={nameSessionMutation.mutate}
      >
        Enter
      </PrimaryButton>
    </Stack>
  );
};
