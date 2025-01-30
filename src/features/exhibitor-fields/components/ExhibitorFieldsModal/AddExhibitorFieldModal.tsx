"use client";

import { Box } from "@radix-ui/themes";
import {
  type ExpoListNamingFieldsQuery,
  type ExpoNamingFieldInput,
  ExpoNamingFieldType,
} from "~/shared/graphql/sdk";
import {
  getIconForFieldType,
  getLabelForFieldType,
} from "~/features/exhibitor-fields/lib/exhibitorField.helpers";
import Modal from "~/shared/components/ui/Modal/Modal";
import { useState } from "react";
import { sdk } from "~/shared/graphql/client";
import { getQueryClient } from "~/shared/lib/getQueryClient";
import { useMutation } from "@tanstack/react-query";
import { List } from "~/shared/components/ui/List/List";
import { PrimaryButton, SecondaryButton } from "~/shared/components/ui/Button";
import ExhibitorFieldOptions, {
  type FormValues,
} from "./ExhibitorFieldOptions";
import { useExhibitorContext } from "~/shared/hooks/useExhibitorContext.hook";

const defaultFormValues = {
  id: undefined,
  required: false,
  label: "",
};

export default function AddExhibitorFieldModal({
  isOpen,
  close,
  editingField,
  exhibitorsFields = [],
}: {
  isOpen: boolean;
  close: () => void;
  editingField:
    | ExpoListNamingFieldsQuery["expoListNamingFields"][number]
    | undefined;
  exhibitorsFields: ExpoListNamingFieldsQuery["expoListNamingFields"];
}) {
  const { user } = useExhibitorContext();
  const [selectedField, setSelectedField] = useState<
    ExpoNamingFieldType | undefined
  >(editingField?.type);

  const [formValues, setFormValues] = useState<FormValues>({
    ...defaultFormValues,
    ...editingField,
  });

  const addFieldMutation = useMutation({
    mutationFn: (fieldName: ExpoNamingFieldType) => {
      const input: ExpoNamingFieldInput = {
        id: formValues.id,
        type: fieldName,
        label: formValues.label?.trim() || getLabelForFieldType(fieldName),
        required: formValues.required,
        orderKey: exhibitorsFields?.length,
      };

      return sdk().expoCreateOrUpdateNamingField({ input });
    },
    onSuccess: async () => {
      await getQueryClient().invalidateQueries({
        queryKey: ["exhibitor-naming-fields"],
      });
      close();
      setSelectedField(undefined);
      setFormValues(defaultFormValues);
    },
  });

  const fieldsByType = exhibitorsFields?.map((f) => f.type);

  function handleAddField(fieldName: ExpoNamingFieldType) {
    addFieldMutation.mutate(fieldName);
  }

  const hasSelectedField = !!selectedField;
  const availableFields = Object.values(ExpoNamingFieldType).filter(
    (fieldName) =>
      (!!user?.allowCustomQuestions &&
        fieldName === ExpoNamingFieldType.CustomText) ||
      !fieldsByType?.includes(fieldName),
  );

  return (
    <>
      <Modal isOpen={isOpen} close={close} small>
        <Modal.Header
          onBack={
            hasSelectedField ? () => setSelectedField(undefined) : undefined
          }
        >
          {hasSelectedField
            ? getLabelForFieldType(selectedField)
            : "Add attendee field"}
        </Modal.Header>
        <Modal.Content>
          <Box hidden={hasSelectedField}>
            <List>
              {availableFields.map((fieldName) => (
                <List.ArrowItem
                  key={fieldName}
                  onClick={() => setSelectedField(fieldName)}
                  leadingIcon={getIconForFieldType(fieldName)}
                >
                  {getLabelForFieldType(fieldName)}
                </List.ArrowItem>
              ))}
            </List>
          </Box>

          <Box hidden={!hasSelectedField}>
            <ExhibitorFieldOptions
              selectedFieldType={selectedField}
              formValues={formValues}
              onFormChange={(values) =>
                setFormValues((state) => ({ ...state, ...values }))
              }
            />
          </Box>
        </Modal.Content>
        <Modal.Footer>
          {!hasSelectedField && (
            <SecondaryButton onClick={close}>Cancel</SecondaryButton>
          )}
          {hasSelectedField && (
            <PrimaryButton onClick={() => handleAddField(selectedField)}>
              Add field
            </PrimaryButton>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
