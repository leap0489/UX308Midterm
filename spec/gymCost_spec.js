import { calculateGymCost } from "../gymCost.js";

describe("A suite", function() {
    it("tests 1 friend", function() {
      let friends = 1;
      let currentCost = 20;
      let finalCost = calculateGymCost(friends, currentCost)
      expect(finalCost.toFixed(2)).toBe("19.00");
    });
  });

  describe("A suite", function() {
    it("tests 2 friend", function() {
      let friends = 2;
      let currentCost = 20;
      let finalCost = calculateGymCost(friends, currentCost)
      expect(finalCost.toFixed(2)).toBe("18.00");
    });
  });

  describe("A suite", function() {
    it("tests 2 friend", function() {
      let friends = 3;
      let currentCost = 20;
      let finalCost = calculateGymCost(friends, currentCost)
      expect(finalCost.toFixed(2)).toBe("17.00");
    });
  });


  describe("A suite", function() {
    it("tests 2 friend", function() {
      let friends = 4;
      let currentCost = 20;
      let finalCost = calculateGymCost(friends, currentCost)
      expect(finalCost.toFixed(2)).toBe("17.00");
    });
  });