// Sum without highest and lowest number
// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


// My solution

function sumArray(array) {
    console.log("array", array)
      if (array == null) {
        console.log("null - return 0")
        return 0}  
      if (array.length<3) {
         console.log("return 0")
      console.log("length", array.length)
        return 0}
      
     else {
         console.log("Will sum")
      console.log("length", array.length)
       const sortedArray = array.sort((a,b)=>a-b)
       console.log("sorted", sortedArray)
       const firstElement = sortedArray.shift()
       const lastElement = sortedArray.pop()
       console.log("removed", sortedArray)
       let sumOfArray = 0;
       sortedArray.forEach((element)=> sumOfArray += element)
       console.log("sum", sumOfArray)
       return sumOfArray
     } 
     
    
    }
    
    // Plan
    // If array is empty, or only 1 value -> return 0
    // Order values in array highest to lowest
    // Take out first and last element in array
    // Sum the rest