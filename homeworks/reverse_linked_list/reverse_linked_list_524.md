# e-commerce linked-list reversal

## "story"

- developing a system for an e-commerce platform where orders are processed in a sequence
- you need to process the most recent orders first to ensure faster delivery for last-minute purchases

## goal: 
- orders are currently stored in a singly linked list, with the head being the first order received. 
- we need to reverse the list so the most recent orders are processed first

## data structure
- define a singly linked list, where
- each node represents a health metric recorded for a patient on a given day
- node should contain at least the following information:
    - One health metric value (e.g., blood sugar level, heart rate). 
    - A pointer/reference to the next metric in the sequence (or null/None if it is the last metric)

## software module requirements
- define an `Order` Class that includes *at least* the following attributes:
    - Order ID (a unique identifier for the order)
    - Customer details (can be as simple as a customer name or ID)
    - Order details (a description of the order, e.g., items purchased)
- implement a singly linked list to store the orders.
- it should support basic operations such as:
```js
`append(order)`// Add a new order to the end of the list.
`display()`// Print out the list of orders from the first to the last.
`reverse()`// Reverse the linked list so that the last order becomes the first and vice versa.
```
- implement a function to reverse the linked list. 
- reversal function should manipulate the links between nodes in the list to reverse the order of the nodes
- after reversal, the `display()` function should show the orders starting from the most recently added

## clarifying questions?
- add these here as well as to video
- include any decisions made in leiu of being able to ask an interviewer

## testing requirements
- test cases using unit test frameworks.
- test cases for normal cases as well as edge cases 
    - 3 test cases testing normal cases  
    - 3 test cases testing edge cases
