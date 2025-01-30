import { PrimaryButton, SecondaryButton } from "~/shared/components/ui/Button";
import { Text } from "~/shared/components/ui/Text";
import Modal from "~/shared/components/ui/Modal/Modal";
import { Stack } from "~/shared/components/ui/layout";

interface EnableSafeModeModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onEnable: () => void;
}

export const EnableSafeModeModal = ({
  isOpen,
  onCancel,
  onEnable,
}: EnableSafeModeModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} close={onCancel} small>
        <Modal.Header>Enable safe mode</Modal.Header>
        <Modal.Content>
          <Text variant="regular">
            Safe mode hides all registration data, ideal for casual staff using
            the scanner app. To switch back to Full mode, log out and use the
            link sent to your email to log in again.
          </Text>
        </Modal.Content>
        <Modal.Footer>
          <Stack gap={2}>
            <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
            <PrimaryButton onClick={onEnable}>Enable</PrimaryButton>
          </Stack>
        </Modal.Footer>
      </Modal>
    </>
  );
};
