import { fahrenheitToCelsius } from "../fahrenheitToCelsius.js";

describe("A suite", function() {
    it("tests 81 farenheit", function() {
      let farTemp = 212;
      let celTemp = fahrenheitToCelsius(farTemp);
      expect(celTemp.toFixed(2)).toBe("100.00");
    });
  });

  describe("A suite", function() {
    it("tests 70 farenheit", function() {
      let farTemp = 70;
      let celTemp = fahrenheitToCelsius(farTemp);
      expect(celTemp.toFixed(2)).toBe("21.11");
    });
  });

  describe("A suite", function() {
    it("tests 70 farenheit", function() {
      let farTemp = 32;
      let celTemp = fahrenheitToCelsius(farTemp);
      expect(celTemp.toFixed(2)).toBe("0.00");
    });
  });