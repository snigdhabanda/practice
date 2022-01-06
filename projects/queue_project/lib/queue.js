// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val){
        this.val = val 
        this.next = null 
    }
}

class Queue {
    constructor(){
        this.front = null
        this.bottom = null
        this.length = 0
    }
    //pushes to end
    enqueue(val){
        let newNode = new Node(val)
        if (!this.front){
            this.front = newNode
            this.back = newNode 
        }
        else{
            this.back.next = newNode 
            this.back = newNode 
        }
        this.length += 1
    }

    //removes from front 
    dequeue(){
        if (!this.front) return null 
        if (this.front === this.back){
            this.back = null 
        }
        let temp = this.front 
        this.front = this.front.next
        this.length--  
        this.length -= 1
        return temp.val 
    }
}

exports.Node = Node;
exports.Queue = Queue;