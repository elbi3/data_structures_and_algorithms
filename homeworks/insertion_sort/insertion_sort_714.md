# insertion sort algorithm

## "story"
- no story for this one

## goal: 
- implement and understand insertion sort

## algorithm implementation
- implement insertion sort,
- accepts an array or list as input and sorts the elements in ascending order 
- include code comments to explain the logic at each step
- ensure the implementation is stable, meaning it maintains the relative order of equal elements

## testing requirements
- test case 1: try a small array of integers
- test case 2: try a large array of integers
- test case 3: try a nearly sorted array of integers
- test case 4: try a reversed-order array of integers (descending order)
- test case 5: try an empty array and an array with one element (edge case)
- test case 6: try a single-element array (edge case)

## analysis
### best-case scenario
- analyze best-case scenario of a nearly-sorted array
- record the time taken (how?) and explain why insertion sort performs well in this scenario

### worst-case scenario
- analyze best-case scenario of a reversed (descending order?) array
- record the time taken (how?) and explain why insertion sort performs poorly in this scenario
- how is it inefficient, what is the time-complexity

### average-case scenario
- randomly generate several arrays of different sizes 
- sort them using the sort algorith mmodule
- record the average time taken to sort arrays of similar sizes.
- what is the average-case time complexity and compares the best and worst cases

### space complexity
- since insertion-sort is "in-place", it does not have a meaningful additional space complexity.
- insertion sort is considered an "in-place" sorting algorithm because we use the current memory where the array is stored and do not create a duplicate. We do not need additional memory for array space, just the memory required for movement.

### stability
- demonstrate the stability of the function by:
    - create an array of objects or tuples where the objects/tuples have two attributes
    - ensure some of these have equal keys on which you're sorting but different secondary attributes.
- show that after sorting, elements with equal keys maintain their original relative order.

code is not stable, this is the test that needs to pass for futher optimization:
```js
  it('maintains stability for equal keys', () => {
    const input = [
      { value: 5, id: 'A' },
      { value: 3, id: 'B' },
      { value: 5, id: 'C' },
      { value: 1, id: 'D' },
      { value: 3, id: 'E' }
    ];

    const result = myInsertionSort(input);

    expect(result).toEqual([
      { value: 1, id: 'D' },
      { value: 3, id: 'B' },
      { value: 3, id: 'E' },
      { value: 5, id: 'A' },
      { value: 5, id: 'C' }
    ]);
  });
  ```
