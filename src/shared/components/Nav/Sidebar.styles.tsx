

import { motion } from "motion/react";
import { Box } from "~/shared/components/ui/layout";
import styled from "styled-components";

const StyledSidebar = styled(Box)`
  position: fixed;
  z-index: 10;
  inset: 56px 0 0 0;
  background-color: white;
  border-right: 1px solid ${(p) => p.theme.colors.N200};
  box-shadow: ${(p) => p.theme.shadows.container};
`;

export const MotionSidebar = motion.create(StyledSidebar);

export const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  padding-inline: 8px;
  padding-block: 12px;
  border-radius: 8px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active {
    background-color: ${(p) => p.theme.colors.N100};
  }
`;
