// Create initial pets using object literals
const pets = [
  { name: "Buddy", age: 6, gender: "Male", service: "Grooming", breed: "Golden Retriever" },
  { name: "Luna", age: 9, gender: "Female", service: "Vaccination", breed: "Poodle" },
  { name: "Charlie", age: 2, gender: "Male", service: "Nail Trim", breed: "Beagle" }
];

// Display total number of registered pets
function displayPetCount() {
  document.getElementById("petCount").textContent = pets.length;
}

// Display all pet names in the HTML
function displayPetNames() {
  const petList = document.getElementById("petNames");
  for (let i = 0; i < pets.length; i++) {
    const li = document.createElement("li");
    li.textContent = pets[i].name;
    petList.appendChild(li);
  }
}

// Extra: Calculate average age of pets
function displayAverageAge() {
  let totalAge = 0;
  for (let i = 0; i < pets.length; i++) {
    totalAge += pets[i].age;
  }
  const avg = (totalAge / pets.length).toFixed(1);
  document.getElementById("avgAge").textContent = avg;
}

// Run all functions on page load

displayPetCount();
displayPetNames();
displayAverageAge();
