import { test, expect, describe } from "vitest";
import {
  Autocomplete,
  BuildLookupTree,
} from "../solutions/010-autocomplete-system";

describe("using provided dictionary", () => {
  const _dict = ["dog", "deer", "deal"];

  test("valid lookup 1", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("de", tree);

    expect(res).toStrictEqual(["deer", "deal"]);
  });

  test("valid lookup 2", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("d", tree);

    expect(res).toStrictEqual(["dog", "deer", "deal"]);
  });

  test("valid lookup 3", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("dee", tree);

    expect(res).toStrictEqual(["deer"]);
  });

  test("invalid lookup 1", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("a", tree);

    expect(res).toStrictEqual([]);
  });

  test("invalid lookup 2", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("dex", tree);

    expect(res).toStrictEqual([]);
  });
});

describe("using another dictionary", () => {
  const _dict = ["john", "george", "paul", "patty"];

  test("valid lookup 1", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("pa", tree);

    expect(res).toStrictEqual(["paul", "patty"]);
  });

  test("valid lookup 2", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("pau", tree);

    expect(res).toStrictEqual(["paul"]);
  });

  test("valid lookup 3", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("g", tree);

    expect(res).toStrictEqual(["george"]);
  });

  test("invalid lookup 1", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete(" pau", tree);

    expect(res).toStrictEqual([]);
  });

  test("invalid lookup 2", () => {
    const tree = BuildLookupTree(_dict);
    const res = Autocomplete("a", tree);

    expect(res).toStrictEqual([]);
  });
});
