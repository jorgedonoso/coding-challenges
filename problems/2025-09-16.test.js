import { test, expect, describe } from "vitest";
import { EfficientLog } from "./2025-09-16";

describe("Silent failure tests", () => {
  test("Add zero orders to N=1 log and get latest", () => {
    const log = EfficientLog(1);
    const res = log.GetLast();
    expect(res).toBeNull();
  });

  test("Add one order to N=1 log and get negative index", () => {
    const log = EfficientLog(1);

    log.Record("Order-01");

    const res = log.GetLast(-1);
    expect(res).toBeNull();
  });

  test("Add one order to N=1 log and get zero index", () => {
    const log = EfficientLog(1);

    log.Record("Order-01");

    const res = log.GetLast(0);
    expect(res).toBeNull();
  });

  test("Add one order to N=1 log and get second index", () => {
    const log = EfficientLog(1);

    log.Record("Order-01");

    const res = log.GetLast(2);
    expect(res).toBeNull();
  });

  test("Add one order to N=2 log and get second index", () => {
    const log = EfficientLog(2);

    log.Record("Order-01");

    const res = log.GetLast(2);
    expect(res).toBeNull();
  });
});

describe("Add/Get tests", () => {
  test("Add one order and get latest", () => {
    const log = EfficientLog(5);

    log.Record("Order-01");

    const res = log.GetLast(1);
    expect(res).toBe("Order-01");
  });

  test("Add one order and get latest (without index)", () => {
    const log = EfficientLog(5);

    log.Record("Order-01");

    const res = log.GetLast();
    expect(res).toBe("Order-01");
  });

  test("Add three orders and get latest", () => {
    const log = EfficientLog(5);

    log.Record("Order-01");
    log.Record("Order-02");
    log.Record("Order-03");

    const res = log.GetLast(1);
    expect(res).toBe("Order-03");
  });

  test("Add three orders and get latest (without index)", () => {
    const log = EfficientLog(5);

    log.Record("Order-01");
    log.Record("Order-02");
    log.Record("Order-03");

    const res = log.GetLast();
    expect(res).toBe("Order-03");
  });

  test("Add three orders and get second latest", () => {
    const log = EfficientLog(5);

    log.Record("Order-01");
    log.Record("Order-02");
    log.Record("Order-03");

    const res = log.GetLast(2);
    expect(res).toBe("Order-02");
  });
});
