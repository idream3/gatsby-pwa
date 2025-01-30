

import { Box, Text, system } from "flicket-ui";
import { type RefObject } from "react";
import styled, { css } from "styled-components";

export const dividerCss = `
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--divider-color);
  z-index: 1;
`;

export const negativeMargin = css`
  margin-left: -${(p) => p.theme.space[1]}px;
  margin-right: -${(p) => p.theme.space[1]}px;
  padding-left: ${(p) => p.theme.space[1]}px;
  padding-right: ${(p) => p.theme.space[1]}px;
`;

export const StyledItem = styled(Text).attrs({
  variant: "regular",
  as: "li",
})<{
  ref: RefObject<HTMLDivElement>;
  $smallPadding?: boolean;
  $noTopBorder?: boolean;
  $noBottomBorder?: boolean;
}>`
  --divider-color: ${(p) => p.theme.colors.N200};

  display: flex;
  align-items: center;
  position: relative;
  padding: ${(p) => (p.$smallPadding ? p.theme.space[1] : p.theme.space[2])}px 0;

  margin-top: -1px;

  ${(p) =>
    p.$noTopBorder
      ? null
      : `
      &:first-of-type::before {
        ${dividerCss}
        top: 0;
      }

      &:has(:focus-visible):before {
        display: none;
      }
  `}

  ${(p) =>
    p.$noBottomBorder
      ? null
      : `
      &::after {
        ${dividerCss}
        bottom: 0;
      }
  `}

  &:has(+ li > button:focus-visible):after {
    display: none;
  }

  &:has(:focus-visible):after {
    display: none;
  }

  && {
    ${system}
  }
`;

export const StyledButtonItem = styled(Box)<{ $smallPadding?: boolean }>`
  --hover-color: ${(p) => p.theme.colors.N100};
  --focus-color: ${(p) => p.theme.colors.N800};

  flex: 1;
  padding: ${(p) => (p.$smallPadding ? p.theme.space[1] : p.theme.space[2])}px 0;
  border-radius: ${(p) => p.theme.radii.md};

  ${negativeMargin}

  z-index: 2;

  &:hover {
    background: var(--hover-color);
  }

  &&:focus-visible {
    outline: 2px solid var(--focus-color);
    z-index: 3;
  }

  && {
    ${system}
  }
`;
