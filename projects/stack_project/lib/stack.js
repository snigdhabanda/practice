// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
    constructor(){
        this.top = null 
        this.bottom = null 
        this.length = 0 
    }

    //add to front of stack 
    push(val){
        let newNode = new Node(val)
        if (!this.top){
            this.top = newNode 
            this.bottom = newNode
        }
        else{
            let temp = this.head 
            this.head = newNode 
            this.head.next = temp 
        }

        return this.length++
    }

    //remove from front 
    pop(){
        if (!this.top) return null
        if (this.top === this.bottom){
            this.bottom = null 
        }
        let temp = this.top 
        this.top = this.top.next 
        this.length--
        return temp.val 
    }

}

exports.Node = Node;
exports.Stack = Stack;
