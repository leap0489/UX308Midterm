import { calculateCoin } from "../coin.js";

describe("A suite", function() {
    it("tests 4 loonies", function() {
      let numNickel = 0;
      let numDime = 0;
      let numQuarter = 0;
      let numLoonie = 4;
      let numToonie = 0;
      let totalValue = calculateCoin(numNickel, numDime, numQuarter, numLoonie, numToonie)
      expect(totalValue).toBe(4);
    });
  });

  describe("A suite", function() {
    it("tests 4 quarters", function() {
      let numNickel = 0;
      let numDime = 0;
      let numQuarter = 4;
      let numLoonie = 0;
      let numToonie = 0;
      let totalValue = calculateCoin(numNickel, numDime, numQuarter, numLoonie, numToonie)
      expect(totalValue).toBe(1);
    });
  });

  describe("A suite", function() {
    it("tests 4 quarters", function() {
      let numNickel = 0;
      let numDime = 0;
      let numQuarter = 0;
      let numLoonie = 0;
      let numToonie = 0;
      let totalValue = calculateCoin(numNickel, numDime, numQuarter, numLoonie, numToonie)
      expect(totalValue).toBe(0);
    });
  });