import { test, expect } from "vitest";
import {
  StartCountingWrapper,
  Node,
} from "../solutions/006-unival-tree-count.js";

test("Dataset #1", () => {
  const tree = Node(0);
  expect(StartCountingWrapper(tree)).toBe(1);
});

test("Dataset #2 (Provided)", () => {
  const tree = Node(
    0,
    Node(1, null, null),
    Node(0, Node(1, Node(1), Node(1)), Node(0))
  );

  expect(StartCountingWrapper(tree)).toBe(5);
});

test("Dataset #3", () => {
  const tree = Node(
    0,
    Node(1, null, null),
    Node(0, Node(1, Node(1), Node(0)), Node(0))
  );

  expect(StartCountingWrapper(tree)).toBe(4);
});

test("Dataset #4", () => {
  const tree = Node(
    0,
    Node(1, null, Node(1)),
    Node(0, Node(1, Node(1), Node(1)), Node(0))
  );

  expect(StartCountingWrapper(tree)).toBe(6);
});

test("Dataset #5", () => {
  const tree = Node(
    0,
    Node(1, null, Node(1)),
    Node(0, Node(1, Node(0), Node(1)), Node(0))
  );

  expect(StartCountingWrapper(tree)).toBe(5);
});

test("Dataset #6", () => {
  const tree = Node(0, Node(1), Node(0));
  expect(StartCountingWrapper(tree)).toBe(2);
});

test("Dataset #7", () => {
  const tree = Node(0, Node(0), Node(0));
  expect(StartCountingWrapper(tree)).toBe(3);
});

test("Dataset #8", () => {
  const tree = Node(1, Node(1), Node(1));
  expect(StartCountingWrapper(tree)).toBe(3);
});

test("Dataset #9", () => {
  const tree = Node(0, Node(0), Node(1));
  expect(StartCountingWrapper(tree)).toBe(2);
});

test("Dataset #10", () => {
  const tree = Node(9, Node(9, Node(9, Node(9))));
  expect(StartCountingWrapper(tree)).toBe(4);
});
