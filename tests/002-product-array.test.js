import { test, expect } from "vitest";
import {
  FindArrayProduct,
  FindArrayProductNoDivision,
} from "../solutions/002-product-array";

test("Test 1", () => {
  expect(FindArrayProduct([1, 2, 3, 4, 5])).toStrictEqual([
    120, 60, 40, 30, 24,
  ]);
});

test("Test 2", () => {
  expect(FindArrayProduct([3, 2, 1])).toStrictEqual([2, 3, 6]);
});

test("Test 3", () => {
  expect(FindArrayProduct([])).toStrictEqual([]);
});

test("Test 4", () => {
  expect(FindArrayProduct([1, 5, 2])).toStrictEqual([10, 2, 5]);
});

test("Test 5", () => {
  expect(FindArrayProduct([2, 5, 2])).toStrictEqual([10, 4, 10]);
});

test("No Division - Test 1", () => {
  expect(FindArrayProductNoDivision([1, 2, 3, 4, 5])).toStrictEqual([
    120, 60, 40, 30, 24,
  ]);
});

test("No Division - Test 2", () => {
  expect(FindArrayProductNoDivision([3, 2, 1])).toStrictEqual([2, 3, 6]);
});

test("No Division - Test 3", () => {
  expect(FindArrayProductNoDivision([])).toStrictEqual([]);
});

test("No Division - Test 4", () => {
  expect(FindArrayProductNoDivision([1, 5, 2])).toStrictEqual([10, 2, 5]);
});

test("No Division - Test 5", () => {
  expect(FindArrayProductNoDivision([2, 5, 2])).toStrictEqual([10, 4, 10]);
});
