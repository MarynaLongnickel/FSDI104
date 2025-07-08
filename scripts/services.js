function Service(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

$(document).ready(function(){
  $("#servicesRegistrationForm").on("submit", function(e){
    e.preventDefault();

    const nameInput = $("#serviceName");
    const descInput = $("#serviceDescription");
    const priceInput = $("#servicePrice");

    const name = nameInput.val().trim();
    const description = descInput.val().trim();
    const price = priceInput.val().trim();

    nameInput.removeClass("is-invalid");
    descInput.removeClass("is-invalid");
    priceInput.removeClass("is-invalid");

    let hasError = false;
    let errorMessages = "";

    if (!name) {
      nameInput.addClass("is-invalid");
      errorMessages += "• Input the service name.\n";
      hasError = true;
    }

    if (!description) {
      descInput.addClass("is-invalid");
      errorMessages += "• Input the service description.\n";
      hasError = true;
    }

    if (!price || isNaN(price) || Number(price) <= 0) {
      priceInput.addClass("is-invalid");
      errorMessages += "• Input a valid price greater than 0.\n";
      hasError = true;
    }

    if (hasError) {
      alert("Please fix the following errors:\n\n" + errorMessages);
      return;
    }

    const service = new Service(name, description, parseFloat(price));
    console.log("Service registered:", service);

  });
});
