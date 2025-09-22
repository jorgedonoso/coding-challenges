import { test, expect } from "vitest";
import { FindIntersection } from "../solutions/015-linked-list-intersection";

test("Match in middle", () => {
  const listA = [3, 7, 8, 10];
  const listB = [99, 1, 8, 10];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(8);
});

test("No intersection", () => {
  const listA = [1, 2, 3];
  const listB = [4, 5, 6];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(null);
});

test("First element matches", () => {
  const listA = [5, 6, 7];
  const listB = [5, 8, 9];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(5);
});

test("First match (having multiple)", () => {
  const listA = [1, 2, 3, 4];
  const listB = [3, 2, 1];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(3);
});

test("Repeated elements in A", () => {
  const listA = [1, 1, 2, 3];
  const listB = [3, 4, 5];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(3);
});

test("Repeated elements in B", () => {
  const listA = [4, 5, 6];
  const listB = [6, 6, 7, 8];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(6);
});

test("Empty arrays", () => {
  const listA = [];
  const listB = [];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(null);
});

test("A is empty", () => {
  const listA = [];
  const listB = [1, 2, 3];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(null);
});

test("B is empty", () => {
  const listA = [1, 2, 3];
  const listB = [];

  const res = FindIntersection(listA, listB);

  expect(res).toBe(null);
});
