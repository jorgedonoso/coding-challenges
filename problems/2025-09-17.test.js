import { test, expect } from "vitest";
import { FindLongestPathLength } from "./2025-09-17";

test("Provided case #1", () => {
  const res = FindLongestPathLength("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext");

  expect(res).toBe(20);
});

test("Provided case #2", () => {
  const res = FindLongestPathLength(
    "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
  );

  expect(res).toBe(32);
});

test("Longer folder vs Longer filename", () => {
  const res = FindLongestPathLength(
    "dir\n\tABCD\n\t\tSH.TXT\n\tABC\n\t\tLONG.TXT"
  );

  expect(res).toBe("dir/ABC/LONG.TXT".length);
  expect("dir/ABCD/SH.TXT".length).toBe(15);
  expect("dir/ABCD/SH.TXT".length).not.toBe("dir/ABC/LONG.TXT".length);
});

test("Single folder name", () => {
  const res = FindLongestPathLength("dir");

  // From specs.
  expect(res).toBe(0);
});

test("Single folder and file", () => {
  const res = FindLongestPathLength("dir\n\thi.txt");

  // "dir/hi.txt".
  expect(res).toBe(10);
});

test("Extra long empty folder should get ignored.", () => {
  const res = FindLongestPathLength(
    "dir\n\tABCD---EXTRA---LONG---FOLDER---\n\tABC\n\t\tLONG.TXT"
  );

  expect(res).toBe("dir/ABC/LONG.TXT".length);
});

test("Single file", () => {
  const res = FindLongestPathLength("hi.txt");

  // "hi.txt".
  expect(res).toBe(6);
});

test("Empty path", () => {
  const res = FindLongestPathLength("");
  expect(res).toBe(0);
});

test("Null path", () => {
  const res = FindLongestPathLength(null);
  expect(res).toBe(0);
});

test("Undefined path", () => {
  const res = FindLongestPathLength(undefined);
  expect(res).toBe(0);
});
