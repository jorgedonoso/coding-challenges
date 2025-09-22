import { test, expect } from "vitest";
import { GetRandomWithUniformProbability } from "../solutions/011-random-uniform-probability";

test("One element stream", () => {
  const res = GetRandomWithUniformProbability(["a"]);
  expect(res).toBe("a");
});

test("Null stream", () => {
  const res = GetRandomWithUniformProbability(null);
  expect(res).toBeNull();
});

test("Empty stream", () => {
  const res = GetRandomWithUniformProbability([]);
  expect(res).toBeNull();
});

test("Some valid element", () => {
  const stream = ["a", "b", "c", "d", "e"];
  const res = GetRandomWithUniformProbability(stream);
  expect(stream.includes(res)).toBe(true);
});

test("First element is returned when Math.random is mocked high", () => {
  const originalRandom = Math.random;
  Math.random = () => 0.99;
  const res = GetRandomWithUniformProbability(["a", "b", "c"]);
  /*
    Only the first iteration will get saved:
    Math.rand() < 1/1 == (0.99 < 1)
    All other elements will not satisfy the criteria:
    (0.99 < 0.5), (0.99 < 0.333), etc...
   */
  expect(res).toBe("a");
  Math.random = originalRandom;
});

test("Numbers stream", () => {
  const stream = [10, 20, 30];
  const res = GetRandomWithUniformProbability(stream);
  expect(stream.includes(res)).toBe(true);
});

test("Large stream", () => {
  const stream = Array.from({ length: 100000 }, (_, i) => i);
  const res = GetRandomWithUniformProbability(stream);
  expect(typeof res).toBe("number");
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThan(100000);
});

test("Mixed stream", () => {
  const stream = [10, "a", 30];
  const res = GetRandomWithUniformProbability(stream);
  expect(stream.includes(res)).toBe(true);
});

test("Undefined input", () => {
  const res = GetRandomWithUniformProbability(undefined);
  expect(res).toBeUndefined();
});

test("Stream of `undefined`", () => {
  const res = GetRandomWithUniformProbability([undefined]);
  expect(res).toBeUndefined();
});

test("Stream of `null`", () => {
  const res = GetRandomWithUniformProbability([null]);
  expect(res).toBeNull();
});
