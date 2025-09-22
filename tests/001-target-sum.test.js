import { test, expect } from "vitest";
import FindSumTarget from "../solutions/001-target-sum";

test("Empty array", () => {
  expect(FindSumTarget([], 17)).toBe(false);
});

test("Short array", () => {
  expect(FindSumTarget([17], 17)).toBe(false);
});

test("Good data 1", () => {
  expect(FindSumTarget([16, 1], 17)).toBe(true);
});

test("Good data 2", () => {
  expect(FindSumTarget([8, 16, 1], 17)).toBe(true);
});

test("Good data 3", () => {
  expect(FindSumTarget([10, 8, 7], 17)).toBe(true);
});

test("Good data 4", () => {
  expect(FindSumTarget([0, 8, 7, 0], 0)).toBe(true);
});

test("Test with negatives", () => {
  expect(FindSumTarget([0, 20, 7, -3], 17)).toBe(true);
});

test("Good set, no sum 1", () => {
  expect(FindSumTarget([10, 8, 7], 9)).toBe(false);
});

test("Good set, no sum 2", () => {
  expect(FindSumTarget([1, 1, 1, 1, 1], 1)).toBe(false);
});

test("Bad everything", () => {
  expect(FindSumTarget(null, null)).toBe(false);
});
