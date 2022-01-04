// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here

//Notes:
//have to handle both if there is a head and if there is no head cases
//always check if length has reached 0 after deletion from either end
//know what the linked list resets to (constructor values)
//if there is no head and you're setting it, you have to set both the head and the tail to that value 
//classic way to iterate is curr.next (check if you've reached the tail)
class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        //first set the references
        if (!head) this.head = new Node(val)
        else this.tail.next = new Node(val)

        //then set the tail
        this.tail = new Node(val)
        this.length ++
        return this; 
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined 
        let curr = this.head 
        let newTail = curr
        while(curr.next){
            //the new tail is one before the last
            newTail = curr
            //curr goes till the tail 
            curr = curr.next 
        }
        this.tail = newTail
        this.tail.next = null 
        length--;

        if (length === 0){
            this.head = null
            this.tail = null
            length = 0
        }
        return this 
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {

        if (this.head){
        let temp = this.head 
        this.head = new Node(val)
        this.head.next = temp 
        }
        else{
            this.head = new Node(val)
            this.tail = new Node(val)
        }
        length++
        return this 
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (head){
            this.head = this.head.next 
        }
        else{
            return undefined; 
        }
        length--; 
        if (length === 0){
            this.tail = null
        }
        return this
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head 
        while (node){
            if (node.val === target) return true 
            node = node.next 
        }
        return false 
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index > length) return null 
        let node = this.head
        let counter = 0; 
        while (counter !== index){
            node = node.next
            counter += 1
        }
        return node  
    }

    // TODO: Implement the set method here
    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode){
            foundNode.val = val 
            return true 
        }
        return false; 
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.addToHead(val)
        if (index === this.length) return !!this.addToTail(val)
        
        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let temp = prevNode.next
        prevNode.next = newNode 
        newNode.next = temp 
        this.length++
        return true 

    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length - 1) return this.removeTail();
        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;

    }

    // TODO: Implement the size method here
    size() {
        return this.length 
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
