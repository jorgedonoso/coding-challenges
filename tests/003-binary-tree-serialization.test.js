import { test, expect } from "vitest";
import {
  Node,
  Serialize,
  Deserialize,
} from "../solutions/003-binary-tree-serialization";

test("Base node test", () => {
  const tree = Node("root", Node("left", Node("left.left")), Node("right"));
  expect(tree["left"]["left"]["val"]).toBe("left.left");
});

test("Serialize #1", () => {
  const tree = Node("root", Node("left-val"), Node("right-val"));

  expect(Serialize(tree)).toBe("root,left-val,,,right-val,,");
});

test("Serialize #2", () => {
  const tree = Node(
    "root",
    Node("left-1"),
    Node("right-1-root", Node("right-1-left"), Node("right-1-right"))
  );
  expect(Serialize(tree)).toBe(
    "root,left-1,,,right-1-root,right-1-left,,,right-1-right,,"
  );
});

test("Serialize #3", () => {
  const tree = Node(
    "root",
    Node("left-1-root", Node("left-1-left"), ""),
    Node("right-1-root", "", Node("right-1-right"))
  );
  expect(Serialize(tree)).toBe(
    "root,left-1-root,left-1-left,,,,right-1-root,,right-1-right,,"
  );
});

test("Deserialize #1", () => {
  const tree = Node("root", Node("left-val"), Node("right-val"));
  expect(Deserialize(Serialize(tree))).toStrictEqual(tree);
});

test("Deserialize #2", () => {
  const tree = Node("lonely-root");
  expect(Deserialize(Serialize(tree))).toStrictEqual(tree);
});

test("Deserialize #3", () => {
  const tree = Node(
    "root",
    Node("left-1-root", Node("left-1-left"), undefined),
    Node("right-1-root", undefined, Node("right-1-right"))
  );
  expect(Deserialize(Serialize(tree))).toStrictEqual(tree);
});
