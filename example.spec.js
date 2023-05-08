import { expect, test } from "vitest";
import { add } from "./example.js";

test("example", () => {

  // We can add zero
  expect(add(0, 0)).toBe(0);

  // We can add the same number
  expect(add(1, 1)).toBe(2);
  expect(add(2, 2)).toBe(4);
  expect(add(3, 3)).toBe(6);

  // We can add different positive numbers
  expect(add(0, 1)).toBe(1);
  expect(add(1, 2)).toBe(3);
  expect(add(2, 3)).toBe(5);

  // We can add different negative numbers
  expect(add(-0, -1)).toBe(-1);
  expect(add(-1, -2)).toBe(-3);
  expect(add(-2, -3)).toBe(-5);
});


