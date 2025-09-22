import { test, expect } from "vitest";
import { FindMaxSubArray } from "../solutions/014-max-sub-array";

test("Provided case", () => {
  const res = FindMaxSubArray([10, 5, 2, 7, 8, 7], 3);
  expect(res).toStrictEqual([10, 7, 8, 8]);
});

test("Provided case with larger K", () => {
  const res = FindMaxSubArray([10, 5, 2, 7, 8, 7], 4);
  expect(res).toStrictEqual([10, 8, 8]);
});

test("Provided case with even larger K", () => {
  const res = FindMaxSubArray([10, 5, 2, 7, 8, 7], 5);
  expect(res).toStrictEqual([10, 8]);
});

test("Provided case with largest K", () => {
  const res = FindMaxSubArray([10, 5, 2, 7, 8, 7], 6);
  expect(res).toStrictEqual([10]);
});

test("Largest K and max value at end of array", () => {
  const res = FindMaxSubArray([9, 5, 2, 7, 8, 10], 6);
  expect(res).toStrictEqual([10]);
});

test("Empty array and K=0", () => {
  const res = FindMaxSubArray([], 0);
  expect(res).toStrictEqual([]);
});

// Empty array doesn't loop, so the default [] will be the response.
test("Empty array and K=5", () => {
  const res = FindMaxSubArray([], 0);
  expect(res).toStrictEqual([]);
});
