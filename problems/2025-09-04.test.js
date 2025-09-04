import { test, expect } from "vitest";
import { Go } from "./2025-09-04";

test("provided dataset #1", () => {
  expect(Go([3, 4, -1, 1])).toBe(2);
});

test("provided dataset #2", () => {
  expect(Go([1, 2, 0])).toBe(3);
});

test("other dataset #3", () => {
  expect(Go([-1, -2, -3, 0, -1, -2, -3, 0, 1, 2, 3, 7, 8, 9, 4])).toBe(5);
});

test("other dataset #4", () => {
  expect(Go([3, 1, 1, 1, 1, 2, 0, -1])).toBe(4);
});

test("other dataset #5", () => {
  expect(Go([1])).toBe(2);
});
