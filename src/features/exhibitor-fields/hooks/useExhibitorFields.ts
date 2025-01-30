import { useMutation, useQuery } from "@tanstack/react-query";
import { sdk } from "~/shared/graphql/client";
import { ExpoNamingFieldType } from "~/shared/graphql/sdk";
import { getQueryClient } from "~/shared/lib/getQueryClient";

export const QUERY_KEY = "exhibitor-naming-fields";

export function useExhibitorFieldsQuery() {
  const query = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      sdk()
        .expoListNamingFields()
        .then((data) => {
          // Sort list so that email is first
          const email = data.expoListNamingFields.filter(
            (field) => field.type === ExpoNamingFieldType.Email,
          );
          const withoutEmail = data.expoListNamingFields.filter(
            (field) => field.type !== ExpoNamingFieldType.Email,
          );

          console.log({ email, withoutEmail });
          return [...email, ...withoutEmail];
        }),
  });

  return query;
}

export function invalidateQuery() {
  return getQueryClient().invalidateQueries({
    queryKey: [QUERY_KEY],
  });
}

export function useDeleteExhibitorFieldMutation() {
  const mutation = useMutation({
    mutationFn: (fieldId: string) => {
      return sdk().expoDeleteNamingField({ id: fieldId });
    },
    onSuccess: invalidateQuery,
  });

  return mutation;
}
