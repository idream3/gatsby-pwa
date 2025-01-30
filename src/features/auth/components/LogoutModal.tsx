import { PrimaryButton, SecondaryButton } from "~/shared/components/ui/Button";
import { Stack } from "~/shared/components/ui/layout";
import { Box } from "~/shared/components/ui/layout/Box";
import Modal from "~/shared/components/ui/Modal/Modal";

interface LogoutModeModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onLogout: () => void;
}

export const LogoutModeModal = ({
  isOpen,
  onCancel,
  onLogout,
}: LogoutModeModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} close={onCancel} small>
        <Modal.Header>Logout</Modal.Header>
        <Modal.Content>
          <Box>
            Are you sure you want to log out? To log in again, use the link sent
            to your email.
          </Box>
        </Modal.Content>
        <Modal.Footer>
          <Stack gap={2}>
            <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
            <PrimaryButton onClick={onLogout}>Logout</PrimaryButton>
          </Stack>
        </Modal.Footer>
      </Modal>
    </>
  );
};
