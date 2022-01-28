var oddEvenList = function(head) {
    //if there is no head or head.next or head.next.next then return head 
    if (!head || !head.next || !head.next.next) return head 
    
    //set oddDummy to head (odd); evenDummy to head.next(even)
    let oddDummy = new ListNode(0)
    let evenDummy = new ListNode(0)
    
    let odd = head 
    let even = head.next
    
    //store even.next as next 
    let next = head.next.next
    
    oddDummy.next = odd 
    evenDummy.next = even 
    
    //set odd.next & even.next to null 
    odd.next = null 
    even.next = null 
    
    
    let isOdd = true; 
    
    
    while(next){
         //store next's next (if this exists)
        let nextTemp = next.next 
        //if isOdd
        if (isOdd){
            //set odd.next to next 
            odd.next = next 
            //set next's next to null
            next.next = null 
            //change odd to odd.next 
            odd = odd.next 
            //set is Odd to false 
            isOdd = false 
        }
        //else 
        else{
            //set even.next to next 
            even.next = next 
            //set next's next to null
            next.next = null 
            //change even to even.next 
            even = even.next 
            //set isOdd to true
            isOdd = true; 
        }
        next = nextTemp 
    }
    
    //connect last odd to evendummy 
    odd.next = evenDummy.next 
   
   return oddDummy.next 
    
    
    
    
};