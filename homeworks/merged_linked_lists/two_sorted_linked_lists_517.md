# merge linked lists for patient records integration

## "story"
- healthcare company acquisition: 2 sets of patient data sorted by SSN
- we need to do a patient records integration

## goal: 
- develop a software module that can take the heads of two sorted linked lists,
- merge them into one sorted list.
- do this by combining the nodes (records) of the first two lists without losing any data
- if the same patient record appears in both lists, the output should contain both of them

## data structure
- define a singly linked list, where
- each node represents a health metric recorded for a patient on a given day
- node should contain at least the following information:
    - One health metric value (e.g., blood sugar level, heart rate). 
    - A pointer/reference to the next metric in the sequence (or null/None if it is the last metric)
### example record:
Patient A:
- SSN
- Age
- Full Name

## software module requirements
- solution can take the heads of two sorted linked lists,
- merge the two into one sorted linked list
- keep all records (nodes), so no data loss, keep dups
- solution enables fast search by SSN lookup

## clarifying questions?
- add these here as well as to video
-- so are we keeping duplicates, and how are we sorting them if we are sorting by SSN? Does it matter which duplicate record comes first?

- include any decisions made in leiu of being able to ask an interviewer

## testing requirements
- test cases using unit test frameworks.
- test cases for normal cases as well as edge cases 
    - 3 test cases testing normal cases  
    - 3 test cases testing edge cases

<img width="948" height="698" alt="Screenshot 2026-06-14 203326" src="https://github.com/user-attachments/assets/d50be1a9-d9c9-407c-8d6f-962a93bf91a4" />
