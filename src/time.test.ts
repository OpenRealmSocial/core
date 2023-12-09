import { err, ok } from "neverthrow";
import { HubError } from "./errors";
import { OPENREALM_EPOCH, fromOpenrealmTime, toOpenrealmTime } from "./time";

describe("toOpenrealmTime", () => {
  test("returns seconds since 01/01/2021", () => {
    const time = Date.now();
    const openrealmTime = toOpenrealmTime(time)._unsafeUnwrap();
    expect(openrealmTime).toBeLessThan(2 ** 32 - 1); // uint32 max value
    expect(fromOpenrealmTime(openrealmTime)).toEqual(ok(Math.round(time / 1000) * 1000));
  });

  test("fails for time before 01/01/2021", () => {
    expect(toOpenrealmTime(OPENREALM_EPOCH - 1)).toEqual(
      err(new HubError("bad_request.invalid_param", "time must be after Openrealm epoch (01/01/2022)")),
    );
  });

  test("fails when openrealm time does not fit in uint32", () => {
    const time = (OPENREALM_EPOCH / 1000 + 2 ** 32) * 1000;
    expect(toOpenrealmTime(time)).toEqual(err(new HubError("bad_request.invalid_param", "time too far in future")));
  });
});

describe("fromOpenrealmTime", () => {
  test("returns ms since unix epoch", () => {
    const time = Date.now();
    const openrealmTime = toOpenrealmTime(time)._unsafeUnwrap();
    const roundedTime = Math.round(time / 1000) * 1000;
    expect(fromOpenrealmTime(openrealmTime)).toEqual(ok(roundedTime));
  });
});
