import { test, expect } from "vitest";
import { Cons, Car, Cdr } from "../solutions/005-passthru-handler";

test("Car(): provided dataset #1", () => {
  expect(Car(Cons(3, 4))).toBe(3);
});

test("Car(): dataset #2", () => {
  expect(Car(Cons(-1, -2))).toBe(-1);
});

test("Car(): dataset #3", () => {
  expect(Car(Cons(0, 0))).toBe(0);
});

test("Cdr(): provided dataset #1", () => {
  expect(Cdr(Cons(3, 4))).toBe(4);
});

test("Cdr(): dataset #2", () => {
  expect(Cdr(Cons(-1, -2))).toBe(-2);
});

test("Cdr(): dataset #3", () => {
  expect(Cdr(Cons(0, 0))).toBe(0);
});
