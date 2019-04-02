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



    //HOF
  function last(arr, cb) {
  // last passes the last item of the array into the callback.

    return cb(arr);
}

    //cb

    function lastitem(arr){
      return arr[arr.length - 1]
    }

    //invoke
console.log(last(items,lastitem));



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
  function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    return cb(item,list);
}

  //cb

  function checks(item,list) {
    return list.includes(item);     // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  }

  //invoke

  console.log(contains('Banana', items, checks));




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
