// app/routes/index.tsx
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";

export const graphUrl = process.env.GATSBY_GRAPH_URL!;

const client = (
  orgId: string | undefined = undefined,
  host: string | undefined = undefined,
  recaptchaToken: string | undefined = undefined,
  transactionId: string | undefined = undefined,
) =>
  new GraphQLClient(graphUrl, {
    credentials: "include",
    headers: {
      "user-token": process.env.GATSBY_VERCEL_USER_TOKEN!,
      ...(orgId
        ? {
          "Flicket-Org-Id": orgId,
        }
        : {}),
      ...(host
        ? {
          origin: host,
        }
        : {}),
      ...(recaptchaToken ? { "g-recaptcha-response": recaptchaToken } : {}),
      ...(transactionId ? { "transaction-id": transactionId } : {}),
    },
  });

export interface SDKOptions {
  orgId?: string;
  host?: string;
  key?: string;
  value?: string;
  recaptchaToken?: string;
  isServer?: boolean;
  serverCookie?: string;
}

export const sdk = ({
  orgId,
  host,
  key,
  value,
  recaptchaToken,
  isServer = false,
  serverCookie, // This is just the regular cookie, but its called server cookie since it's only required to be passed explicitly for server-side calls.
}: SDKOptions = {}) => {
  const gqlClient = client(orgId, host, recaptchaToken);

  if (key && value) {
    gqlClient.setHeader(key, value);
  }

  // Hack to get through the Firewall when calling the sdk from a server function.
  // TODO: investigate a better way to do this and remove.
  if (isServer) {
    gqlClient.setHeader("user-agent", "Mozilla");

    if (serverCookie) {
      gqlClient.setHeader("cookie", serverCookie);
    }
  }

  return getSdk(gqlClient);
};
