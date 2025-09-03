import { test, expect } from "vitest";
import { Node, Serialize, Deserialize } from "./2025-09-03.js";

test("Base node test", () => {
  const tree = Node("root", Node("left", Node("left.left")), Node("right"));
  expect(tree["left"]["left"]["val"]).toBe("left.left");
});

test("Serialize #1", () => {
  const tree = Node("root", Node("left-val"), Node("right-val"));

  expect(Serialize(tree)).toBe(
    "root,left-val,(empty),(empty),right-val,(empty),(empty)"
  );
});

test("Serialize #2", () => {
  const tree = Node(
    "root",
    Node("left-1"),
    Node("right-1-root", Node("right-1-left"), Node("right-1-right"))
  );
  expect(Serialize(tree)).toBe(
    "root,left-1,(empty),(empty),right-1-root,right-1-left,(empty),(empty),right-1-right,(empty),(empty)"
  );
});

test("Serialize #3", () => {
  const tree = Node(
    "root",
    Node("left-1-root", Node("left-1-left"), "(empty)"),
    Node("right-1-root", "(empty)", Node("right-1-right"))
  );
  expect(Serialize(tree)).toBe(
    "root,left-1-root,left-1-left,(empty),(empty),(empty),right-1-root,(empty),right-1-right,(empty),(empty)"
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
