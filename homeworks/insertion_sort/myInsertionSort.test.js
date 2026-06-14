import { myInsertionSort } from "./myInsertionSort.js";

describe('myInsertionSort', () => {
  it('sorts a small array of integers', () => {
    const input = [3, 1, 2];

    expect(myInsertionSort(input)).toEqual([1, 2, 3]);
  });

  it('sorts a large array of integers', () => {
    const input = [34, 7, 23, 32, 5, 62, 32, 1, 89, 12, 45, 78, 3, 99, 21, 17, 56, 8, 90, 4];
    const expected = [...input].sort((a, b) => a - b);

    expect(myInsertionSort(input)).toEqual(expected);
  });

  it('sorts a nearly sorted array of integers', () => {
    const input = [1, 2, 4, 3, 5, 6, 7, 9, 8, 10];

    expect(myInsertionSort(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('sorts a reversed-order array of integers (descending)', () => {
    const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    expect(myInsertionSort(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('handles an empty array', () => {
    expect(myInsertionSort([])).toEqual([]);
  });

  it('handles a single-element array', () => {
    expect(myInsertionSort([42])).toEqual([42]);
  });
});