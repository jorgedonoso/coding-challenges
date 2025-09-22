import { test, expect } from "vitest";
import { StartWaysToClimb } from "../solutions/009-ways-to-climb";

test("0 steps returns 1 way (already at the top)", () => {
  const res = StartWaysToClimb(0);
  expect(res).toBe(1);
});

test("1 step returns 1 way (already at the top)", () => {
  const res = StartWaysToClimb(1);
  expect(res).toBe(1);
});

test("2 steps returns 2 ways", () => {
  const res = StartWaysToClimb(2);
  expect(res).toBe(2);
});

test("3 steps returns 3 ways", () => {
  const res = StartWaysToClimb(3);
  expect(res).toBe(3);
});

test("4 steps returns 5 ways", () => {
  const res = StartWaysToClimb(4);
  expect(res).toBe(5);
});

test("5 steps returns 8 ways", () => {
  const res = StartWaysToClimb(5);
  expect(res).toBe(8);
});

test("6 steps returns 13 ways", () => {
  const res = StartWaysToClimb(6);
  expect(res).toBe(13);
});

test("7 steps returns 21 ways", () => {
  const res = StartWaysToClimb(7);
  expect(res).toBe(21);
});

test("8 steps returns 34 ways", () => {
  const res = StartWaysToClimb(8);
  expect(res).toBe(34);
});

test("10 steps returns 89 ways", () => {
  const res = StartWaysToClimb(10);
  expect(res).toBe(89);
});
