# bubble sort algorithm

## "story"
- no story for this one

## goal: 
- implement and understand bubble sort

## algorithm implementation
- implement an optimized version of bubble sort,
- that detects whether the array is already sorted early in the process
- sort an array or list of integers in ascending order
- include code comments to explain the logic at each step

## testing requirements
- test case 1: try a randomly generated array of integers
- test case 2: try an array already sorted in ascending order (best-case scenario)
- test case 3: try an array sorted in descending order (worst-case scenario)
- test case 4: try an array with all elements being the same
- test case 5: try an empty array and an array with one element (edge case)
- test case 6: try a single-element array (edge case)

## analysis
- time complexity of this implementation?  O(n²) on worst and average cases
- if an early-exit is added, there is O(n)
- how does the algorithm's iterative comparison and swapping mechanism leads to its O(n^2) complexity in the average and worst cases?
- what is the space complexity of this implementation and why is it considered an in-place sorting algorithm?
- explain the potential stability of Bubble Sort and whether it maintains the order of equal elements
-  insertion sort does roughly half as many comparisons/swaps on average and is considered more "efficient" in practice, even though both have the same Big-O complexity. Bubble sort is mostly taught for its conceptual simplicity rather than because it's actually used much.

