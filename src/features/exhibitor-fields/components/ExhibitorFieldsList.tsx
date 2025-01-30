"use client";

import { Skeleton } from "@radix-ui/themes";
import {
  type ExpoListNamingFieldsQuery,
  ExpoNamingFieldType,
} from "~/shared/graphql/sdk";
import { Trash } from "@phosphor-icons/react";
import { StyledTable, Td, Tr } from "~/shared/components/ui/Table";
import { Stack, Text, Box } from "flicket-ui";
import Icon from "~/shared/components/ui/Icon";
import {
  getIconForFieldType,
  isCompulsoryField,
} from "~/features/exhibitor-fields/lib/exhibitorField.helpers";
import { Flex } from "~/shared/components/ui/layout";

export default function ExhibitorFieldsList({
  fields = [],
  error,
  isLoading,
  onEdit,
  onDelete,
}: {
  isLoading: boolean;
  error: Error | null;
  fields: ExpoListNamingFieldsQuery["expoListNamingFields"] | undefined;
  onEdit: (
    field: ExpoListNamingFieldsQuery["expoListNamingFields"][number],
  ) => void;
  onDelete: (id: string) => void;
}) {
  if (isLoading) {
    return <ExhibitorFieldsListSkeleton count={3} />;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <Stack gap={3} direction="vertical">
      {!fields?.length && <Text>No fields</Text>}

      <StyledTable>
        <tbody>
          {fields
            .sort((a, b) => (a.orderKey > b.orderKey ? 1 : -1))
            .map((field) => (
              <Tr
                key={field.id}
                cursor="pointer"
                onClick={() =>
                  field.type !== ExpoNamingFieldType.Email && onEdit(field)
                }
                css={`
                  height: 64px;
                  &:first-of-type {
                    border-top-width: 1px;
                    border-top-color: #e3e3e3;
                    border-top-style: solid;
                  }
                `}
              >
                <Td>
                  <Flex flex={1} alignItems="center">
                    <Stack gap={1} flex={1}>
                      <Icon color="N800">
                        {getIconForFieldType(field.type, { size: 20 })}
                      </Icon>
                      <Text variant="regular">{field.label}</Text>
                    </Stack>

                    <Stack alignSelf="flex-end" gap={2}>
                      <Text variant="small">
                        {field.required ? "Required" : "Optional"}
                      </Text>

                      <Box
                        opacity={isCompulsoryField(field.type) ? 0.3 : 1}
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation();
                          if (!isCompulsoryField(field.type)) {
                            onDelete(field.id);
                          }
                        }}
                      >
                        <Trash size={20} />
                      </Box>
                    </Stack>
                  </Flex>
                </Td>
              </Tr>
            ))}
        </tbody>
      </StyledTable>
    </Stack>
  );
}

function ExhibitorFieldsListSkeleton({ count = 3 }: { count: number }) {
  const List = Object.values(ExpoNamingFieldType)
    .slice(0, count)
    .map((fieldName) => (
      <Text variant="regular" key={fieldName}>
        <Skeleton loading={true}>{fieldName}</Skeleton>
      </Text>
    ));

  return List;
}
