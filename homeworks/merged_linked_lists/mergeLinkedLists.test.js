import {  mergeTwoSortedLists, SinglyLinkedList, Record } from "./mergeLinkedLists.js";

// Helper: walk a merged list and pull out just the SSNs (the .ssn field)
// so we can compare against a plain array in assertions.
function toValueArray(head) {
  const result = [];
  let node = head;
  while (node) {
    result.push(node.ssn);
    node = node.next;
  }
  return result;
}

describe('mergeTwoSortedLists', () => {

  // ---- Normal cases ----------------------------------------------------

  it('merges two non-overlapping sorted lists into one sorted list', () => {
    const list1 = new SinglyLinkedList();
    list1.push(1000000000, 45, 'Smee');
    list1.push(3000000000, 23, 'Peter');
    list1.push(5000000000, 66, 'Rufio');

    const list2 = new SinglyLinkedList();
    list2.push(2000000000, 38, 'Captain');
    list2.push(4000000000, 11, 'Maggie Smith');
    list2.push(6000000000, 42, 'Tinker');

    const merged = mergeTwoSortedLists(list1.head, list2.head);

    expect(toValueArray(merged)).toEqual([
      1000000000, 2000000000, 3000000000,
      4000000000, 5000000000, 6000000000,
    ]);
  });

  it('preserves duplicate records when the same SSN appears in both lists', () => {
    const list1 = new SinglyLinkedList();
    list1.push(1000000000, 45, 'Smee');
    list1.push(5000000000, 23, 'Moira');

    const list2 = new SinglyLinkedList();
    list2.push(5000000000, 34, 'Hook');
    list2.push(7000000000, 38, 'Captain');

    const merged = mergeTwoSortedLists(list1.head, list2.head);

    // Both records with SSN 5000000000 should appear, with full
    // patient info preserved on each, not just the value.
    expect(toValueArray(merged)).toEqual([
      1000000000, 5000000000, 5000000000, 7000000000,
    ]);

    // Walk the merged list to confirm both 5000000000 records survived
    // with their distinct details intact.
    const names = [];
    let node = merged;
    while (node) {
      if (node.ssn === 5000000000) names.push(node.fullName);
      node = node.next;
    }
    expect(names).toEqual(['Moira', 'Hook']);
  });

  it('interleaves values correctly when the two lists alternate', () => {
    const list1 = new SinglyLinkedList();
    list1.push(1, 1, 'A');
    list1.push(3, 1, 'C');
    list1.push(5, 1, 'E');

    const list2 = new SinglyLinkedList();
    list2.push(2, 1, 'B');
    list2.push(4, 1, 'D');
    list2.push(6, 1, 'F');

    const merged = mergeTwoSortedLists(list1.head, list2.head);

    expect(toValueArray(merged)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // ---- Edge cases ---------------------------------------------------------

  it('returns the second list unchanged when the first list is empty', () => {
    const list1 = new SinglyLinkedList(); // empty, head is null

    const list2 = new SinglyLinkedList();
    list2.push(1, 1, 'A');
    list2.push(2, 1, 'B');

    const merged = mergeTwoSortedLists(list1.head, list2.head);

    expect(toValueArray(merged)).toEqual([1, 2]);
  });

  it('returns null when both lists are empty', () => {
    const list1 = new SinglyLinkedList();
    const list2 = new SinglyLinkedList();

    const merged = mergeTwoSortedLists(list1.head, list2.head);

    expect(merged).toBeNull();
  });

  it('handles single-node lists where the entire second list is smaller', () => {
    const list1 = new SinglyLinkedList();
    list1.push(10, 1, 'A');

    const list2 = new SinglyLinkedList();
    list2.push(1, 1, 'B');

    const merged = mergeTwoSortedLists(list1.head, list2.head);

    expect(toValueArray(merged)).toEqual([1, 10]);
    // Confirm the smaller node (from list2) is correctly the new head.
    expect(merged.fullName).toBe('B');
  });

});