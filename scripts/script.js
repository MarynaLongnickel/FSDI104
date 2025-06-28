// function trackClicks() {
//     console.log('Click');
// }

// changing text
// function mood(feeling) {
//     let message;

//     switch (feeling) {
//         case ':)': message = "I'm happy!"; break;
//         case ':(': message = "I'm sad."; break;
//         case ':D':  message = "I'm excited!"; break;
//         default: message = "I don't know how I feel.";
//     }

//     document.getElementById('textField').textContent = message;
// }

// Creating Arrays
//let arrayName = [ "value1", "value2", "so on..."];

// let fruits = ["banana", "apple", "orange", "avocado"];
//         index    0         1         2         3

//Accessing to a value by position or index
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits);

//The size of my array – How many item
// console.log(fruits.length);

//Challenge: Use a for loop to print all the values in the fruits array
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// fruits.push('watermellon');
// fruits.unshift('grapes');
// fruits.pop();
// fruits.splice(3, 1);

// -------------------------------------------------

// let movies = ["Indiana Jones", 
//                 "Avengers", 
//                 "Sherlock Holmes", 
//                 "James Bond", 
//                 "Monty Python"];

// console.log(movies);
// for (let m of movies) {
//     console.log(m);
// }
// console.log(movies[0] + ', ' + movies[movies.length - 1])
// movies[2] = "Phantom of the Opera";
// movies.unshift("The Matrix");
// movies.push("Inception");
// movies.pop();
// console.log(movies);

// -------------------------------------------------

// let numbers = [10, 20, 30, 40, 50];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// let average = sum / numbers.length;

// console.log("Sum:", sum);
// console.log("Average:", average);

// -------------------------------------------------

let user = {
  username: "Marina123",
  email: "marina@mail.com",
  age: 37
};

// Step 2: Use a template literal to display a welcome message
let message = `Welcome, ${user.username}! Your registered email is ${user.email}, and you are ${user.age} years old.`;

// Output the message
console.log(message);