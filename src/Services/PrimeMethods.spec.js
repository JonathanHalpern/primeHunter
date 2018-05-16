import PrimeMethods from './PrimeMethods';

test('a search of 1 millisecond should give the results "0.001s"', () => {
  expect(PrimeMethods.findSearchTime(1)).toBe('0.001s');
});

