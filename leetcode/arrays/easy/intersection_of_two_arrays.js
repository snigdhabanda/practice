var intersect = function(nums1, nums2) {
    //create hashmap
    let hash = {}
    let newArr = []
    
    //iterate over nums1
    for (let i = 0; i < nums1.length; i++) {
        //if not in hashmap, add with val 1
        if (!(nums1[i] in hash)){
            hash[nums1[i]] = 1
        }
        //else increment
        else {
            hash[nums1[i]] += 1
        }
    }
    

    //iterate over nums2
    for (let i = 0; i < nums2.length; i++){
        //if val in hashmap & > 0 decrement count 
        if (nums2[i] in hash && hash[nums2[i]] > 0) {
            newArr.push(nums2[i])
            hash[nums2[i]] -= 1
        }
    }
    
    return newArr
    
    
};