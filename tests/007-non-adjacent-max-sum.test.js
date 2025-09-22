import { test, expect } from "vitest";
import { FindMaxSum } from "../solutions/007-non-adjacent-max-sum";

test("Provided Dataset #1", () => {
  expect(FindMaxSum([2, 4, 6, 2, 5])).toBe(13);
});

test("Provided Dataset #2", () => {
  expect(FindMaxSum([5, 1, 1, 5])).toBe(10);
});

test("Edge Case #1", () => {
  expect(FindMaxSum([8, 8])).toBe(8);
});

test("Edge Case #2", () => {
  expect(FindMaxSum([])).toBe(0);
});

test("Dataset #1", () => {
  expect(FindMaxSum([3, 2, 5, 10, 7])).toBe(15);
});

test("Dataset #2", () => {
  expect(FindMaxSum([3, 2, 7, 10])).toBe(13);
});

test("Dataset #3", () => {
  expect(FindMaxSum([5, 5, 1, 4])).toBe(9);
});

test("Dataset #4", () => {
  expect(FindMaxSum([2, 1, 4, 9])).toBe(11);
});

test("Dataset #5", () => {
  expect(FindMaxSum([1, 20, 3])).toBe(20);
});

test("Dataset #6", () => {
  expect(FindMaxSum([5, 1, 1, 5])).toBe(10);
});

test("Dataset #7", () => {
  expect(FindMaxSum([4, 10, 3, 1, 5])).toBe(15);
});

test("Dataset #8", () => {
  expect(FindMaxSum([10, 2, 2, 100, 2])).toBe(110);
});

test("Dataset #9", () => {
  expect(FindMaxSum([1, 2, 3, 4, 5])).toBe(9);
});

test("Dataset #10", () => {
  expect(FindMaxSum([8, 1, 1, 8])).toBe(16);
});
