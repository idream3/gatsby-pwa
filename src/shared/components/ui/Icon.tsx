

import React, { type ComponentProps, type FC, forwardRef } from "react";
import { Box, system, type SystemProps } from "flicket-ui";
import styled from "styled-components";

export const StyledIcon = styled(Box) <SystemProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  svg {
    vertical-align: middle;
  }

  ${system}
`;
export interface IconProps extends SystemProps<ComponentProps<"div">> {
  as?: string | JSX.Element;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  // color?: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/display-name
export const Icon: FC<IconProps> = forwardRef(({ children, ...props }, ref) => {
  function getAs(): string | JSX.Element {
    switch (true) {
      case props.as !== undefined:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return props.as;
      case props.href !== undefined:
        return "a";
      case props.onClick !== undefined:
        return "button";
      default:
        return "div";
    }
  }

  const asComponent = getAs();

  return (
    <StyledIcon
      className="icon"
      ref={ref}
      aria-hidden
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      as={asComponent}
      {...(asComponent === "button" && { type: "button" })}
      // color={color}
      {...props}
    >
      {children}
    </StyledIcon>
  );
});

export default Icon;
