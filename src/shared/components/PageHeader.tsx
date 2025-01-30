

import { Text } from "./ui/Text";
import { Stack } from "~/shared/components/ui/layout";
import { Skeleton } from "@radix-ui/themes";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: React.ReactNode;
}) {
  return (
    <Stack direction="vertical" gap={1} mb={2}>
      <Text variant="header.S">{title}</Text>
      {subtitle && <Text variant="small">{subtitle}</Text>}
      {/* <Divider mt={1} /> */}
    </Stack>
  );
}



function PageHeaderSkeleton() {

  return (
    <Stack direction="vertical" gap={1} mb={2}>
      <Text variant="header.S"><Skeleton loading={true}>Dummy text for load</Skeleton></Text>
      <Text variant="small"><Skeleton loading={true}>Dummy text for load, Dummy text for load, Dummy text for load, Dummy text for load</Skeleton></Text>
    </Stack>
  )
}

PageHeader.Skeleton = PageHeaderSkeleton;
