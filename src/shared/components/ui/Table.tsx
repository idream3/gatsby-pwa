import { type SystemProps, system } from "flicket-ui";
import styled from "styled-components";

export const hoverExcludingChildHover = `&:not(:has(.hover-child:hover)):hover`;

export const StyledTable = styled.table`
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border: none;
  color: #000000;

  tr,
  th {
    border-bottom-width: 1px;
    border-bottom-color: #e3e3e3;
    border-bottom-style: solid;
  }
`;

export const Tr = styled.tr<SystemProps>`
  cursor: pointer;
  transition: all 0.12s ease-out;

  ${hoverExcludingChildHover} {
    background-color: ${(p) => p.theme.colors.N100};
  }

  ${system}
`;

export const Td = styled.td<SystemProps>`
  padding: 6px 0px;
  display: flex;

  &:last-of-type {
    display: table-cell;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: table-cell;
    padding: 12px;
  }

  ${system}
`;
