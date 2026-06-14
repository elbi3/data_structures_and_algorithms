import mySelectionSort from './mySelectionSort.js';

describe('mySelectionSort', () => {
  it('sorts a randomly generated array of integers', () => {
    const input = [5, 2, 9, 1, 5, 6, 3, 8, 0, 7];
    const expected = [...input].sort((a, b) => a - b);

    expect(mySelectionSort(input)).toEqual(expected);
  });

  it('handles an array already sorted in ascending order', () => {
    const input = [1, 2, 3, 4, 5];

    expect(mySelectionSort(input)).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles an array sorted in descending order', () => {
    const input = [5, 4, 3, 2, 1];

    expect(mySelectionSort(input)).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles an array where all elements are the same', () => {
    const input = [7, 7, 7, 7, 7];

    expect(mySelectionSort(input)).toEqual([7, 7, 7, 7, 7]);
  });

  it('handles an array containing negative numbers', () => {
    const input = [3, -1, -7, 4, 0, -2];

    expect(mySelectionSort(input)).toEqual([-7, -2, -1, 0, 3, 4]);
  });

  it('handles an empty array', () => {
    expect(mySelectionSort([])).toEqual([]);
  });

  it('handles a single-element array', () => {
    expect(mySelectionSort([42])).toEqual([42]);
  });
});