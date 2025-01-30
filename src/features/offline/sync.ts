"use client";

import { sdk } from "~/shared/graphql/client";
import { attendeeStorage } from "./storage";

export async function hasOfflineData() {
  const attendees = await attendeeStorage.values();

  return attendees?.length > 0;
}

export async function sync() {
  const attendees = await attendeeStorage.values();

  console.log("Syncing attendees", attendees);
  try {
    await sdk().bulkCreateOrUpdateAttendee({ input: { attendees } });
    await attendeeStorage.clear();
  } catch (error) {
    console.error("Error syncing attendees", error);
  }
}
