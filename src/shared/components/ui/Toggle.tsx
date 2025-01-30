import { type HTMLProps } from "react";
import { Box } from "flicket-ui";

import styled, { type DefaultTheme } from "styled-components";

interface IToggle extends HTMLProps<HTMLInputElement> {
  h?: number;
  w?: number;
  gutter?: number;
  on?: keyof DefaultTheme["colors"];
  off?: keyof DefaultTheme["colors"];
  $isChecked: boolean;
  $size?: "md" | "lg";
}

const size = (h: number, gutter: number) => `${h - gutter * 2}px`;

export const Toggle = styled(Box).attrs({
  as: "input",
  type: "checkbox",
  borderRadius: "full",
}) <IToggle>`
  appearance: none;
  position: relative;

  width: ${(p) => `${p.$size === "lg" ? 56 : (p.w ?? 28)}px`};
  height: ${(p) => `${p.$size === "lg" ? 30 : (p.h ?? 16)}px`};

  background-color: ${(p) =>
    p.$isChecked
      ? p.theme.colors[p.on ?? "N800"]
      : p.theme.colors[p.off ?? "N200"]};
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  cursor: pointer;

  &:after {
    content: "";
    border-radius: ${(p) => p.theme.radii.full};
    height: ${(p) =>
    p.$size === "lg" ? "26px" : size(p.h ?? 16, p.gutter ?? 2)};
    width: ${(p) =>
    p.$size === "lg" ? "26px" : size(p.h ?? 16, p.gutter ?? 2)};
    background-color: white;
    position: absolute;
    top: ${(p) => `${p.gutter ?? 2}px`};
    left: ${(p) => `${p.gutter ?? 2}px`};
    transform: ${(p) => (p.$isChecked ? "translateX(100%)" : "translateX(0)")};
    transition: all 0.2s ease;
  }

  &:checked {
    &:after {
      transform: translateY("100%");
      transition: all 0.2s ease;
    }
  }
`;

export function ToggleComponent({
  value,
  onChange,
  size,
}: {
  value?: boolean;
  onChange?: (val: boolean) => void;
  size?: IToggle["$size"];
}) {
  function handleClick() {
    onChange?.(!value);
  }
  return <Toggle onClick={handleClick} $isChecked={!!value} $size={size} />;
}
