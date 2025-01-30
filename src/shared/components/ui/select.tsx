

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import styled from "styled-components";
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const StyledTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  height: 2.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme.colors.N200};
  background: ${(props) => props.theme.colors.white};
  padding: 0.5rem 0.75rem;

  &:focus {
    outline: none;
    ring: 2px;
    ring-offset: 2px;
    ring-color: "#2563eb";
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <StyledTrigger ref={ref} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretDown style={{ height: "1rem", width: "1rem", opacity: 0.5 }} />
    </SelectPrimitive.Icon>
  </StyledTrigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const StyledScrollButton = styled.div`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
`;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton asChild>
    <StyledScrollButton ref={ref} {...props}>
      <CaretUp style={{ height: "1rem", width: "1rem" }} />
    </StyledScrollButton>
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton asChild>
    <StyledScrollButton ref={ref} {...props}>
      <CaretDown style={{ height: "1rem", width: "1rem" }} />
    </StyledScrollButton>
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const StyledContent = styled(SelectPrimitive.Content)<{
  position?: "popper" | "item-aligned";
}>`
  position: relative;
  z-index: 50;
  max-height: 24rem;
  min-width: 8rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme.colors.N200};
  background: ${(props) => props.theme.colors.N200};
  color: ${(props) => props.theme.colors.N800};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);

  &[data-state="open"] {
    animation: fadeIn 150ms ease-out;
  }

  &[data-state="closed"] {
    animation: fadeOut 150ms ease-in;
  }

  ${(props) =>
    props.position === "popper" &&
    `
    &[data-side="bottom"] { transform: translateY(4px); }
    &[data-side="left"] { transform: translateX(-4px); }
    &[data-side="right"] { transform: translateX(4px); }
    &[data-side="top"] { transform: translateY(-4px); }
  `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`;

const StyledViewport = styled(SelectPrimitive.Viewport)<{
  position?: "popper" | "item-aligned";
}>`
  padding: 0.25rem;

  ${(props) =>
    props.position === "popper" &&
    `
    height: var(--radix-select-trigger-height);
    width: 100%;
    min-width: var(--radix-select-trigger-width);
  `}
`;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <StyledContent ref={ref} position={position} {...props}>
      <SelectScrollUpButton />
      <StyledViewport position={position}>{children}</StyledViewport>
      <SelectScrollDownButton />
    </StyledContent>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const StyledLabel = styled(SelectPrimitive.Label)`
  padding: 0.375rem 0.5rem 0.375rem 2rem;
  font-weight: 600;
`;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ ...props }, ref) => <StyledLabel ref={ref} {...props} />);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const StyledItem = styled(SelectPrimitive.Item)`
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: 0.125rem;
  padding: 0.375rem 0.5rem 0.375rem 2rem;
  outline: none;

  &:focus {
    background: ${(props) => props.theme.colors.N100};
    color: ${(props) => props.theme.colors.N800};
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledItemIndicator = styled.span`
  position: absolute;
  left: 0.5rem;
  display: flex;
  height: 0.875rem;
  width: 0.875rem;
  align-items: center;
  justify-content: center;
`;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <StyledItem ref={ref} {...props}>
    <StyledItemIndicator>
      <SelectPrimitive.ItemIndicator>
        <Check style={{ height: "1rem", width: "1rem" }} />
      </SelectPrimitive.ItemIndicator>
    </StyledItemIndicator>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </StyledItem>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const StyledSeparator = styled(SelectPrimitive.Separator)`
  margin: 0.25rem -0.25rem;
  height: 1px;
  background: ${(props) => props.theme.colors.N100};
`;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ ...props }, ref) => <StyledSeparator ref={ref} {...props} />);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
