import { useQuery } from "@tanstack/react-query";
import { attendeeKeys } from "../attendee-form/hooks/attendees";
import { sdk } from "~/shared/graphql/client";
import { getQueryClient } from "~/shared/lib/getQueryClient";

export function useListRegistrations() {
  const query = useQuery({
    queryKey: attendeeKeys.list(),
    queryFn: () =>
      sdk()
        .listAttendees()
        .then((res) => {
          const queryClient = getQueryClient();

          // Populate attendee detail cache
          res.listAttendees.forEach((attendee) => {
            queryClient.setQueryData(
              attendeeKeys.detail(attendee.id),
              attendee,
            );
          });

          return res;
        }),
    select: (result) => result.listAttendees,
  });

  return query;
}
