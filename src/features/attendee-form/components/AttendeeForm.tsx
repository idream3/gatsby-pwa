"use client";

import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { type ChangeEvent } from "react";
import { toast } from "sonner";
import { getInputDescriptorForFieldType } from "~/features/exhibitor-fields/lib/exhibitorField.helpers";
import { attendeeStorage } from "~/features/offline/storage";
import { PrimaryButton } from "~/shared/components/ui/Button";
import { Stack } from "~/shared/components/ui/layout";
import { sdk } from "~/shared/graphql/client";
import {
  ExpoNamingFieldType,
  type CreateOrUpdateAttendeeMutation,
  type CreateOrUpdateAttendeeMutationVariables,
  type ExpoAttendeeInput,
  type ExpoListNamingFieldsQuery,
  type GetAttendeeQuery,
} from "~/shared/graphql/sdk";
import { useExhibitorContext } from "~/shared/hooks/useExhibitorContext.hook";
import { emptyPredicate } from "~/shared/lib/emptyPredicate";
import { getQueryClient } from "~/shared/lib/getQueryClient";
import { useAppStore } from "~/shared/providers/appStoreProvider";

type AttendeeFormProps = {
  exhibitorFields: ExpoListNamingFieldsQuery["expoListNamingFields"];
  onSuccess?: (data: CreateOrUpdateAttendeeMutation) => void;
  attendeeData?: GetAttendeeQuery["getAttendee"];
  /** If the attendee has not opted in to marketing on their ticket, show the promoter message
      in the form to encourage them to opt in. */
  showPromoterOptInToMarketingMessage?: boolean;
  ticketData: {
    ticketNumber?: string | null;
    ticketId?: string;
  };
};

export default function AttendeeForm({
  exhibitorFields,
  attendeeData,
  ticketData: { ticketNumber, ticketId },
  onSuccess,
  showPromoterOptInToMarketingMessage,
}: AttendeeFormProps) {
  const isOnline = useAppStore((state) => state.isOnline);
  const { user, event } = useExhibitorContext();
  const isEditing = !!attendeeData?.id;

  const getFieldLabel = (
    field: ExpoListNamingFieldsQuery["expoListNamingFields"][number],
  ) => {
    if (field.type === ExpoNamingFieldType.OptInToMarketing) {
      if (!showPromoterOptInToMarketingMessage) {
        return `By registering, I consent to receiving updates from ${user?.exhibitorName}`;
      }

      return `By registering, I consent to receiving updates from ${event?.title} and ${user?.exhibitorName}`;
    }

    return field.label;
  };

  const updateAttendeeMutation = useMutation({
    mutationFn: (values: ExpoAttendeeInput) => {
      const input: CreateOrUpdateAttendeeMutationVariables = {
        input: {
          ...values,
          ...(attendeeData ? { id: attendeeData.id } : {}),
          ticketNumber,
          ticketId,
        },
      };

      if (!input.input.customFields) {
        delete input.input.customFields;
      }

      return sdk().createOrUpdateAttendee(input);
    },
    mutationKey: ["updateAttendee"],
    onSuccess: (data) => {
      const client = getQueryClient();

      void client.invalidateQueries({
        queryKey: ["attendee", data.createOrUpdateAttendee.id],
      });

      void client.invalidateQueries({
        queryKey: ["registrations"],
      });

      toast.success("Attendee details saved");

      onSuccess?.(data);
    },
  });

  const fieldValues = getDefaultValuesFromFields(exhibitorFields, attendeeData);
  const form = useForm({
    defaultValues: {
      exhibitorFields: fieldValues,
    },
    onSubmit: async ({ value }) => {
      const input = value.exhibitorFields.reduce((acc, field) => {
        // Skip fields without a value or empty string
        if (emptyPredicate(field.value) || field.value === "") return acc;

        const isCustom = field.type === ExpoNamingFieldType.CustomText;
        if (!isCustom) {
          return {
            ...acc,
            [field.name]: field.value,
          };
        }
        return {
          ...acc,
          customFields: (acc.customFields ?? []).concat({
            id: field.id,
            fieldName: field.name,
            fieldValue: field.value,
          }),
        };
      }, {} as ExpoAttendeeInput);

      if (isOnline) {
        return updateAttendeeMutation.mutate(input);
      } else {
        await attendeeStorage.set(input.email, input).catch(console.error);
        toast.success("Attendee details saved");
      }
    },
    validatorAdapter: zodValidator(),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <Stack gap={3} direction="vertical">
        <form.Field name="exhibitorFields" mode="array">
          {(field) => {
            return (
              <>
                {field.state.value.map((staticSubField, i) => {
                  return (
                    <form.Field key={i} name={`exhibitorFields[${i}].value`}>
                      {(subField) => {
                        const input = getInputDescriptorForFieldType(
                          staticSubField.type,
                        );

                        const onChangeProp = (
                          e: ChangeEvent<HTMLInputElement>,
                        ) => {
                          if (input.valueProp === "checked") {
                            return subField.handleChange(e.target.checked);
                          }

                          return subField.handleChange(e.target.value);
                        };

                        const value = {
                          [input.valueProp]: subField.state.value,
                        };

                        return (
                          // @ts-expect-error wip
                          <input.Component
                            {...input.props}
                            label={`${getFieldLabel(staticSubField)}${staticSubField.required ? " *" : ""
                              }`}
                            name={staticSubField.name}
                            {...value}
                            // TODO: Add required prop to flicket-ui
                            required={staticSubField.required}
                            onChange={onChangeProp}
                          />
                        );
                      }}
                    </form.Field>
                  );
                })}
              </>
            );
          }}
        </form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <PrimaryButton type="submit" disabled={!canSubmit}>
              {isSubmitting
                ? "..."
                : isEditing
                  ? "Save changes"
                  : "Log attendee"}
            </PrimaryButton>
          )}
        </form.Subscribe>
      </Stack>
    </form>
  );
}

function getDefaultValuesFromFields(
  fields: AttendeeFormProps["exhibitorFields"] = [],
  attendeeData?: AttendeeFormProps["attendeeData"],
) {
  return fields
    .map((field) => {
      // @ts-expect-error field name mapping to attendee data
      let fieldValue = attendeeData?.[field.name] ?? "";

      // If it's the opt-in field, and they haven't previously answered, default to true.
      if (
        field.type === ExpoNamingFieldType.OptInToMarketing &&
        !attendeeData?.optInToMarketing
      ) {
        fieldValue = true;
      }

      if (field.type === ExpoNamingFieldType.CustomText) {
        fieldValue = attendeeData?.customFields?.find(
          (customField) => customField.fieldName === field.name,
        )?.fieldValue;
      }

      return {
        ...field,
        value: fieldValue,
      };
    }, {}) // Place OptInToMarketing last
    ?.sort((a, b) =>
      a.type === ExpoNamingFieldType.OptInToMarketing ? 1 : -1,
    );
}
