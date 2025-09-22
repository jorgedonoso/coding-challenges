import { test, expect, vi } from "vitest";
import { ScheduleJob } from "../solutions/008-timeout-wrapper";

test("job is called after delay", async () => {
  const mockJob = vi.fn();

  ScheduleJob(mockJob, 100);

  expect(mockJob).not.toHaveBeenCalled();
  await new Promise((r) => setTimeout(r, 200));

  expect(mockJob).toHaveBeenCalledTimes(1);
});

test("job is not called before delay", async () => {
  const mockJob = vi.fn();

  ScheduleJob(mockJob, 1000);

  await new Promise((r) => setTimeout(r, 500));

  expect(mockJob).not.toHaveBeenCalled();
});

test("job is called only once", async () => {
  const mockJob = vi.fn();

  ScheduleJob(mockJob, 100);

  await new Promise((r) => setTimeout(r, 150));

  expect(mockJob).toHaveBeenCalledTimes(1);
});

test("multiple jobs can be scheduled", async () => {
  const mockJob1 = vi.fn();
  const mockJob2 = vi.fn();

  ScheduleJob(mockJob1, 100);
  ScheduleJob(mockJob2, 200);

  await new Promise((r) => setTimeout(r, 150));
  expect(mockJob1).toHaveBeenCalled();
  expect(mockJob2).not.toHaveBeenCalled();

  await new Promise((r) => setTimeout(r, 100));
  expect(mockJob2).toHaveBeenCalled();
});

test("job is called immediately when delay is 0", async () => {
  const mockJob = vi.fn();

  ScheduleJob(mockJob, 0);
  await new Promise((r) => setTimeout(r, 10));

  expect(mockJob).toHaveBeenCalled();
});

test("job is called immediately when delay is null", async () => {
  const mockJob = vi.fn();

  ScheduleJob(mockJob, null);
  await new Promise((r) => setTimeout(r, 10));

  expect(mockJob).toHaveBeenCalled();
});

test("job is called immediately when delay is less than 0", async () => {
  const mockJob = vi.fn();

  ScheduleJob(mockJob, -100);
  await new Promise((r) => setTimeout(r, 10));

  expect(mockJob).toHaveBeenCalled();
});

test("multiple jobs with same delay", async () => {
  const mockJob1 = vi.fn();
  const mockJob2 = vi.fn();

  ScheduleJob(mockJob1, 100);
  ScheduleJob(mockJob2, 100);

  await new Promise((r) => setTimeout(r, 100));

  expect(mockJob1).toHaveBeenCalled();
  expect(mockJob2).toHaveBeenCalled();
});
