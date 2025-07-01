// Pet class definition
class Pet {
  constructor(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
  }
}

// Initial pets array
const pets = [
  new Pet("Buddy", 3, "Male", "Golden Retriever", "Grooming", "Dog"),
  new Pet("Luna", 5, "Female", "Poodle", "Vaccination", "Dog"),
  new Pet("Milo", 2, "Male", "Tabby", "Bath", "Cat")
];

// Display total number of pets
function displayPetCount() {
  document.getElementById("petCount").textContent = pets.length;
}

// Display pets in the table
function displayRow() {
  const tbody = document.getElementById("petTableBody");
  tbody.innerHTML = "";
  pets.forEach(pet => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.gender}</td>
      <td>${pet.breed}</td>
      <td>${pet.service}</td>
      <td>${pet.type}</td>
    `;
    tbody.appendChild(row);
  });
}

// Handle form submission
document.getElementById("petForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("petName").value;
  const age = parseInt(document.getElementById("petAge").value);
  const gender = document.getElementById("petGender").value;
  const breed = document.getElementById("petBreed").value;
  const service = document.getElementById("petService").value;
  const type = document.getElementById("petType").value;

  const newPet = new Pet(name, age, gender, breed, service, type);
  pets.push(newPet);

  displayPetCount();
  displayRow();

  document.getElementById("petForm").reset();
});

// Initialize with default data
displayPetCount();
displayRow();
