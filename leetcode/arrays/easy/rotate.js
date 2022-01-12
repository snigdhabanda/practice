//Rotate Array 
var rotate = function(nums, k) { 
    let arrDup = [...nums]
    
    for (let i = 0; i < arrDup.length; i++){
        nums[(i + k) % (arrDup.length)] = arrDup[i]
    }
};



console.log(rotate([-1,-100,3,99]), 2)