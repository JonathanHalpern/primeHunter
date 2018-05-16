import Utils from "./Utils";

describe("Utils", () => {
  describe("findSearchTime", () => {
    test('a search of 0 milliseconds should give the results "almost no time at all"', () => {
      expect(Utils.findSearchTime(0)).toBe("almost no time at all");
    });

    test('a search of 1 millisecond should give the results "0.001s"', () => {
      expect(Utils.findSearchTime(1)).toBe("0.001s");
    });

    test('a search of 4321 millisecond should give the results "0.001s"', () => {
      expect(Utils.findSearchTime(4321)).toBe("4.32s");
    });

    test('a search of 54321 millisecond should give the results "0.001s"', () => {
      expect(Utils.findSearchTime(54321)).toBe("54.3s");
    });
  });
});
