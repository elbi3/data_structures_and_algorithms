//class SinglyLinkedList responsibilities:
//what is head node?
//what is tail node?
//length of list?
//method: push new Node onto list
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
};
//class Node responsibility:
//track blood pressure (value)
//track next node 
class Node {
    constructor(bp) {
        this.value = bp;
        this.next = null;
    }
};

const myList = new SinglyLinkedList();
myList.push(98);
myList.push(87);
myList.push(77);
myList.push(99);
myList.push(95);
// console.log("myList: ", myList);

function isHealthRecordSymmetric(head){
    //trivial cases where list is 0 or 1
    //odd vs even length

    let slow = head;
    let fast = head;
    let firstHalfReversed = [];
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        firstHalfReversed.push(slow.value);
        console.log(firstHalfReversed);
    };

    //do something about odd. 
    // console.log("fast:", fast);
    if(fast !== null) {
        //list is odd
    }
    firstHalfReversed.reverse();
    console.log(firstHalfReversed);
    let secondPass = head;
    let counter = 0;
    while(secondPass){
        secondPass = secondPass.next;
        counter++;
        if(counter > firstHalfReversed.length) {
            //compare values
        }
    }
    if(){}
};
//function to check palindrome shape
// returns true if the sequence of health metrics is symmetrical (a palindrome) 
// and false otherwise
isHealthRecordSymmetric(myList.head);
export { SinglyLinkedList, Node, isHealthRecordSymmetric };