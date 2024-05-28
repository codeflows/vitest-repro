import { describe, expect, it } from "vitest";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fail = () => {
  throw new Error("fail");
};

describe.concurrent("Concurrency test", () => {
  it("first", async () => {
    await expect(delay(1000).then(fail)).rejects.toThrowError(
      "UNEXPECTED VALUE"
    );
  });

  it("second", async () => {
    await expect(delay(0).then(fail)).rejects.toThrowError("fail");
  });
});
