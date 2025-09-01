import { test, expect } from "vitest";
import Go from "./2025-09-01.js";

test("Empty array", () => {
  expect(Go([], 17)).toBe(false);
});

test("Short array", () => {
  expect(Go([17], 17)).toBe(false);
});

test("Good data 1", () => {
  expect(Go([16, 1], 17)).toBe(true);
});

test("Good data 2", () => {
  expect(Go([8, 16, 1], 17)).toBe(true);
});

test("Good data 3", () => {
  expect(Go([10, 8, 7], 17)).toBe(true);
});

test("Good data 4", () => {
  expect(Go([0, 8, 7, 0], 0)).toBe(true);
});

test("Test with negatives", () => {
  expect(Go([0, 20, 7, -3], 17)).toBe(true);
});

test("Good set, no sum 1", () => {
  expect(Go([10, 8, 7], 9)).toBe(false);
});

test("Good set, no sum 2", () => {
  expect(Go([1, 1, 1, 1, 1], 1)).toBe(false);
});

test("Bad everything", () => {
  expect(Go(null, null)).toBe(false);
});
