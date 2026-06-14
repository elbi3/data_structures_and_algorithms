import { myBubbleSort } from "./myBubbleSort.js";


describe('myBubbleSort', () => {
  it.todo('sorts a randomly generated array of integers');
  it('sorts a randomly generated array of integers', () => {
    const input = [5, 2, 9, 1, 5, 6, 3, 8, 0, 7];
    const expected = [...input].sort((a, b) => a - b);
  
    expect(myBubbleSort(input)).toEqual(expected);
  });
  it.todo('an array already sorted in ascending order (best-case scenario)');
  it('handles an array already sorted in ascending order (best case)', () => {
    const input = [1, 2, 3, 4, 5];
  
    expect(myBubbleSort(input)).toEqual([1, 2, 3, 4, 5]);
  });
  it.todo('an array sorted in descending order (worst-case scenario)');
  it('handles an array sorted in descending order (worst case)', () => {
    const input = [5, 4, 3, 2, 1];
  
    expect(myBubbleSort(input)).toEqual([1, 2, 3, 4, 5]);
  });
  it.todo('sorts an array with all elements being the same');
  it('handles an array where all elements are the same', () => {
    const input = [7, 7, 7, 7, 7];
  
    expect(myBubbleSort(input)).toEqual([7, 7, 7, 7, 7]);
  });
  it.todo('sorts an empty array and an array with one element (edge case)');
  it('handles an empty array', () => {
    expect(myBubbleSort([])).toEqual([]);
  });
  it.todo('handles a single-element array (edge case)');
  it('handles a single-element array', () => {
    expect(myBubbleSort([42])).toEqual([42]);
  });
});
