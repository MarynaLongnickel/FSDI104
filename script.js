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

let fruits = ["banana", "apple", "orange", "avocado"];
//         index    0         1         2         3

//Accessing to a value by position or index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits);

//The size of my array – How many item
console.log(fruits.length);

//Challenge: Use a for loop to print all the values in the fruits array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.push('watermellon');
fruits.unshift('grapes');
fruits.pop();
fruits.splice(3, 1);