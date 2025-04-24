// Problem 1: Favorite Foods
// Array Of Favorite Foods

let pizzatopping1 = "pepperoni";

let pizzatopping2 = "Smoked Ham";

let pizzatopping3 = "Sauce";

let pizzatopping4 = "Cheese";

let pizzatopping5 = "Meat";

// Log the first and last food in the array.

console.log(pizzatoppings[pizzatoppings.length - 1]);

// Add one more food using .push() and log the new array.

pizzatoppings.push("Steak")

// Problem 2: Guest List
// Create an array with a list of guests.

let guest1 = "Jeremiah Dixon"

let guest2 = "Angel Watts"

let guest3 = "Nicholas Bush"

let guest4 = "Shantae Marshall"

// Remove the first guest using .shift()

let guests = ["Jeremiah Dixon", "Angel Watts", "Nicholas Bush", "Shantae Marshall"];

guests.shift ("Jeremiah Dixon")

// Add a new guest at the end using .push()

guests.push("Kevin Carter")

// Log how many guests are coming (.length)

console.log(guests.length)

// Problem 3: Weekend Tasks

let tasks = ["Laundry", "Groceries", "Coding", "Naps"];

// 2. Write a function called printTasks() that loops through the array and logs each task.

var Tasks = ["Laundry","Groceries", "Coding", "Naps"];
var arrayLength = Tasks.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(Tasks[i]);
    //Do something
}

for (8=0;i<=5;i++)
    {
        MyFunc(Tasks);
    }


    // Problem 4: Reverse It (Manual Reverse)

// Create this array:

// let numbers = [1, 2, 3, 4, 5];

// Manually reverse it by looping (don’t use .reverse()!)

// Log the result

let numbers = [1, 2, 3, 4, 5]

// Iterate backward over array elements
const numeralArray = [1, 2, 3, 4, 5];

for (let pos = numeralArray.length - 1; pos >= 0; pos--) {
  console.log(numeralArray[pos]);
}
// Array Literal

let pizzatoppings = ["pepperoni", "Smoked Ham", "Sauce", "Cheese", "Meat"];

// Everything Below Is Strictly Experimental and has nothing to do with the assignment

var myArray = ["Rodel", "Mike", "Ronnie", "Betus"];

function firstAndLast(array) {
  var firstItem = myArray[0];
  var lastItem = myArray[myArray.length - 1];

  var objOutput = {
    first: firstItem,
    last: lastItem,
  };

  return objOutput;
}

var display = firstAndLast(myArray);

console.log(display);

// UPDATE: New Modification (I still have no idea what im doing 100% seeing as i have not gone through and watch the 3 hour javascript video yet, i'm getting help from w3schools☠️)

var myArray = ["Rodel", "Mike", "Ronnie", "Betus"];

function firstAndLast(array) {
  var firstItem = myArray[0];
  var lastItem = myArray[myArray.length - 1];

  var objOutput = {};
  objOutput[firstItem] = lastItem;

  return objOutput;
}

var display = firstAndLast(myArray);

console.log(display);
