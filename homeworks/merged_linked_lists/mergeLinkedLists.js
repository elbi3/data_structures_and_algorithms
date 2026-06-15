
class Record {
    constructor(ssn, age, fullName) {
        this.ssn = ssn;
        this.age = age;
        this.fullName = fullName;
        this.next = null;
    };
}; //node

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    push(ssn, age, fullName){
        const newRecord = new Record(ssn, age, fullName);
        if(this.head === null){
            this.head = newRecord;
            this.tail = newRecord;
        } else {
            this.tail.next = newRecord;
            this.tail = newRecord;
        }
        this.length++;
    };
};

function mergeTwoSortedLists(head1, head2){
    //point at something fake
    let dummy = { next: null };
    //make a tail
    let tail = dummy; //point at dummy, not dummy.next
    while(head1 && head2){ //don't check key, check box
        if(head1.ssn <= head2.ssn) {
            tail.next = head1; //node becomes the front
            head1 = head1.next;
            // console.log("head1.next: ", head1.next);
        } else {
            //head1.ssn > head2.ssn
            tail.next = head2;
            head2 = head2.next;
            //otherwise attach head2.ssn to the tail
        }
        //now peek by assigning tail to tail.next
        tail = tail.next;
    }

    tail.next = head1 || head2;
    return dummy.next;
};

const healthMerge = new SinglyLinkedList();
healthMerge.push(1112223333, 45, "Smee");
healthMerge.push(5556667777, 23, "Peter");
healthMerge.push(7776665555, 23, "Moira");  
healthMerge.push(9554448888, 66, "Rufio");

const carePlus = new SinglyLinkedList();
carePlus.push(2223331111, 38, "Captain");
carePlus.push(6665551111, 11, "Maggie Smith");
carePlus.push(7776665585, 34, "Hook");    
carePlus.push(7776665555, 23, "Moira");  
carePlus.push(7774444888, 42, "Tinker"); 

// console.log("healthMerge list: ", healthMerge);
// console.log("--------------------------------------");
// console.log("carePlus list: ", carePlus);

const result = mergeTwoSortedLists(carePlus.head, healthMerge.head);
// console.log("result: ", result);

function printList(head) {
    const result = [];
    while (head) {
        result.push(`${head.ssn} (${head.fullName}, age ${head.age})`);
        head = head.next;
    }
    console.log(result.join('\n'));
}

printList(result);
export { mergeTwoSortedLists, SinglyLinkedList, Record};