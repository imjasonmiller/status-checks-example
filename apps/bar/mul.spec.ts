import { expect, describe, test } from "vitest";
import { mul } from "./mul";

describe("can multiply numbers", () => {
  test("multiply two positive integers", () => {
    expect(mul(1, 1)).toBe(1);
    expect(mul(1, 2)).toBe(2);
    expect(mul(2, 1)).toBe(2);
    expect(mul(42, 9_000)).toBe(378_000);
    expect(mul(9_000, 42)).toBe(378_000);
  });

  test("multiply two negative integers", () => {
    expect(mul(-1, -1)).toBe(1);
    expect(mul(-1, -2)).toBe(2);
  });

  test("multiple a positive and a negative integer", () => {});

  test("multiply by zero", () => {
    expect(mul(1, 0)).toBe(0);
    expect(mul(0, 1)).toBe(0);
    expect(mul(0, 0)).toBe(0);
  });
});
