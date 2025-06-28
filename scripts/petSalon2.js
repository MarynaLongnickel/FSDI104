// Salon object
const salon = {
  name: "Fashion Pet",
  phone: "123-456-7890",
  address: {
    street: "Main St",
    number: "101"
  }
};

// Display salon info
function displaySalonInfo() {
  const info = document.getElementById("salonInfo");
  info.innerHTML = `
    <h2>${salon.name}</h2>
    <p>Phone: ${salon.phone}</p>
    <p>Address: ${salon.address.number} ${salon.address.street}</p>
  `;
}

// Pet constructor
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

const pets = [];

pets.push(new Pet("Buddy", 3, "Male", "Golden Retriever", "Grooming", "Dog"));
pets.push(new Pet("Luna", 5, "Female", "Poodle", "Vaccination", "Dog"));
pets.push(new Pet("Milo", 2, "Male", "Tabby", "Bath", "Cat"));

// Display pet count
function displayPetCount() {
  document.getElementById("petCount").textContent = pets.length;
}

// Display pet names
function displayPetNames() {
  const petList = document.getElementById("petNames");
  petList.innerHTML = "";
  pets.forEach(pet => {
    const li = document.createElement("li");
    li.textContent = `${pet.name} (${pet.type})`;
    petList.appendChild(li);
  });
}

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
  displayPetNames();

  document.getElementById("petForm").reset();
});

displaySalonInfo();
displayPetCount();
displayPetNames();

