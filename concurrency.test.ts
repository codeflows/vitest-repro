import { describe, expect, it } from "vitest";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe.concurrent("Concurrency test", () => {
  it("first", async () => {
    await expect(delay(100).then(() => "ok")).resolves.toEqual("not ok!");
  });

  it("second", async () => {
    expect("ok").toEqual("ok");
  });
});
