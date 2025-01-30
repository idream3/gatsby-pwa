import { useQuery } from "@tanstack/react-query";
import { sdk } from "~/shared/graphql/client";
import { attendeeKeys } from "./attendees";

export function useGetAttendeeQuery(attendeeId: string) {
  const query = useQuery({
    queryKey: attendeeKeys.detail(attendeeId),
    queryFn: () => sdk().getAttendee({ id: attendeeId }),
    select: (result) => result.getAttendee,
    enabled: !!attendeeId && attendeeId !== "new",
  });

  return query;
}
