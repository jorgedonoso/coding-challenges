import { test, expect } from "vitest";
import { Go, GoNoDivision } from "./2025-09-02.js";

test("Test 1", () => {
  expect(Go([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]);
});

test("Test 2", () => {
  expect(Go([3, 2, 1])).toStrictEqual([2, 3, 6]);
});

test("Test 3", () => {
  expect(Go([])).toStrictEqual([]);
});

test("Test 4", () => {
  expect(Go([1, 5, 2])).toStrictEqual([10, 2, 5]);
});

test("Test 5", () => {
  expect(Go([2, 5, 2])).toStrictEqual([10, 4, 10]);
});

test("No Division - Test 1", () => {
  expect(GoNoDivision([1, 2, 3, 4, 5])).toStrictEqual([120, 60, 40, 30, 24]);
});

test("No Division - Test 2", () => {
  expect(GoNoDivision([3, 2, 1])).toStrictEqual([2, 3, 6]);
});

test("No Division - Test 3", () => {
  expect(GoNoDivision([])).toStrictEqual([]);
});

test("No Division - Test 4", () => {
  expect(GoNoDivision([1, 5, 2])).toStrictEqual([10, 2, 5]);
});

test("No Division - Test 5", () => {
  expect(GoNoDivision([2, 5, 2])).toStrictEqual([10, 4, 10]);
});
