import { Box, Flex, Text, TextInput } from "flicket-ui";
import styled from "styled-components";
import { ToggleComponent } from "~/shared/components/ui/Toggle";
import { ExpoNamingFieldType } from "~/shared/graphql/sdk";
import { isCompulsoryField } from "../../lib/exhibitorField.helpers";

export const FieldSet = styled.fieldset`
  border: none;
  width: 100%;

  &:disabled {
    pointer-events: none;
  }
`;

export type FormValues = {
  id?: string;
  required: boolean;
  label: string;
};

const ExhibitorFieldOptions = ({
  selectedFieldType,
  formValues,
  onFormChange,
}: {
  formValues: FormValues;
  selectedFieldType: ExpoNamingFieldType | undefined;
  onFormChange: (form: Partial<FormValues>) => void;
}) => {
  return (
    <>
      <FieldSet hidden={selectedFieldType !== ExpoNamingFieldType.CustomText}>
        <Box marginBottom={2}>
          <Text variant="formLabel">Custom label</Text>
          <TextInput
            name="label"
            value={formValues.label}
            onChange={(e) =>
              onFormChange({
                label: e.currentTarget.value ?? "",
              })
            }
          />
        </Box>
      </FieldSet>

      <FieldSet
        hidden={selectedFieldType && isCompulsoryField(selectedFieldType)}
      >
        <Flex justifyContent="space-between" marginBottom={3}>
          <Flex maxW="80%" flexDir="column">
            <Text variant="formLabel">Required field</Text>
            <Text variant="small">
              Make it compulsory to fill in this field.
            </Text>
          </Flex>
          <Flex marginTop={1}>
            <ToggleComponent
              size="lg"
              value={formValues.required}
              onChange={() =>
                onFormChange({
                  required: !formValues.required,
                })
              }
            />
            {/* <Controller
              name="required"
              control={form.control}
              as={ToggleComponent}
              size="lg"
            /> */}
          </Flex>
        </Flex>
      </FieldSet>
    </>
  );
};

export default ExhibitorFieldOptions;
