

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";
import { X } from "@phosphor-icons/react";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = styled(DialogPrimitive.Overlay)`
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DialogContent = styled(DialogPrimitive.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  &:focus {
    outline: none;
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const CloseButton = styled(DialogPrimitive.Close)`
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-11);
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    background-color: var(--violet-4);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--violet-7);
  }
`;

const DialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const DialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

const DialogTitle = styled(DialogPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
`;

const DialogDescription = styled(DialogPrimitive.Description)`
  color: var(--muted-foreground);
`;

const DialogContentWrapper: React.FC<React.PropsWithChildren<{}>> = ({
  children,
  ...props
}) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogContent {...props}>
      {children}
      <CloseButton>
        <X />
        {/* <span className="sr-only">Close</span> */}
      </CloseButton>
    </DialogContent>
  </DialogPortal>
);

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContentWrapper as DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
