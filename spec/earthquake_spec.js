import { characterizeEarthquake } from "../earthquake.js";

describe("A suite", function() {
    it("tests 4", function() {
      let richter = 4;
      let description = characterizeEarthquake (richter)
      expect(description).toBe("Little or no damage");
    });
  });

  describe("A suite", function() {
    it("tests 5.3", function() {
      let richter = 5.3;
      let description = characterizeEarthquake (richter)
      expect(description).toBe("Some damage");
    });
  });

  describe("A suite", function() {
    it("tests 6", function() {
      let richter = 6;
      let description = characterizeEarthquake (richter)
      expect(description).toBe("Serious damage: walls may crack or fall");
    });
  });

  describe("A suite", function() {
    it("tests 7.2", function() {
      let richter = 7.2;
      let description = characterizeEarthquake (richter)
      expect(description).toBe("Disaster: buildings may collapse");
    });
  });

  describe("A suite", function() {
    it("tests 8", function() {
      let richter = 8;
      let description = characterizeEarthquake (richter)
      expect(description).toBe("Catastrophe: most buildings destroyed");
    });
  });