# Summary Report
## problem:
- "Determine whether the sequence of health metrics exhibits a symmetrical pattern"
- this is a palindrome check: does the sequence read the same forwards and backwards?
- how do you look at both ends at once when you can only go in one direction?

## what is a linked list?
- a singly linked list is just a chain of objects where each object ("node") holds a value and a reference to the next node:
```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```
- you walk through the list by following `.next` until you hit `null`
- notice this pattern: `while (current !== null) { ...; current = current.next; }`
```js
let current = list.head;
while (current !== null) {
  // do something with current.value
  current = current.next;
}
```

## *singly* linked list
- you can only move forward by `.next`
- there is no `.previous`
- there are no indexes like with arrays

## push function
```css
Empty:
head → null
tail → null

push(10):
head → [10] → null
tail ────────^

push(20):
head → [10] → [20] → null
tail ───────────────^
```

## class responsibilities
```md
| Object             | Properties               |
| ------------------ | ------------------------ |
| `SinglyLinkedList` | `head`, `tail`, `length` |
| `Node`             | `value`, `next`          |
```
