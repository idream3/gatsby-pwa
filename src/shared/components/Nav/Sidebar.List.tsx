import * as React from "react";

import { Text } from "~/shared/components/ui/Text";
import { Stack } from "~/shared/components/ui/layout";
import { Li } from "./Sidebar.styles";
import Icon from "../ui/Icon";
import {Link} from "gatsby";

export function List({
  title,
  hide = false,
  children,
}: {
  title: string;
  hide?: boolean;
  children?: React.ReactNode;
}) {
  if (hide) return null;

  return (
    <Stack gap={0} direction="vertical">
      <Text p={1} variant="header.Minor">
        {title}
      </Text>
      {children}
    </Stack>
  );
}

export function ListItem({
  href,
  label,
  icon,
  onClick,
  hide = false,
}: {
  href?: string;
  label: string;
  icon: JSX.Element;
  onClick?: () => void;
  hide?: boolean;
}) {
  if (hide) return null;

  const Content = (
    <Stack gap={2} direction="horizontal" alignItems="center">
      <Icon color="N800">{icon}</Icon>
      <Text variant="regular">{label}</Text>
    </Stack>
  );

  if (href) {
    return (
      <Li onClick={onClick}>
        <Link to={href}>{Content}</Link>
      </Li>
    );
  }
  return <Li onClick={onClick}>{Content}</Li>;
}
