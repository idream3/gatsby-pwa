import {
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
  MutationCache
} from "@tanstack/react-query";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { attendeeKeys } from "~/features/attendee-form/hooks/attendees";
import { sdk } from "../graphql/client";


function makeQueryClient() {
  const qc = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchInterval: false,
        staleTime: 60 * 1000,
        gcTime: Infinity,
        retry: 0,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
    // configure global cache callbacks to show toast notifications
    mutationCache: new MutationCache({
      onSuccess: (data) => {
        console.log("Mutation onSuccess", data);
        // toast.success(data.message)
      },
      onError: (error) => {
        console.log("Mutation onError", error.message);

        // toast.error(error.message)
      },
    }),
  });

  // we need a default mutation function so that paused mutations can resume after a page reload
  qc.setMutationDefaults(attendeeKeys.all(), {
    mutationFn: async (attendeee) => {
      // to avoid clashes with our optimistic update when an offline mutation continues
      // await getQueryClient().cancelQueries({ queryKey: attendeeKeys.detail(attendeee.id) })
      // return sdk().createOrUpdateAttendee(attendeee);
    },
  })

  return qc;
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client

    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
