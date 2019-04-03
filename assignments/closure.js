// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Global Scope (the world in which our code lives in) 

// Space of code!

function pizza() {
  // The lexical scope of topping is pizza() because that's where it was initially defined. Belong === lexical
  const topping = "pepperoni";
  console.log(`${topping} is my favourite!`);

  
  function crust() {
    const typeofcrust = "deep pan";
    console.log(`The governor said: I love ${typeofcrust}!`); 
    console.log(`The mayor asked: Where is my ${topping}!`);
   
  }// crust 
  
  crust(); //works in the pizza block

}// pizza

pizza();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
