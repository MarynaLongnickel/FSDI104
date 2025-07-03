const salon = {
  name: "Fashion Pet",
  phone: "123-456-7890",
  address: {
    street: "101 Main St",
    state: "CA",
    country: "USA"
  },
  hours: {
    open: "9:00 AM",
    close: "6:00 PM"
  }
};

const footer = document.getElementById("footer-info");
footer.innerHTML = `
  <small>
    &copy; 2025 <strong>${salon.name}</strong> &nbsp; | &nbsp;
    Phone: <a href="tel:${salon.phone.replace(/-/g, '')}" class="text-light text-decoration-none">${salon.phone}</a> &nbsp; | &nbsp;
    Address: ${salon.address.street}, ${salon.address.state}, ${salon.address.country} &nbsp; | &nbsp;
    Hours: ${salon.hours.open} - ${salon.hours.close}
  </small>
`;

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

const pets = [
  new Pet("Buddy", 3, "Male", "Golden Retriever", "Grooming", "Dog"),
  new Pet("Luna", 5, "Female", "Poodle", "Vaccination", "Dog"),
  new Pet("Milo", 2, "Male", "Tabby", "Bath", "Cat")
];

function displayPetCount() {
  document.getElementById("petCount").textContent = pets.length;
}

function clearForm() {
  document.getElementById("petForm").reset();
  editingIndex = null;
  document.querySelector("#petForm button[type='submit']").textContent = "Register";
}

function displayCards() {
  const container = document.getElementById("petCards");
  container.innerHTML = "";

  pets.forEach((pet, index) => {
    const card = document.createElement("div");
    card.className = "col";

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${pet.name} (${pet.type})</h5>
          <p class="card-text mb-1"><strong>Age:</strong> ${pet.age}</p>
          <p class="card-text mb-1"><strong>Gender:</strong> ${pet.gender}</p>
          <p class="card-text mb-1"><strong>Breed:</strong> ${pet.breed}</p>
          <p class="card-text mb-3"><strong>Service:</strong> ${pet.service}</p>
          <div class="mt-auto d-flex justify-content-between">
            <button class="btn btn-primary btn-sm" onclick="editPet(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deletePet(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

let editingIndex = null;

function editPet(index) {
  const pet = pets[index];
  document.getElementById("petName").value = pet.name;
  document.getElementById("petAge").value = pet.age;
  document.getElementById("petGender").value = pet.gender;
  document.getElementById("petBreed").value = pet.breed;
  document.getElementById("petService").value = pet.service;
  document.getElementById("petType").value = pet.type;

  editingIndex = index;
  document.querySelector("#petForm button[type='submit']").textContent = "Update";
}

function deletePet(index) {
  if (confirm(`Delete ${pets[index].name}?`)) {
    pets.splice(index, 1);
    displayPetCount();
    displayCards();
    if (editingIndex === index) {
      clearForm();
    }
  }
}

document.getElementById("petForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("petName").value;
  const age = parseInt(document.getElementById("petAge").value);
  const gender = document.getElementById("petGender").value;
  const breed = document.getElementById("petBreed").value;
  const service = document.getElementById("petService").value;
  const type = document.getElementById("petType").value;

  if (editingIndex !== null) {
    pets[editingIndex] = new Pet(name, age, gender, breed, service, type);
  } else {
    pets.push(new Pet(name, age, gender, breed, service, type));
  }

  displayPetCount();
  displayCards();
  clearForm();
});

displayPetCount();
displayCards();
