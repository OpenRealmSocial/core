import { err, ok } from "neverthrow";
import { HubError, HubResult } from "./errors";

export const OPENREALM_EPOCH = 1609459200000; // January 1, 2021 UTC

/**
 * Get the current Openrealm time.
 * @returns seconds since the Openrealm Epoch
 */
export const getOpenrealmTime = (): HubResult<number> => {
  return toOpenrealmTime(Date.now());
};

/**
 * Converts from a Unix to Openrealm timestamp.
 * @param time unix milliseconds
 * @returns seconds since the Openrealm Epoch
 */
export const toOpenrealmTime = (time: number): HubResult<number> => {
  if (time < OPENREALM_EPOCH) {
    return err(new HubError("bad_request.invalid_param", "time must be after Openrealm epoch (01/01/2022)"));
  }
  const secondsSinceEpoch = Math.round((time - OPENREALM_EPOCH) / 1000);
  if (secondsSinceEpoch > 2 ** 32 - 1) {
    return err(new HubError("bad_request.invalid_param", "time too far in future"));
  }
  return ok(secondsSinceEpoch);
};

/**
 * Converts from a Openrealm to Unix timestamp.
 * @param time seconds since the Openrealm Epoch
 * @returns unix milliseconds
 */
export const fromOpenrealmTime = (time: number): HubResult<number> => {
  return ok(time * 1000 + OPENREALM_EPOCH);
};

/** Extracts the timestamp from an event ID. */
export const extractEventTimestamp = (eventId: number): number => {
  const binaryEventId = eventId.toString(2);
  const SEQUENCE_BITS = 12;
  const binaryTimestamp = binaryEventId.slice(0, binaryEventId.length - SEQUENCE_BITS);
  return parseInt(binaryTimestamp, 2) + OPENREALM_EPOCH;
};
