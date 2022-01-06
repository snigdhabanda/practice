//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


//O(log(n)) (b/c of sorting)
//space: O(n)
var merge = function(intervals) {
    //first sort the arrays by their first number 
     //if the next start <= previous end
     //take the maximum of the end values, use the prev's numbers start
     //push this array into result array
     //else push next into result
     if (!intervals.length) return intervals
     intervals.sort((a,b) => a[0] - b[0])
     let prev = intervals[0]
     let res = [prev]
     
     for (let curr of intervals){
         if (curr[0] <= prev[1]){
             prev[1] = Math.max(prev[1], curr[1])
         }
         else{
             res.push(curr)
             prev = curr 
         }
         
     }
     return res 
 };