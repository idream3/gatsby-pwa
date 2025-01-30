import { CaretLeft, X } from "@phosphor-icons/react";
import {
  DialogContent as ReachDialogContent,
  DialogOverlay as ReachDialogOverlay,
} from "@reach/dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { pick } from "@styled-system/props";
import { Box, Flex, system, type SystemProps, Text } from "flicket-ui";
import { AnimatePresence, motion } from "motion/react";
// import { noop } from "lodash";
import {
  type ReactNode,
  useContext,
  createContext,
  type Attributes,
  type ComponentProps,
} from "react";
import styled, { css } from "styled-components";
import { modalBackdropMotion, modalContentMotion } from "./animation";
import { on } from "events";

export const ModalContext = createContext<{
  close?: (...args: unknown[]) => unknown;
  small: boolean;
}>({ close: undefined, small: false });

export function useCustomModal() {
  const state = useContext(ModalContext);
  return state;
}

const MOBILE_BREAKPOINT = "sm";

const MotionOverlay = motion.create(Dialog.Overlay);
const MotionDialog = motion.create(Dialog.Content);

const DialogOverlay = styled(MotionOverlay) <{
  $alignModalTop: boolean;
}>`
  background: rgba(0, 0, 0, 0.4);
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;

  @media (min-width: ${(p) => p.theme.breakpoints[MOBILE_BREAKPOINT]}) {
    align-items: ${(p) => (p.$alignModalTop ? " flex-start" : "center")};
    padding: ${(p) => p.theme.space[4]}px;
  }

  && {
    ${system}
  }
`;

const DialogContent = styled(MotionDialog) <SystemProps>`
  background-color: white;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  &:focus {
    outline: none;
  }

  width: 100%;

  @media (min-width: ${(p) => p.theme.breakpoints[MOBILE_BREAKPOINT]}) {
    width: 774px;
    border-radius: 6px;
    max-height: 85vh;
    padding: 25px;
  }

  && {
    ${system}
  }
`;

const ContentWrapper = styled.div<SystemProps<{ $small?: boolean }>>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  background: ${(p) => p.theme.colors.white};
  outline: none;
  width: 100%;
  height: 100dvh;

  @media (min-width: ${(p) => p.theme.breakpoints[MOBILE_BREAKPOINT]}) {
    border-radius: ${(p) => p.theme.radii.sm};
    box-shadow: ${(p) => p.theme.shadows.sm};
    height: auto;
    max-height: 92dvh;
    width: ${(p) => (p.$small ? "470px" : p.width)};
  }

  && {
    ${system}
  }
`;

type ModalProps = SystemProps<{
  isOpen: boolean;
  close: () => void;
  ariaLabel?: string;
  children: ReactNode;
  hasDivider?: boolean;
  small?: boolean;
  width?: string;
  alignModalTop?: boolean;
  dialogContentProps?: SystemProps;
  modalBaseProps?: SystemProps;
  clickOutsideToClose?: boolean;
  dialogOverlayProps?: SystemProps;
}>;

export const Modal = ({
  children,
  ariaLabel = "modal",
  isOpen,
  close,
  small = false,
  width = "100%",
  alignModalTop = false,
  dialogContentProps = {},
  dialogOverlayProps = {},
  ...props
}: ModalProps) => (
  <ModalContext.Provider value={{ close, small }}>
    <Dialog.Root open={isOpen} onOpenChange={close}>
      <Dialog.Portal>
        <DialogOverlay
          {...modalBackdropMotion}
          $alignModalTop={alignModalTop}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        // {...pick(dialogOverlayProps)}
        />
        <DialogContent
          asChild
          // {...modalContentMotion}
          aria-label={ariaLabel}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        // {...pick(dialogContentProps)}
        >
          <ContentWrapper
            id="modal-content-wrapper"
            $small={small}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            {...pick(props)}
          >
            {children}
          </ContentWrapper>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  </ModalContext.Provider>
);

function Header({
  children,
  onBack,
}: {
  children: ReactNode;
  onBack?: () => void;
}) {
  const { close, small } = useContext(ModalContext);
  return (
    <Dialog.Title asChild>
      <Box
        pt={"20px"} // custom pt to account for font height
        pb={2}
        pr={8}
        pl={onBack ? 8 : small ? [3] : [3, 3, 4]}
        d="flex"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
        borderBottomColor="N200"
        borderBottomStyle="solid"
        css={{
          borderBottomWidth: "1px",
          lineHeight: 1,
        }}
      >
        {onBack && (
          <IconButton onClick={onBack} left="19px">
            <CaretLeft size={20} weight="bold" />
          </IconButton>
        )}

        {children && (
          <Text
            as="h5"
            variant="header.S"
            width={1}
            textAlign={onBack ? "center" : "left"}
          >
            {children}
          </Text>
        )}

        <IconButton onClick={close}>
          <X size={20} />
        </IconButton>
      </Box>
    </Dialog.Title>
  );
}

function Content({
  children,
  ...props
}: { children: ReactNode; small?: boolean } & SystemProps) {
  const { small } = useContext(ModalContext);

  return (
    <Dialog.Description asChild>
      <Box
        fontSize={4}
        overflowY="auto"
        flex={1}
        py={small ? 2 : 3}
        pl={small ? [3] : [3, 3, 4]}
        pr={small ? [3] : [1, 3, 4]}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        {...pick(props)}
      >
        {children}
      </Box>
    </Dialog.Description>
  );
}

// eslint-disable-next-line react/display-name
function Footer({ children, ...props }: { children: ReactNode } & SystemProps) {
  const { small } = useContext(ModalContext);

  return (
    <Box
      py={2}
      px={small ? [2] : [3, 3, 4]}
      zIndex={1}
      borderTopStyle="solid"
      borderTopColor="N200"
      css={css({
        // Don't know why this property is not working with typescript on the component 🤷
        borderTopWidth: "1px",
      })}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      {...pick(props)}
    >
      <Flex justifyContent="flex-end">{children}</Flex>
    </Box>
  );
}

Modal.Footer = Footer;
Modal.Header = Header;
Modal.Content = Content;

export default Modal;

// TODO: replace with IconButton from flicket-ui when ready
function IconButton({
  children,
  ...props
}: { children: ReactNode } & SystemProps<ComponentProps<"div">>) {
  return (
    <Box
      onClick={close}
      w="40px"
      h="40px"
      position="absolute"
      right="19px"
      color="N800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      {...props}
    >
      {children}
    </Box>
  );
}
