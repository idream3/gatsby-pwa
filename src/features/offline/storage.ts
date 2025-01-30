import { type ExpoAttendeeInput } from "~/shared/graphql/sdk";
import { createStorage } from "flicket-ui";

type AtteendeeStorageInput = ExpoAttendeeInput;

export const attendeeStorage =
  createStorage<AtteendeeStorageInput>("attendees");
