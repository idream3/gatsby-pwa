import { Text } from "flicket-ui";
import { useExhibitorContext } from "~/shared/hooks/useExhibitorContext.hook";
export const EventHeader = () => {
  const { event } = useExhibitorContext();

  if (!event) return null;

  const eventDateString = (async () => {
    const {
      startDate,
      endDate,
      venue: { locale, timezone },
    } = event;
    if (!startDate || !endDate || !locale || !timezone) return null;
    // TODO get flicket utils working and use that
    const start = new Date(startDate);
    const end = new Date(endDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: timezone,
      timeZoneName: "short",
    };
    const formattedStart = start.toLocaleDateString(locale, options);
    const formattedEnd = end.toLocaleDateString(locale, options);
    return `${formattedStart} - ${formattedEnd}`;
  })();

  return (
    <>
      <Text color="white" variant="header.S">
        {event.title}
      </Text>
      <Text color="white" variant="regular">
        {eventDateString}
      </Text>
    </>
  );
};
