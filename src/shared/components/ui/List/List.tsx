

import React, {
  type ReactNode,
  type MouseEventHandler,
  type RefObject,
} from "react";
import { pick, omit } from "@styled-system/props";
import { type SystemProps } from "flicket-ui";
import { CaretRight, IconContext, type IconProps } from "@phosphor-icons/react";
import { StyledButtonItem, StyledItem } from "./List.styles";
import { Box, Stack } from "~/shared/components/ui/layout";

const ICON_SIZE: IconProps["size"] = "24";
const ICON_WEIGHT: IconProps["weight"] = "regular";

interface BaseProps extends SystemProps {
  children: ReactNode;
  className?: string;
}

export const List = ({ children, ...props }: BaseProps) => {
  return (
    <IconContext.Provider
      value={{
        size: ICON_SIZE,
        weight: ICON_WEIGHT,
      }}
    >
      <Stack
        gap={0}
        direction="vertical"
        as="ul"
        className={props.className}
        {...pick(props)}
      >
        {children}
      </Stack>
    </IconContext.Provider>
  );
};

interface BaseItemProps extends BaseProps {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  smallPadding?: boolean;
  noTopBorder?: boolean;
  noBottomBorder?: boolean;
  InternalWrapper?: (props: BaseProps) => JSX.Element;
  ref: RefObject<HTMLDivElement>;
}

const BaseItem = (props: BaseItemProps) => {
  const {
    leadingIcon,
    trailingIcon,
    smallPadding,
    noTopBorder,
    noBottomBorder,
    InternalWrapper,
    children,
    ref,
    ...rest
  } = props;

  const Wrapper = InternalWrapper ?? React.Fragment;

  return (
    <StyledItem
      ref={ref}
      {...rest}
      $smallPadding={smallPadding}
      $noTopBorder={noTopBorder}
      $noBottomBorder={noBottomBorder}
    >
      <Wrapper>
        <Stack flex={1} alignItems={"center"} gap={1} width="100%">
          {leadingIcon}
          <Box flex="1" width="100%">
            {children}
          </Box>
          {trailingIcon}
        </Stack>
      </Wrapper>
    </StyledItem>
  );
};

BaseItem.displayName = "BaseItem";

interface ButtonItemProps extends Omit<BaseItemProps, "InternalWrapper"> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonItem = (props: ButtonItemProps) => {
  const { children, onClick, smallPadding, ref, ...rest } = props;

  return (
    <BaseItem
      ref={ref}
      padding={0}
      mx={0}
      InternalWrapper={({ children }) => {
        return (
          <StyledButtonItem
            as="button"
            type="button"
            onClick={onClick}
            $smallPadding={smallPadding}
            {...pick(rest)}
          >
            {children}
          </StyledButtonItem>
        );
      }}
      {...omit(rest)}
    >
      {children}
    </BaseItem>
  );
};

ButtonItem.displayName = "ButtonItem";

function ArrowItem(props: ButtonItemProps) {
  const { ...rest } = props;

  return <ButtonItem trailingIcon={<CaretRight />} {...rest} />;
}

type ColumnProps = BaseItemProps &
  SystemProps<{
    onClick?: MouseEventHandler<HTMLElement>;
    noTopBorder?: boolean;
    noBottomBorder?: boolean;
    smallPadding?: boolean;
    children: ReactNode;
    gap?: number;
  }>;

const ColumnItems = (props: ColumnProps) => {
  const {
    children,
    noTopBorder,
    noBottomBorder,
    smallPadding,
    gap,
    ref,
    ...rest
  } = props;

  return (
    <StyledItem
      as="ul"
      my={0}
      ref={ref}
      css={{ gap: gap ?? 16 }}
      width={1}
      alignItems="center"
      $noTopBorder={noTopBorder}
      $noBottomBorder={noBottomBorder}
      $smallPadding={smallPadding}
      {...rest}
    >
      {children}
    </StyledItem>
  );
};

ColumnItems.displayName = "ColumnItems";

const Column = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & SystemProps) => {
  return (
    <Box
      display="flex"
      flexGrow={1}
      alignItems="center"
      className={className}
      {...pick(props)}
    >
      {children}
    </Box>
  );
};

List.BaseItem = BaseItem;
List.Item = ButtonItem;
List.ArrowItem = ArrowItem;
List.ColumnItems = ColumnItems;
List.Column = Column;
