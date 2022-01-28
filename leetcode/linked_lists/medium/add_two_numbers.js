var addTwoNumbers = function(l1, l2) {
    //set l1 to be the larger list
    let l1Length = 0;
    let l2Length = 0; 
    let l1Pointer = l1
    let l2Pointer = l2
    while(l1Pointer){
        l1Length += 1
        l1Pointer = l1Pointer.next 
        
    }
    while (l2Pointer){
        l2Length += 1
        l2Pointer = l2Pointer.next 
        
    }
    if (l2Length > l1Length){
        let temp = l2
        l2 = l1 
        l1 = temp 
    } 
   
    //set remainder to be 0 
    let rem = 0 
    let values = []
    let l2Val = 0 
    //iterate through l1 
    while (l1){
        if (!l2) l2Val = 0 
        else l2Val = l2.val 
        //add rem + l1 val + l2 val % 10 
        
        let currVal = (rem + l1.val + l2Val) % 10 
        //push this number into an array 
        values.push(new ListNode(currVal))
        
         //rem = Math.floor l1 val + 12 val / 10 
        rem = Math.floor((l1.val + l2Val + rem) / 10)
        l1 = l1.next 
        if (l2) l2 = l2.next  
    }
    if (rem){
        values.push(new ListNode(rem))
    }
    
    //iterate through array and create a list
    let i = 0
    while( i < values.length - 1){
        values[i].next = values[i + 1]
        i += 1
    }
    return values[0]
    
    
};