import nonUniqueElements from './nonUniqueElements';


test('returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
})

test('return false for incorrect type', () => {
  expect(nonUniqueElements(5)).toBe(false); 
  expect(nonUniqueElements("test")).toBe(false); 
  expect(nonUniqueElements({})).toBe(false); 
  expect(nonUniqueElements(null)).toBe(false); 
  expect(nonUniqueElements(undefined)).toBe(false); 
  expect(nonUniqueElements(NaN)).toBe(false); 
  expect(nonUniqueElements([1, "test", 3, 1, 3])).toBe(false);
  expect(nonUniqueElements([1, {}, 3, 1, 3])).toBe(false);
  expect(nonUniqueElements([1, null, 3, 1, 3])).toBe(false);
  expect(nonUniqueElements([1, undefined, 3, 1, 3])).toBe(false);
  expect(nonUniqueElements([1, NaN, 3, 1, 3])).toBe(false);
  expect(nonUniqueElements([1, [], 3, 1, 3])).toBe(false);
})