// Salon Info for Footer
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

// Inject Footer Info
const footer = document.getElementById("footer-info");
if (footer) {
  footer.innerHTML = `
    <small>
      &copy; 2025 <strong>${salon.name}</strong> &nbsp; | &nbsp;
      Phone: <a href="tel:${salon.phone.replace(/-/g, '')}" class="text-light text-decoration-none">${salon.phone}</a> &nbsp; | &nbsp;
      Address: ${salon.address.street}, ${salon.address.state}, ${salon.address.country} &nbsp; | &nbsp;
      Hours: ${salon.hours.open} - ${salon.hours.close}
    </small>
  `;
}

// REGISTER.HTML - Pet Registration Logic
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
  new Pet("Luna", 5, "Female", "Poodle", "Nail Trim", "Dog"),
  new Pet("Milo", 2, "Male", "Tabby", "Vaccination", "Cat"),
  new Pet("Bella", 4, "Female", "Siamese", "Nail Trim", "Cat"),
  new Pet("Charlie", 1, "Male", "Beagle", "Haircut", "Dog"),
  new Pet("Daisy", 3, "Female", "Bulldog", "Bath", "Dog")
];

let editingIndex = null;

function displayPetCount() {
  const petCountEl = document.getElementById("petCount");
  if (petCountEl) petCountEl.textContent = pets.length;
}

function clearForm() {
  const form = document.getElementById("petForm");
  if (form) form.reset();
  editingIndex = null;
  const submitBtn = document.querySelector("#petForm button[type='submit']");
  if (submitBtn) submitBtn.textContent = "Register";
}

function displayCards() {
  const container = document.getElementById("petCards");
  if (!container) return;

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

// Edit and delete pet functionality
function editPet(index) {
  const pet = pets[index];
  document.getElementById("petName").value = pet.name;
  document.getElementById("petAge").value = pet.age;
  document.getElementById("petGender").value = pet.gender;
  document.getElementById("petBreed").value = pet.breed;
  document.getElementById("petService").value = pet.service;
  document.getElementById("petType").value = pet.type;
  editingIndex = index;
  const submitBtn = document.querySelector("#petForm button[type='submit']");
  if (submitBtn) submitBtn.textContent = "Update";
}

function deletePet(index) {
  if (confirm(`Delete ${pets[index].name}?`)) {
    pets.splice(index, 1);
    displayPetCount();
    displayCards();
    if (editingIndex === index) clearForm();
  }
}

function setupRegisterForm() {
  const form = document.getElementById("petForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
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
}

// Dark Mode Toggle for Cards
document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("modeToggle");
  const body = document.body;

  // Set initial theme based on localStorage
  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) {
    body.classList.add("dark-mode");
    modeToggle.textContent = "Light Mode";
  }

  // Toggle dark mode
  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isNowDark = body.classList.contains("dark-mode");
      modeToggle.textContent = isNowDark ? "Light Mode" : "Dark Mode";
      localStorage.setItem("theme", isNowDark ? "dark" : "light");
      updateCardsDarkMode(isNowDark);
    });
  }

  // Initialize cards in the correct theme
  updateCardsDarkMode(localStorage.getItem("theme") === "dark");
});

// Update card styles for dark mode
function updateCardsDarkMode(isDark) {
  const petCards = document.querySelectorAll('.card');
  petCards.forEach(card => {
    card.classList.toggle('dark-card', isDark);
  });
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
  setupRegisterForm();
  displayPetCount();
  displayCards();
});
