# singly linked list for patient health data

## "story"

- maintaining and analyzing patient health records
- records often include time-series data, such as daily blood sugar levels, heart rate, or other vital signs, recorded in a sequential manner
- detecting symmetrical patterns in these records could provide insights

## goal: 
develop a function that analyzes a patient's health record, represented as a singly linked list, and determines whether the sequence of health metrics recorded over a period exhibits a symmetrical pattern. This symmetry could indicate a return to a baseline health status or the recurrence of a condition in a cyclic manner.

## data structure
- define a singly linked list, where
- each node represents a health metric recorded for a patient on a given day
- node should contain at least the following information:
    - One health metric value (e.g., blood sugar level, heart rate). 
    - A pointer/reference to the next metric in the sequence (or null/None if it is the last metric)

## function requirements
- implement a function named `isHealthRecordSymmetric` 
- it takes the head of the singly linked list as input and returns true if the sequence of health metrics is symmetrical (a palindrome) and false otherwise
- function should be efficient in terms of space and time complexity

## clarifying questions?
- add these here as well as to video
- include any decisions made in leiu of being able to ask an interviewer

## testing requirements
- test cases using unit test frameworks.
- test cases for normal cases as well as edge cases 
    - 3 test cases testing normal cases  
    - 3 test cases testing edge cases

## video
(notes for me)
don't forget:
- include diagrams if you have any
- present Time and Space complexity of your solution. 
- explain the trade-offs
- are there optimization opportunities?