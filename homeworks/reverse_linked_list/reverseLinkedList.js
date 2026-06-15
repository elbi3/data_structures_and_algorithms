class Order {
    constructor(id, customer, order){
        this.id = id;
        this.customer = customer;
        this.order = order;
        this.next = null;
    }
};

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(id, customer, order){
        const newOrder = new Order(id, customer, order);

        if(this.head === null) {
            this.head = newOrder;
            this.tail= newOrder;
        } else {
            this.tail.next = newOrder;
            this.tail = newOrder;
        }

    };

    display(){
        let store = [];
        if(!this.head) {
            return "Theres nothing!";
        };
        let pointer = this.head;
        while(pointer){
            store.push(`customer ${pointer.customer} with id # ${pointer.id} purchased ${pointer.order}`);
            pointer = pointer.next;
        };
        this.head
        for(let i = 0; i < store.length; i++){
            console.log(`${store[i]}\n`);
        }
    };

    reverse(){
//save, flip, shift, shift!
        let previous = null; 
        let current = this.head;
        this.tail = this.head;
        while(current){ 
            let whatsAhead = current.next;
            current.next = previous;                    
            previous = current;                    
            current = whatsAhead;                    
            //point head to nothing
        };
        this.head = previous; 
    };

}

const orderList = new SinglyLinkedList();
orderList.append(123, "Mayhem", "23 bottles of garage");
orderList.append(124, "Normal", "23 bottles of catsup");
orderList.append(125, "Rick", "large tv");
orderList.append(126, "Joie", "bag of pencils");
orderList.append(127, "Evee", "three stars");
// console.log("list: ", orderList);
orderList.display();
orderList.reverse();
orderList.display();