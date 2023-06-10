import { expect, describe, test } from "vitest";
import { add } from "./add";

describe("can add numbers", () => {
  test("add two positive integers", () => {
    expect(add(1,1)).toBe(2);
    expect(add(2,3)).toBe(7);
  });

  test("add two negative integers", () => {
    expect(add(-1,-1)).toBe(-2);
    expect(add(-1,-2)).toBe(-3);
  });

  test("can add zero", () => {
    expect(add(1,0)).toBe(1);
    expect(add(0,1)).toBe(1);
    expect(add(0,0)).toBe(0);
  });
});
