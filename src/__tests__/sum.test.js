import { sum } from "../components/sum";

test("Sum function should calculate sum of two numbers.", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});
