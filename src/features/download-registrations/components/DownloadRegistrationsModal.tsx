"use client";

import { Envelope } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { PrimaryButton, TextInput, Text } from "flicket-ui";
import { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "styled-components";
import { Modal } from "~/shared/components/ui/Modal";
import { sdk } from "~/shared/graphql/client";

interface DownloadRegistrationsModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

export const DownloadRegistrationsModal = ({
  isOpen,
  onCancel,
}: DownloadRegistrationsModalProps) => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const sendDownloadAttendeesEmailMutation = useMutation({
    mutationKey: ["download-registrations"],
    mutationFn: () => sdk().sendDownloadAttendeesEmail({ email }),
    onSuccess: () => {
      toast.success("Email sent", {
        icon: <Envelope />,
      });
    },
  });

  return (
    <>
      <Modal isOpen={isOpen} close={onCancel} small>
        <Modal.Header>Download registrations</Modal.Header>
        <Modal.Content>
          <Text color="N800" my={3}>
            Please provide the email address where we should send the link to
            the Registrations file.
          </Text>
          <TextInput
            placeholder="Enter email address"
            name="email"
            label="Email"
            color={"white"}
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
            type="email"
          />
        </Modal.Content>
        <Modal.Footer>
          <PrimaryButton onClick={sendDownloadAttendeesEmailMutation.mutate}>
            Download
          </PrimaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};
