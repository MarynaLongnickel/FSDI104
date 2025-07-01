// Get the form

// const form = document.querySelector("form");

// // Get the button
// const submitButton = form.elements["submitButton"];

// // Function tobe triggeres after clicking submit
// function onSubmitButton(event) {
//     event.preventDefault(); // Prevents browser from refreshing

//     // get the submitted information
//     const username = form.elements["username"].value;
//     const email = form.elements["email"].value;
//     const password = form.elements["password"].value;

//     // add the values to the html, ...
//     console.log("Username: ", username)
//     console.log("Email: ", email)
//     console.log("Password: ", password)

//     // for UX, clear the form

//     form.reset();
// }

const form = document.getElementById("productForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const name = form.elements["productName"].value;
  const price = form.elements["price"].value;
  const category = form.elements["category"].value;

  console.log("Product Name:", name);
  console.log("Price:", price);
  console.log("Category:", category);
});