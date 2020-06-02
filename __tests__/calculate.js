import { calculateCalories } from "../utils/calculation";

describe("utils/calculation", () => {
  describe("calculateCalories", () => {
    it("calculate and round the calories to integer", () => {
      expect(calculateCalories(500.78378129879)).toBe(501);
    });

    it("throws an zero when rounded calories is near zero", () => {
      expect(calculateCalories(0.499999999999)).toBe(0);
    });

    it("throws an zero when calories is negative", () => {
      expect(calculateCalories(-9999.999)).toBe(0);
    });

    it("throws an error when parameter is not a number", () => {
      expect(() => {
        calculateCalories("abc");
      }).toThrow("calories should be numbers");
    });
  });
});
