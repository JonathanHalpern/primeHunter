import PrimeMethods from "./PrimeMethods";

describe("Prime Methods", () => {
  describe("findNthPrime", () => {
    test("for the 1st prime", () => {
      expect.assertions(1);
      return PrimeMethods.findNthPrime(1).then(response => {
        expect(response.nthPrime).toBe(2);
        expect(response.primeArray).toEqual([2]);
      });
    });

    test("for the 6th prime", () => {
      expect.assertions(1);
      return PrimeMethods.findNthPrime(6).then(response => {
        expect(response.nthPrime).toBe(13);
        expect(response.primeArray).toEqual([2, 3, 5, 7, 11, 13]);
      });
    });
  });
});
