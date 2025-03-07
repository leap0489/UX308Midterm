import { calculateVolume } from "../cube.js";

describe("A suite", function() {
    it("tests height of 3", function() {
      let height = 3;
      let volume = calculateVolume(height)
      expect(volume.toFixed(2)).toBe("27.00");
    });
  });

  describe("A suite", function() {
    it("tests height of 2", function() {
      let height = 2;
      let volume = calculateVolume(height)
      expect(volume.toFixed(2)).toBe("8.00");
    });
  });

  describe("A suite", function() {
    it("tests height of 4", function() {
      let height = 4;
      let volume = calculateVolume(height)
      expect(volume.toFixed(2)).toBe("64.00");
    });
  });