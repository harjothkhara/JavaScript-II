// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 

  firstItem(items, function(first) {
    console.log(first)
  });

  Another way:
  
  set cb as a function expression:
  
  const arraypos = function(first) {
    console.log(first)
  }

  HOF:
  
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  Invoke:

  firstItem(items, arraypos)


*/

    //HOF
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    return cb(arr);
}

    //cb
function arrlength(arr){
  return arr.length;
}   

  //invoke
  console.log(getLength(items, arrlength));



  
  // [last] passes the [last item of the array] [into the callback].

  // HOF using "cb" as the call back 
  function last(arr, cb) {
  return cb(arr[arr.length - 1]);
 }

 // invoke cb
 last (items, function(lastitem){
  console.log(lastitem); 
 }); 


    //HOF
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}

  //cb

  function add (x,y){
    return x + y;
  }

  //invoke

  console.log(sumNums(2,5,add));


    //HOF
  function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x,y);
}

  //cb

  function multiple(x,y) {
    return x * y ;
  }

    //invoke

  console.log(multiplyNums(3,7, multiple));



    //HOF
  // [contains] [checks] if an [item] is present [inside of the given array/list.]
 // Pass true to the callback if it is, otherwise pass false. 
  function contains(item, list, cb) {
    return cb(list.includes(item));   
  }
  // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.


  //invoke cb

  contains('Banana', items, function(checks){
    console.log(checks);
  });




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
