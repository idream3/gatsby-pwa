import {
  OrderByDirection,
  type ExhibitorLoginMutationVariables,
} from "~/shared/graphql/sdk";
import { sdk } from "./client";

export type State<T> = [error?: Error, data?: T];

export const handlePromise = async <T>(
  promise: () => Promise<T>,
): Promise<State<T>> =>
  promise()
    .then((result) => {
      const res: State<T> = [undefined, result];
      return res;
    })
    .catch((error: Error) => {
      return [error, undefined];
    });

export const login = async (exhibitorId: string, exhibitorSecret: string) => {
  const input: ExhibitorLoginMutationVariables = {
    input: {
      exhibitorId,
      exhibitorSecret,
    },
  };

  return sdk().exhibitorLogin(input).then(exhibitorContext);
};

export const profile = async () => {
  try {
    const res = await sdk().exhibitorProfile();
    return res.exhibitorProfile;
  } catch (error) {
    console.log("profile error", error);
    return;
  }
};

export const exhibitorContext = async () => {
  return sdk()
    .exhibitorContext()
    .then((res) => res.exhibitorContext);
};

export const listExhibitorFields = async () => {
  try {
    const res = await sdk().expoListNamingFields();
    return res.expoListNamingFields;
  } catch (error) {
    console.log("listExhibitorFields error", error);
    return;
  }
};

export function getEvents(orgId: string) {
  const where = {
    startDate: new Date().toISOString(),
  };

  return sdk({ orgId, isServer: true })
    .events({
      where,
      orderBy: {
        startDate: OrderByDirection.Asc,
      },
    })
    .then((res) =>
      res.events?.edges
        ?.map(({ node }) => node)
        .filter((event) => !event.hiddenFromPublic),
    );
}
