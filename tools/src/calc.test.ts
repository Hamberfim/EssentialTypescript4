import { calcSum } from "./calc";

test("Check Result Value", () => {
  const result = calcSum(10, 20, 30);
  expect(result).toBe(60);
});
