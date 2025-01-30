import { useQuery } from "@tanstack/react-query";
import { sdk } from "~/shared/graphql/client";
import { attendeeKeys } from './attendees';

export function useAttendeeTicketQuery(ticketNumber: string) {
  const query = useQuery({
    queryKey: attendeeKeys.ticket(ticketNumber),
    queryFn: () => sdk().getAttendeeTicket({ ticketNumber }),
    select: (result) => result.getAttendeeTicket,
  });

  return query;
}
